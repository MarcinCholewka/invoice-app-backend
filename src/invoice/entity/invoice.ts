import { Invoice as InvoiceModel } from '@prisma/client';

export class InvoiceEntity implements InvoiceModel {
  id: string;
  name: string;
}
