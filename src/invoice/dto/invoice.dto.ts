import { OmitType } from '@nestjs/mapped-types';

import { InvoiceEntity } from '@invoice/entity/invoice';

export class InvoiceDto extends OmitType(InvoiceEntity, ['id']) {}
