import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const users = [
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
  ];

  // Insert users into the database
  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }

  console.log("Users added successfully!");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
