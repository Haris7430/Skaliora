import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '@domain/entities/User';
import { ENV } from './env';
import { Task } from '@domain/entities/Task';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: ENV.DB.HOST,
  port: ENV.DB.PORT,
  username: ENV.DB.USER,
  password: ENV.DB.PASS,
  database: ENV.DB.NAME,
  entities: [User,Task],
  synchronize: true,
});
