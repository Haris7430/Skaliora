import { IUserReporitory } from '@domain/repositories/IUserRepository';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { ENV } from 'config/env';

export class LoginUserUseCase {
  constructor(private userRepo: IUserReporitory) {}

  async execute(email: string, password: string) {
    const user = await this.userRepo.findByEmail(email);
    if (!user) throw new Error('User not found');

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error('Invalid Password');

    const token = jwt.sign({ id: user.id, email: user.email }, ENV.JWT_SECRET, {
      expiresIn: '1d',
    });
    return { token, user };
  }
}
