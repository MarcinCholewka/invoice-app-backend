import { ApiProperty } from '@nestjs/swagger';
import { Invoice as InvoiceModel, Item as ItemModel } from '@prisma/client';

export class InvoiceEntity implements InvoiceModel {
  @ApiProperty()
  id: string;

  @ApiProperty()
  invoiceNumber: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  items: ItemModel[];
}
