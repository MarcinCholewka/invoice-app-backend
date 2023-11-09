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
  ApiBearerAuth,
} from '@nestjs/swagger';

import { CreateInvoiceDto } from '@/invoices/dto/create-invoice.dto';
import { InvoiceEntity } from '@/invoices/entity/invoice.entity';
import { InvoicesService } from '@/invoices/invoices.service';
import { JwtAuthGuard } from '@auth/jwt-auth.guard';
import { UpdateInvoiceDto } from '@/invoices/dto/update-invoice.dto';

@UseGuards(JwtAuthGuard)
@ApiTags('invoice')
@ApiBearerAuth()
@Controller('invoice')
export class InvoicesController {
  constructor(private invoicesService: InvoicesService) {}

  @ApiOkResponse({ type: InvoiceEntity, isArray: true })
  @Get()
  async getInvoices(): Promise<InvoiceEntity[]> {
    return await this.invoicesService.getInvoices();
  }

  @ApiOkResponse({ type: InvoiceEntity })
  @ApiResponse({
    status: 404,
    description: 'NotFound',
  })
  @Get('/:id')
  async getInvoice(@Param('id') id: string): Promise<InvoiceEntity> {
    return await this.invoicesService.getInvoice(id);
  }

  @ApiCreatedResponse({ type: InvoiceEntity })
  @Post()
  async createInvoice(
    @Body() invoiceDto: CreateInvoiceDto,
  ): Promise<InvoiceEntity> {
    return await this.invoicesService.createInvoice(invoiceDto);
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
    return await this.invoicesService.updateInvoice(invoiceDto, id);
  }

  @ApiResponse({
    status: 404,
    description: 'NotFound',
  })
  @Delete('/:id')
  async deleteInvoice(@Param('id') id: string) {
    return await this.invoicesService.deleteInvoice(id);
  }
}
