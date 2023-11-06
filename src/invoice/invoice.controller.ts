import {
  Controller,
  Get,
  Body,
  Delete,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { InvoiceDto } from '@invoice/dto/invoice.dto';
import { InvoiceService } from '@invoice/invoice.service';
import { UpdateInvoiceDto } from '@invoice/dto/update-invoice.dto';

@Controller('invoice')
export class InvoiceController {
  constructor(private invoiceService: InvoiceService) {}

  @Get()
  async getInvoices() {
    return await this.invoiceService.getInvoices();
  }

  @Get('/:id')
  async getInvoice(@Param('id') id: string) {
    return await this.invoiceService.getInvoice(id);
  }

  @Post()
  async createInvoice(@Body() invoiceDto: InvoiceDto) {
    return await this.invoiceService.createInvoice(invoiceDto);
  }

  @Patch('/:id')
  async updateInvoice(
    @Body() invoiceDto: UpdateInvoiceDto,
    @Param('id') id: string,
  ) {
    return await this.invoiceService.updateInvoice(invoiceDto, id);
  }

  @Delete('/:id')
  async deleteInvoice(@Param('id') id: string) {
    return await this.invoiceService.deleteInvoice(id);
  }
}
