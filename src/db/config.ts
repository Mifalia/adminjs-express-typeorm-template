import {
  DATABASE_DIALECT,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_URL,
  DATABASE_USER,
} from '../config.global.js';
import { DataSourceOptions } from 'typeorm';
import { entities } from './entities/index.js';

const config: DataSourceOptions = {
  /*
   Note: Casting "as any" to avoid TypeORM type errors when building a generic template.
   Please import types specific to your database dialect, i. e. PostgresConnectionOptions
  */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type: DATABASE_DIALECT as any,
  url: DATABASE_URL,
  database: DATABASE_NAME,
  port: DATABASE_PORT as any,
  username: DATABASE_USER,
  password: DATABASE_PASSWORD,
  entities: [...entities], // replace with typeorm entities that extends BaseEntity
  migrations: [] as any, // migrations files
  migrationsRun: false,
  migrationsTableName: 'migrations',
  migrationsTransactionMode: 'all',
  synchronize: true,
  subscribers: [],
  // set migrationsRun to true and synchronize to false if you want you DB tables to be altered only through migrations
};

export default config;
