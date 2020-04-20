import { Container } from 'inversify';
import { ApplicationContainerModule } from './module/ApplicationContainerModule';
import { LoggerContainerModule } from './module/LoggerContainerModule';

export const getConfiguredContainer = async (): Promise<Container> => {
    const container = new Container();

    container.load(new ApplicationContainerModule());
    container.load(new LoggerContainerModule());

    return container;
};
