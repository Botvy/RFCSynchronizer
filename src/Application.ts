import { inject, injectable } from 'inversify';
import { Logger } from 'winston';
import { Services } from './ioc/Services';

@injectable()
export class Application {
    private logger: Logger;

    constructor(@inject(Services.Logger) logger: Logger) {
        this.logger = logger;
    }

    async run() {
        this.logger.info('Running the RFC synchronizer');
    }
}
