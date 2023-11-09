import { Module } from '@nestjs/common';

import { InvoicesController } from '@/invoices/invoices.controller';
import { InvoicesService } from '@/invoices/invoices.service';
import { PrismaModule } from '@prisma/prisma.module';

@Module({
  controllers: [InvoicesController],
  providers: [InvoicesService],
  imports: [PrismaModule],
})
export class InvoicesModule {}
