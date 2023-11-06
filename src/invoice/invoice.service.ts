import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { InvoiceEntity } from '@invoice/entity/invoice';
import { InvoiceDto } from '@invoice/dto/invoice.dto';
import { UpdateInvoiceDto } from '@invoice/dto/update-invoice.dto';
import { PrismaService } from '@prisma/prisma.service';

@Injectable()
export class InvoiceService {
  constructor(private prismaService: PrismaService) {}

  async getInvoices(): Promise<InvoiceEntity[]> {
    return await this.prismaService.invoice.findMany();
  }

  async getInvoice(id: string): Promise<InvoiceEntity> {
    const invoice = await this.prismaService.invoice.findUnique({
      where: { id },
    });

    if (!invoice) {
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
    }

    return invoice;
  }

  async createInvoice(invoice: InvoiceDto): Promise<InvoiceEntity> {
    const createdInvoice = await this.prismaService.invoice.create({
      data: invoice,
    });

    return createdInvoice;
  }

  async updateInvoice(
    invoice: UpdateInvoiceDto,
    id: string,
  ): Promise<InvoiceEntity> {
    const existingInvoice = await this.getInvoice(id);

    if (!existingInvoice) {
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
    }

    const updatedInvoice = await this.prismaService.invoice.update({
      where: { id },
      data: invoice,
    });

    return updatedInvoice;
  }

  async deleteInvoice(id: string): Promise<void> {
    const existingInvoice = await this.getInvoice(id);

    if (!existingInvoice) {
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
    }

    await this.prismaService.invoice.delete({ where: { id } });
  }
}
