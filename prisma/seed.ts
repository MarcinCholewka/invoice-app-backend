import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

// initialize Prisma Client
const prisma = new PrismaClient();
const ROUNDS_OF_HASHING = 10;

async function main() {
  console.info('Seeding...');

  // create dummy users
  const passwordSabin = await bcrypt.hash('password-sabin', ROUNDS_OF_HASHING);
  const passwordMarcin = await bcrypt.hash(
    'password-marcin',
    ROUNDS_OF_HASHING,
  );

  const user1 = await prisma.user.upsert({
    where: { email: 'mcholewka@icloud.com' },
    update: {
      password: passwordMarcin,
    },
    create: {
      email: 'mcholewka@icloud.com',
      name: 'Marcin Cholewka',
      password: passwordMarcin,
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'sabin@adams.com' },
    update: {
      password: passwordSabin,
    },
    create: {
      email: 'sabin@adams.com',
      name: 'Sabin Adams',
      password: passwordSabin,
    },
  });

  // create dummy invoices
  const invoice1 = await prisma.invoice.upsert({
    where: { invoiceNumber: 'FV/01/11/2023' },
    update: {
      userId: user1.id,
    },
    create: {
      invoiceNumber: 'FV/01/11/2023',
      items: [
        {
          name: 'Programming service with React',
          price: 900,
          quantity: 1,
          rate: 23,
        },
      ],
    },
  });

  const invoice2 = await prisma.invoice.upsert({
    where: { invoiceNumber: 'FV/01/12/2023' },
    update: {
      userId: user2.id,
    },
    create: {
      invoiceNumber: 'FV/01/12/2023',
      items: [
        {
          name: 'Programming service with React',
          price: 1400,
          quantity: 1,
          rate: 23,
        },
      ],
    },
  });

  console.log({ user1, user2, invoice1, invoice2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
