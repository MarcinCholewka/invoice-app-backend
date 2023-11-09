import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { User as UserModel } from '@prisma/client';

export class UserEntity implements UserModel {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @Exclude()
  password: string;
}
