import { Module } from '@nestjs/common';

import { InvoiceController } from '@invoice/invoice.controller';
import { InvoiceService } from '@invoice/invoice.service';
import { PrismaModule } from '@prisma/prisma.module';

@Module({
  controllers: [InvoiceController],
  providers: [InvoiceService],
  imports: [PrismaModule],
})
export class InvoiceModule {}
