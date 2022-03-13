import prisma from '../adapters/prisma';

const create = (user) => prisma.user.create({ data: user });

const select = () => prisma.user.findMany();
const selectById = (id) => prisma.user.findUnique({ where: { id } });
const selectByEmail = (email) => prisma.user.findUnique({ where: { email } });

export { create, select, selectById, selectByEmail };
