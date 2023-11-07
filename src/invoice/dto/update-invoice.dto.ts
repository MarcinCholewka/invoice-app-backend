import { PartialType } from '@nestjs/swagger';

import { CreateInvoiceDto } from '@invoice/dto/create-invoice.dto';

export class UpdateInvoiceDto extends PartialType(CreateInvoiceDto) {}
