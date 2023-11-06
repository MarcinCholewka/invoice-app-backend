import { ApiProperty } from '@nestjs/swagger';

import { Item as ItemModel } from '@prisma/client';

export class InvoiceDto {
  @ApiProperty()
  invoiceNumber: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  items: ItemModel[];
}
