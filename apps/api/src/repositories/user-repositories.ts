import prisma from '../adapters/prisma';

const create = (user) => prisma.user.create({ data: user });
const createGoogle = (user) => prisma.user.create({ data: user });

const deleteById = (id) => prisma.user.delete({ where: { id } });

const select = () => prisma.user.findMany();
const selectById = (id) => prisma.user.findUnique({ where: { id } });
const selectByEmail = (email) => prisma.user.findUnique({ where: { email } });

export { create, createGoogle, deleteById, select, selectById, selectByEmail };
