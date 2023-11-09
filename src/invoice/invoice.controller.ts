import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateInvoiceDto } from '@/invoice/dto/create-invoice.dto';
import { InvoiceEntity } from '@/invoice/entity/invoice.entity';
import { InvoiceService } from '@invoice/invoice.service';
import { JwtAuthGuard } from '@auth/jwt-auth.guard';
import { UpdateInvoiceDto } from '@invoice/dto/update-invoice.dto';

@UseGuards(JwtAuthGuard)
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
  async createInvoice(
    @Body() invoiceDto: CreateInvoiceDto,
  ): Promise<InvoiceEntity> {
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
