export class Invoice {
  id: string;
  client: Client;
  product: string;
}

export class Client {
  name: string;
  address: Address;
  vatNumber: string;
}

export class Address {
  street: string;
  city: string;
  zipCode: string;
  country: string;
}
