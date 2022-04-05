import Chance from 'chance';
import { vi } from 'vitest';

import * as UserResolvers from '../../../src/resolvers/user-resolvers';
import * as UserServices from '../../../src/services/user-services';

vi.mock('../../../src/services/user-services');

const chance = new Chance();

describe('UserResolvers', () => {
  let actual, expected, root, args, id, input, error;

  beforeEach(() => {
    root = {};
    args = {};
  });

  afterEach(() => {
    // @ts-ignore
    UserServices.create.mockReset();
    // @ts-ignore
    UserServices.deleteById.mockReset();
    // @ts-ignore
    UserServices.get.mockReset();
  });

  describe('Given create', () => {
    describe('When sucessful', () => {
      beforeEach(async () => {
        expected = chance.string();
        input = chance.string();
        args.input = input;
        // @ts-ignore
        UserServices.create.mockResolvedValue(expected);
        actual = await UserResolvers.create(root, args);
      });

      test('Then should create user', () => {
        expect(UserServices.create).toHaveBeenCalledTimes(1);
        expect(UserServices.create).toHaveBeenCalledWith(input);
      });

      test('Then should return user', () => {
        expect(actual).toStrictEqual(expected);
      });
    });
    describe('When service fails', () => {
      beforeEach(async () => {
        input = chance.string();
        error = chance.string();
        expected = new Error(error);
        args.input = input;
        // @ts-ignore
        UserServices.create.mockRejectedValue(error);
        actual = await UserResolvers.create(root, args);
      });

      test('Then should attempt to create user', () => {
        expect(UserServices.create).toHaveBeenCalledTimes(1);
        expect(UserServices.create).toHaveBeenCalledWith(input);
      });

      test('Then should return error', () => {
        expect(actual).toStrictEqual(expected);
      });
    });
  });
  describe('Given deleteById', () => {
    describe('When sucessful', () => {
      beforeEach(async () => {
        const res = chance.pickone([chance.string(), undefined]);
        expected = Boolean(res);
        id = chance.string();
        args.id = id;
        // @ts-ignore
        UserServices.deleteById.mockResolvedValue(res);
        actual = await UserResolvers.deleteById(root, args);
      });

      test('Then should delete user by id', () => {
        expect(UserServices.deleteById).toHaveBeenCalledTimes(1);
        expect(UserServices.deleteById).toHaveBeenCalledWith(id);
      });

      test('Then should return user', () => {
        expect(actual).toStrictEqual(expected);
      });
    });
    describe('When service fails', () => {
      beforeEach(async () => {
        id = chance.string();
        error = chance.string();
        expected = new Error(error);
        args.id = id;
        // @ts-ignore
        UserServices.deleteById.mockRejectedValue(error);
        actual = await UserResolvers.deleteById(root, args);
      });

      test('Then should attempt to delete user by id', () => {
        expect(UserServices.deleteById).toHaveBeenCalledTimes(1);
        expect(UserServices.deleteById).toHaveBeenCalledWith(id);
      });

      test('Then should return error', () => {
        expect(actual).toStrictEqual(expected);
      });
    });
  });
  describe('Given get', () => {
    describe('When sucessful', () => {
      beforeEach(async () => {
        expected = chance.string();
        // @ts-ignore
        UserServices.get.mockResolvedValue(expected);
        actual = await UserResolvers.get();
      });

      test('Then should create user', () => {
        expect(UserServices.get).toHaveBeenCalledTimes(1);
        // expect(UserServices.get).toHaveBeenCalledWith();
      });

      test('Then should return user', () => {
        expect(actual).toStrictEqual(expected);
      });
    });
    describe('When service fails', () => {
      beforeEach(async () => {
        error = chance.string();
        expected = new Error(error);
        // @ts-ignore
        UserServices.get.mockRejectedValue(error);
        actual = await UserResolvers.get();
      });

      test('Then should attempt to get users', () => {
        expect(UserServices.get).toHaveBeenCalledTimes(1);
      });

      test('Then should return error', () => {
        expect(actual).toStrictEqual(expected);
      });
    });
  });
});
