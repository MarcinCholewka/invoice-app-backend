export class InvoiceDto {
  client: ClientDto;
  product: string;
}

export class ClientDto {
  name: string;
  address: AddressDto;
  vatNumber: string;
}

export class AddressDto {
  street: string;
  number: string;
  city: string;
  zipCode: string;
  country: string;
}
