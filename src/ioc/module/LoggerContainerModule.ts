import { ContainerModule } from 'inversify';
import { Services } from '../Services';
import { createLogger, format, Logger, transports } from 'winston';

export class LoggerContainerModule extends ContainerModule {
    constructor() {
        super((bind) => {
            bind(Services.Logger).toConstantValue(this.getConfiguredLogger());
        });
    }

    private getConfiguredLogger(): Logger {
        const { Console } = transports;

        const consoleTransport = new Console();

        return createLogger({
            transports: [consoleTransport],
            format: format.combine(
                format.colorize(),
                format.timestamp({
                    format: 'DD.MM.YYYY HH:mm:ss',
                }),
                format.printf((context) => {
                    return `[${context.timestamp}] [${context.level}] ${context.message}`;
                }),
            ),
        });
    }
}
