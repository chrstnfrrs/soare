import prisma from '../adapters/prisma';

const create = (user: any) => prisma.user.create({ data: user });

const select = () => prisma.user.findMany();
const selectById = (id: string) => prisma.user.findUnique({ where: { id } });
const selectByEmail = (email: string) =>
  prisma.user.findUnique({ where: { email } });

export { create, select, selectById, selectByEmail };
