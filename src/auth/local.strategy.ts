import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

import { UsersService } from '@/users/users.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super(); // pass config
  }

  async validate(email: string): Promise<any> {
    const user = await this.usersService.findOne(email);

    return user;
  }
}
