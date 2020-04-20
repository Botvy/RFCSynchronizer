import { ContainerModule } from 'inversify';
import { IssueSynchronizer } from '../../net/IssueSynchronizer';

export class NetworkContainerModule extends ContainerModule {
    constructor() {
        super((bind) => {
            bind(IssueSynchronizer).toSelf().inSingletonScope();
        });
    }
}
