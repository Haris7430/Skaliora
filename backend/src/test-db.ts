import { AppDataSource } from './config/data-source';
import { UserRepository } from '@infra/repositories/UserRepository';

AppDataSource.initialize().then(async () => {
  const userRepo = new UserRepository();
  const user = await userRepo.save({
    id: 1,
    name: 'Groot',
    email: 'groot@gmail.com',
    password: '12345',
  });
  console.log('user saved ', user);
});
