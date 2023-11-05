import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { Invoice } from './entity/invoice';
import { InvoiceDto } from './dto/invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

@Injectable()
export class InvoiceService {
  private _invoices: Invoice[] = [];

  async getInvoices(): Promise<Invoice[]> {
    return this._invoices;
  }

  async getInvoice(id: string): Promise<Invoice> {
    const invoice = this._invoices.find((invoice) => invoice.id === id);

    if (!invoice) {
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
    }

    return invoice;
  }

  async createInvoice(invoice: InvoiceDto): Promise<void> {
    const invoiceEntity = { ...invoice, id: uuidv4() };

    this._invoices.push(invoiceEntity);
  }

  async updateInvoice(invoice: UpdateInvoiceDto, id: string): Promise<void> {
    const invoiceIndex = this._invoices.findIndex(
      (invoice) => invoice.id === id,
    );

    if (invoiceIndex < 0) {
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
    }

    this._invoices[invoiceIndex] = {
      ...this._invoices[invoiceIndex],
      ...invoice,
    };
  }

  async deleteInvoice(id: string): Promise<void> {
    this._invoices = this._invoices.filter((invoice) => invoice.id !== id);
  }
}
