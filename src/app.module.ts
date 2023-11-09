import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppService } from '@/app.service';
import { AuthModule } from './auth/auth.module';
import { InvoicesModule } from '@/invoices/invoices.module';
import { PrismaModule } from '@prisma/prisma.module';
import { UsersModule } from '@users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    InvoicesModule,
    PrismaModule,
    AuthModule,
    UsersModule,
  ],
  providers: [AppService],
})
export class AppModule {}
