import prisma from '../adapters/prisma';

const create = (user) => prisma.user.create({ data: user });

const deleteById = (id) => prisma.user.delete({ where: { id } });

const select = () => prisma.user.findMany();
const selectByEmail = (email) => prisma.user.findUnique({ where: { email } });
const selectById = (id) => prisma.user.findUnique({ where: { id } });

export { create, deleteById, select, selectByEmail, selectById };
