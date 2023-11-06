import {
  Controller,
  Get,
  Body,
  Delete,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

import { InvoiceDto } from '@invoice/dto/invoice.dto';
import { InvoiceService } from '@invoice/invoice.service';
import { UpdateInvoiceDto } from '@invoice/dto/update-invoice.dto';
import { InvoiceEntity } from '@invoice/entity/invoice';

@ApiTags('invoice')
@Controller('invoice')
export class InvoiceController {
  constructor(private invoiceService: InvoiceService) {}

  @ApiOkResponse({ type: InvoiceEntity, isArray: true })
  @Get()
  async getInvoices(): Promise<InvoiceEntity[]> {
    return await this.invoiceService.getInvoices();
  }

  @ApiOkResponse({ type: InvoiceEntity })
  @ApiResponse({
    status: 404,
    description: 'NotFound',
  })
  @Get('/:id')
  async getInvoice(@Param('id') id: string): Promise<InvoiceEntity> {
    return await this.invoiceService.getInvoice(id);
  }

  @ApiCreatedResponse({ type: InvoiceEntity })
  @Post()
  async createInvoice(@Body() invoiceDto: InvoiceDto): Promise<InvoiceEntity> {
    return await this.invoiceService.createInvoice(invoiceDto);
  }

  @ApiOkResponse({ type: InvoiceEntity })
  @ApiResponse({
    status: 404,
    description: 'NotFound',
  })
  @Patch('/:id')
  async updateInvoice(
    @Body() invoiceDto: UpdateInvoiceDto,
    @Param('id') id: string,
  ) {
    return await this.invoiceService.updateInvoice(invoiceDto, id);
  }

  @ApiResponse({
    status: 404,
    description: 'NotFound',
  })
  @Delete('/:id')
  async deleteInvoice(@Param('id') id: string) {
    return await this.invoiceService.deleteInvoice(id);
  }
}
