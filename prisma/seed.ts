import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  await prisma.invoice.deleteMany();

  console.info('Seeding...');

  const invoice1 = await prisma.invoice.create({
    data: {
      name: 'Invoice #1',
    },
  });

  const invoice2 = await prisma.invoice.create({
    data: {
      name: 'Invoice #2',
    },
  });

  console.log({ invoice1, invoice2 });
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
