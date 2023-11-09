import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

import { UserEntity } from '@users/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async findOne(email: string): Promise<UserEntity | undefined> {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });

    return user;
  }
}
