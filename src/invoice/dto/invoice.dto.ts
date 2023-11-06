import { ApiProperty } from '@nestjs/swagger';

export class InvoiceDto {
  @ApiProperty()
  name: string;
}
