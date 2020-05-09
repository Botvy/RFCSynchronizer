import { inject, injectable } from 'inversify';
import { Octokit } from '@octokit/rest';
import { Services } from '../ioc/Services';
import { retry } from '@octokit/plugin-retry';
import { throttling } from '@octokit/plugin-throttling';
import { Logger } from 'winston';

@injectable()
export class GithubClient {
    private logger: Logger;

    private client: Octokit;

    constructor(@inject(Services.Logger) logger: Logger, @inject(Services.Net.Github.Token) githubToken: string) {
        this.logger = logger;

        const CustomClient = Octokit.plugin(retry, throttling);

        this.client = new CustomClient({
            auth: githubToken,
            throttle: {
                onRateLimit: (retryAfter, options) => {
                    this.logger.warn(`Request quota exhausted for request ${options.method} ${options.url}`);

                    if (options.request.retryCount === 0) {
                        // only retries once
                        this.logger.info(`Retrying after ${retryAfter} seconds!`);
                        return true;
                    }
                },
                onAbuseLimit: (retryAfter, options) => {
                    // does not retry, only logs a warning
                    this.logger.warn(`Abuse detected for request ${options.method} ${options.url}`);
                },
            },
            retry: {
                doNotRetry: ['429'],
            },
        });
    }

    public async getRFCsForRepo(owner: string, repositoryName: string) {
        return await this.client.paginate('GET /repos/:owner/:repo/issues', {
            owner,
            repo: repositoryName,
            state: 'all',
            labels: 'RFC',
        });
    }

    public async getCommentsForIssue(owner: string, repositoryName: string, issueID: number) {
        console.log({
            owner,
            repo: repositoryName,
            issue_number: issueID,
        });

        return await this.client.issues.listComments({
            owner,
            repo: repositoryName,
            issue_number: issueID,
        });
    }
}
