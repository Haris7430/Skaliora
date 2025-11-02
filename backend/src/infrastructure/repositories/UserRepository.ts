import { Repository } from 'typeorm';
import { AppDataSource } from 'config/data-source';
import { User } from '@domain/entities/User';
import { IUserReporitory } from '@domain/repositories/IUserRepository';

export class UserRepository implements IUserReporitory {
  private repo: Repository<User> = AppDataSource.getRepository(User);

  async save(user: User): Promise<User> {
    return await this.repo.save(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.repo.findOneBy({ email: email });
  }
}
