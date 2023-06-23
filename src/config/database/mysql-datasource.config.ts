import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'root',
<<<<<<< HEAD
  database: 'teste_db',
=======
  database: 'test_db',
>>>>>>> c3f8507f892e32de2ed1d8256a0057ef58a8670c
  synchronize: false,
  logging: false,
  entities: ['src/api/components/**/*.entity{.ts,.js}'],
  migrations: [],
  subscribers: [],
  insecureAuth: true,
});