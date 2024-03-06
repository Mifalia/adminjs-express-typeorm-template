import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'mysql',
  url: '',
  database: 'adminjsdemo',
  port: 3306,
  username: 'root',
  password: '',
  entities: ['src/db/entities/*.ts'],
  migrations: ['src/db/migrations/*.ts'],
  migrationsRun: false,
  migrationsTableName: 'migrations',
  migrationsTransactionMode: 'all',
  subscribers: [],
});
