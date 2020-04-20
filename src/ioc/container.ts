import { Container } from 'inversify';
import { ApplicationContainerModule } from './module/ApplicationContainerModule';

export const getConfiguredContainer = async (): Promise<Container> => {
    const container = new Container();

    container.load(new ApplicationContainerModule());

    return container;
};
