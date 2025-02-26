import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      { name: "lida", email: "alice@example.com" },
      { name: "alejando", email: "alejando@example.com" },
      { name: "mami", email: "maria@example.com" },
      { name: "dayna", email: "dayna@example.com" },
      { name: "pipo", email: "remigio@example.com" },
      { name: "ricardo", email: "ricardo@example.com" },
      { name: "alejandra", email: "alejandra@example.com" },
      { name: "eylin", email: "eylin@example.com" },
      { name: "abuelo", email: "abuelo@example.com" },
      { name: "abuela", email: "abuela@example.com" },
      { name: "yiyi", email: "yiyi@example.com" },
    ],
  });
  console.log("Database seeded!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
