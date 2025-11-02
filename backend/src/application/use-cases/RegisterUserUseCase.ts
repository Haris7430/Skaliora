import { User } from '@domain/entities/User';
import { IUserReporitory } from '@domain/repositories/IUserRepository';
import bcrypt from 'bcrypt';

export class RegisterUserUseCase {
  constructor(private userRepo: IUserReporitory) {}

  async execute(name: string, email: string, password: string) {
    const existing = await this.userRepo.findByEmail(email);
    if (existing) throw new Error('Email already exists');
    const hashed = await bcrypt.hash(password, 10);

    const user = new User();
    user.email=email;
    
    user.name=name;
    user.password=hashed;

    return await this.userRepo.save(user);
  }
}
