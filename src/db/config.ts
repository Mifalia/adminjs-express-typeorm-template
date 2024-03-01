import { DATABASE_DIALECT, DATABASE_URL } from '../config.global.js';
import { DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  /*
   Note: Casting "as any" to avoid TypeORM type errors when building a generic template.
   Please import types specific to your database dialect, i. e. PostgresConnectionOptions
  */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type: DATABASE_DIALECT as any,
  url: DATABASE_URL,
  entities: [],
  migrations: [],
  migrationsRun: false,
  migrationsTableName: 'migrations',
  migrationsTransactionMode: 'all',
  subscribers: [],
};

export default config;
