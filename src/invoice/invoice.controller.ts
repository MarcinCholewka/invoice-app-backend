import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { InvoiceService } from './invoice.service';
import { InvoiceDto } from './dto/invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

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
