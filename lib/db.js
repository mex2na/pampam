const { PrismaClient } = require("@prisma/client")

const PrismaClientSingleton = () => {
    return new PrismaClient();
};

const globalThis = {
    prismaGlobal: PrismaClientSingleton
};

const prisma = PrismaClientSingleton();

module.exports = prisma;



if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;