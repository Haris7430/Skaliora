import { User } from '@domain/entities/User';

export interface IUserReporitory {
    
  save(user: User): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}
