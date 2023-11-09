import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

import { Item } from '@invoice/entity/invoice.entity';

export class CreateInvoiceDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  invoiceNumber: string;

  @IsNotEmpty()
  @ApiProperty()
  items: Item[];

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  userId: string;
}
