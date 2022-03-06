import prisma from '../adapters/prisma';

const select = () => prisma.user.findMany();

export { select };
