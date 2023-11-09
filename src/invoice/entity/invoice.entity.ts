import { ApiProperty } from '@nestjs/swagger';
import { Invoice as InvoiceModel } from '@prisma/client';

import { UserEntity } from '@users/entities/user.entity';

export class InvoiceEntity implements InvoiceModel {
  @ApiProperty()
  id: string;

  @ApiProperty()
  invoiceNumber: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  items: Item[];

  @ApiProperty({ required: false, type: UserEntity })
  author?: UserEntity;

  @ApiProperty()
  userId: string;

  constructor({ author, ...data }: Partial<InvoiceEntity>) {
    Object.assign(this, data);

    if (author) {
      this.author = new UserEntity(author);
    }
  }
}

export type Item = {
  name: string;
  price: number;
  quantity: number;
  rate: number;
};
