import { AsyncContainerModule } from 'inversify';
import { Connection, createConnection } from 'typeorm';
import { RFC } from '../../entity/RFC';

export class DatabaseContainerModule extends AsyncContainerModule {
    constructor() {
        super(async (bind) => {
            bind(Connection).toConstantValue(
                await createConnection({
                    type: 'mysql',
                    host: process.env.DB_HOST ?? 'localhost',
                    port: parseInt(process.env.DB_PORT ?? '3306', 10),
                    username: process.env.DB_USER ?? 'root',
                    password: process.env.DB_PASS ?? '',
                    database: process.env.DB_NAME ?? 'rfc_synchronizer',
                    synchronize: true,
                    entities: [RFC],
                }),
            );
        });
    }
}
