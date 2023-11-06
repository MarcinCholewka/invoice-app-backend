import { ApiProperty } from '@nestjs/swagger';
import { Invoice as InvoiceModel } from '@prisma/client';

export class InvoiceEntity implements InvoiceModel {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;
}
