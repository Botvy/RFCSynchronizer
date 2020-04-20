import { inject, injectable } from 'inversify';
import { Logger } from 'winston';
import { Services } from '../ioc/Services';

@injectable()
export class IssueSynchronizer {
    private logger: Logger;

    constructor(@inject(Services.Logger) logger: Logger) {
        this.logger = logger;
    }

    public async synchronizeIssues() {
        this.logger.info('Synchronizing Github issues');
        this.logger.info('Synchronized Github issues');
    }
}
