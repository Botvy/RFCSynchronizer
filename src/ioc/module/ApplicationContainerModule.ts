import { ContainerModule } from 'inversify';
import { Application } from '../../Application';

export class ApplicationContainerModule extends ContainerModule {
    constructor() {
        super(bind => {
            bind(Application).toSelf();
        });
    }
}
