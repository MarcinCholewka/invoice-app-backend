import { PartialType } from '@nestjs/swagger';

import { CreateInvoiceDto } from '@/invoices/dto/create-invoice.dto';

export class UpdateInvoiceDto extends PartialType(CreateInvoiceDto) {}
