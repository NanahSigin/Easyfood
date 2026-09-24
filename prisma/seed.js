const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.restaurant.createMany({
    data: [
      {
        name: "Padaria Sonho de mal",
        category: "Padaria",
        rating: 4.5
      },
      {
        name: "Tortas da vovó",
        category: "Tortas",
        rating: 4.2
      },
      {
        name: "Bolos de nuvem",
        category: "JBolos",
        rating: 4.8
      }
    ]
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });