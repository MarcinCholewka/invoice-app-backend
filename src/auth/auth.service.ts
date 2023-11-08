import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UsersService } from '@users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async login(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);

    // If no user is found, throw an error
    if (!user) {
      throw new NotFoundException(`No user found for email: ${email}`);
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If password does not match, throw an error
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    delete user.password;
    delete user.email;

    return user;
  }
}
