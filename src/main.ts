import 'reflect-metadata';
import { getConfiguredContainer } from './ioc/container';
import { Application } from './Application';

(async () => {
    const container = await getConfiguredContainer();

    const application = container.get(Application);
    await application.run();
})();
