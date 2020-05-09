import { Container } from 'inversify';
import { ApplicationContainerModule } from './module/ApplicationContainerModule';
import { LoggerContainerModule } from './module/LoggerContainerModule';
import { NetworkContainerModule } from './module/NetworkContainerModule';
import { DatabaseContainerModule } from './module/DatabaseContainerModule';

export const getConfiguredContainer = async (): Promise<Container> => {
    const container = new Container();

    container.load(new ApplicationContainerModule());
    container.load(new LoggerContainerModule());
    container.load(new NetworkContainerModule());
    await container.loadAsync(new DatabaseContainerModule());

    return container;
};
