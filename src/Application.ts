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

        await this.issueSynchronizer.synchronizeIssues();
    }
}
