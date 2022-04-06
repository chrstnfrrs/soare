import Chance from 'chance';
import { vi } from 'vitest';

import prisma from '../../../src/adapters/prisma';
import * as UserRepositories from '../../../src/repositories/user-repositories';

vi.mock('../../../src/adapters/prisma', () => ({
    default: {
        user: {
            create: vi.fn(),
            delete: vi.fn(),
            findMany: vi.fn(),
            findUnique: vi.fn(),
        },
    },
}));

const chance = new Chance()

describe('UserRepositories', () => {
    let expected, actual, arg
    describe('Given create', () => {
        beforeEach(async () => {
            arg = chance.string()
            expected = chance.string()
            // @ts-ignore
            prisma.user.create.mockReset()
            // @ts-ignore
            prisma.user.create.mockReturnValue(expected)
            actual = await UserRepositories.create(arg)
        });
        test('Then should call prisma user create ', () => {
            expect(prisma.user.create).toHaveBeenCalledTimes(1);
            expect(prisma.user.create).toHaveBeenCalledWith({ data: arg });
        });
        test('Then should return response from prisma user create', () => {
            expect(actual).toStrictEqual(expected);
        });
    });
    describe('Given createGoogle', () => {
        beforeEach(async () => {
            arg = chance.string()
            expected = chance.string()
            // @ts-ignore
            prisma.user.create.mockReset()
            // @ts-ignore
            prisma.user.create.mockReturnValue(expected)
            actual = await UserRepositories.createGoogle(arg)
        });
        test('Then should call prisma user create ', () => {
            expect(prisma.user.create).toHaveBeenCalledTimes(1);
            expect(prisma.user.create).toHaveBeenCalledWith({ data: arg });
        });
        test('Then should return response from prisma user create', () => {
            expect(actual).toStrictEqual(expected);
        });
    });
    describe('Given deleteById', () => {
        beforeEach(async () => {
            arg = chance.string()
            expected = chance.string()
            // @ts-ignore
            prisma.user.delete.mockReset()
            // @ts-ignore
            prisma.user.delete.mockReturnValue(expected)
            actual = await UserRepositories.deleteById(arg)
        });
        test('Then should call prisma user create ', () => {
            expect(prisma.user.delete).toHaveBeenCalledTimes(1);
            expect(prisma.user.delete).toHaveBeenCalledWith({ where: { id: arg } });
        });
        test('Then should return response from prisma user create', () => {
            expect(actual).toStrictEqual(expected);
        });
    });
    describe('Given select', () => {
        beforeEach(async () => {
            expected = chance.string()
            // @ts-ignore
            prisma.user.findMany.mockReset()
            // @ts-ignore
            prisma.user.findMany.mockReturnValue(expected)
            actual = await UserRepositories.select()
        });
        test('Then should call prisma user create ', () => {
            expect(prisma.user.findMany).toHaveBeenCalledTimes(1);
        });
        test('Then should return response from prisma user create', () => {
            expect(actual).toStrictEqual(expected);
        });
    });
    describe('Given selectById', () => {
        beforeEach(async () => {
            arg = chance.string()
            expected = chance.string()
            // @ts-ignore
            prisma.user.findUnique.mockReset()
            // @ts-ignore
            prisma.user.findUnique.mockReturnValue(expected)
            actual = await UserRepositories.selectById(arg)
        });
        test('Then should call prisma user create ', () => {
            expect(prisma.user.findUnique).toHaveBeenCalledTimes(1);
            expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { id: arg } });
        });
        test('Then should return response from prisma user create', () => {
            expect(actual).toStrictEqual(expected);
        });
    });
    describe('Given selectByEmail', () => {
        beforeEach(async () => {
            arg = chance.string()
            expected = chance.string()
            // @ts-ignore
            prisma.user.findUnique.mockReset()
            // @ts-ignore
            prisma.user.findUnique.mockReturnValue(expected)
            actual = await UserRepositories.selectByEmail(arg)
        });
        test('Then should call prisma user create ', () => {
            expect(prisma.user.findUnique).toHaveBeenCalledTimes(1);
            expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { email: arg } });
        });
        test('Then should return response from prisma user create', () => {
            expect(actual).toStrictEqual(expected);
        });
    });
});