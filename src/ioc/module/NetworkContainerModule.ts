import { ContainerModule } from 'inversify';
import { IssueSynchronizer } from '../../net/IssueSynchronizer';
import { Services } from '../Services';
import { GithubClient } from '../../net/GithubClient';

export class NetworkContainerModule extends ContainerModule {
    constructor() {
        super((bind) => {
            // Bind the Github token to the container
            bind(Services.Net.Github.Token).toConstantValue(process.env.GH_TOKEN ?? '');

            bind(GithubClient).toSelf().inSingletonScope();
            bind(IssueSynchronizer).toSelf().inSingletonScope();
        });
    }
}
