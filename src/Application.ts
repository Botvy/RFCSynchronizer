import { inject, injectable } from 'inversify';
import { Logger } from 'winston';
import { Services } from './ioc/Services';
import { IssueSynchronizer } from './net/IssueSynchronizer';

@injectable()
export class Application {
    private logger: Logger;

    private issueSynchronizer: IssueSynchronizer;

    constructor(
        @inject(Services.Logger) logger: Logger,
        @inject(IssueSynchronizer) issueSynchronizer: IssueSynchronizer,
    ) {
        this.logger = logger;
        this.issueSynchronizer = issueSynchronizer;
    }

    async run() {
        this.logger.info('Running the RFC synchronizer');

        try {
            await this.issueSynchronizer.synchronizeIssues();
        } catch (e) {
            this.logger.error(`Could not synchronize the Github issues: ${e}`);

            return;
        }
    }
}
