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
    // @ts-ignore
    UserServices.getByCredentials.mockReset();
    // @ts-ignore
    UserServices.getByEmail.mockReset();
    // @ts-ignore
    UserServices.getById.mockReset();
    // @ts-ignore
    UserServices.signInWithGoogle.mockReset();
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

      test('Then should get all users', () => {
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
  describe('Given getByCredentials', () => {
    describe('When sucessful', () => {
      beforeEach(async () => {
        expected = chance.string();
        input = chance.string()
        args.input = input;
        // @ts-ignore
        UserServices.getByCredentials.mockResolvedValue(expected);
        actual = await UserResolvers.getByCredentials(root, args);
      });

      test('Then should get user using credentials', () => {
        expect(UserServices.getByCredentials).toHaveBeenCalledTimes(1);
        expect(UserServices.getByCredentials).toHaveBeenCalledWith(input);
      });

      test('Then should return user', () => {
        expect(actual).toStrictEqual(expected);
      });
    });
    describe('When service fails', () => {
      beforeEach(async () => {
        error = chance.string();
        expected = new Error(error);
        input = chance.string()
        args.input = input
        // @ts-ignore
        UserServices.getByCredentials.mockRejectedValue(error);
        actual = await UserResolvers.getByCredentials(root, args);
      });

      test('Then should attempt to get users by credentials', () => {
        expect(UserServices.getByCredentials).toHaveBeenCalledTimes(1);
        expect(UserServices.getByCredentials).toHaveBeenCalledWith(input);
      });

      test('Then should return error', () => {
        expect(actual).toStrictEqual(expected);
      });
    });
  });
  describe('Given getByEmail', () => {
    let email
    describe('When sucessful', () => {
      beforeEach(async () => {
        expected = chance.string();
        email = chance.string()
        args.email = email;
        // @ts-ignore
        UserServices.getByEmail.mockResolvedValue(expected);
        actual = await UserResolvers.getByEmail(root, args);
      });

      test('Then should get user using email', () => {
        expect(UserServices.getByEmail).toHaveBeenCalledTimes(1);
        expect(UserServices.getByEmail).toHaveBeenCalledWith(email);
      });

      test('Then should return user', () => {
        expect(actual).toStrictEqual(expected);
      });
    });
    describe('When service fails', () => {
      beforeEach(async () => {
        error = chance.string();
        expected = new Error(error);
        email = chance.string()
        args.email = email
        // @ts-ignore
        UserServices.getByEmail.mockRejectedValue(error);
        actual = await UserResolvers.getByEmail(root, args);
      });

      test('Then should attempt to get users by email', () => {
        expect(UserServices.getByEmail).toHaveBeenCalledTimes(1);
        expect(UserServices.getByEmail).toHaveBeenCalledWith(email);
      });

      test('Then should return error', () => {
        expect(actual).toStrictEqual(expected);
      });
    });
  });
  describe('Given getById', () => {
    let id
    describe('When sucessful', () => {
      beforeEach(async () => {
        expected = chance.string();
        id = chance.string()
        args.id = id;
        // @ts-ignore
        UserServices.getById.mockResolvedValue(expected);
        actual = await UserResolvers.getById(root, args);
      });

      test('Then should get user using id', () => {
        expect(UserServices.getById).toHaveBeenCalledTimes(1);
        expect(UserServices.getById).toHaveBeenCalledWith(id);
      });

      test('Then should return user', () => {
        expect(actual).toStrictEqual(expected);
      });
    });
    describe('When service fails', () => {
      beforeEach(async () => {
        error = chance.string();
        expected = new Error(error);
        id = chance.string()
        args.id = id
        // @ts-ignore
        UserServices.getById.mockRejectedValue(error);
        actual = await UserResolvers.getById(root, args);
      });

      test('Then should attempt to get users by id', () => {
        expect(UserServices.getById).toHaveBeenCalledTimes(1);
        expect(UserServices.getById).toHaveBeenCalledWith(id);
      });

      test('Then should return error', () => {
        expect(actual).toStrictEqual(expected);
      });
    });
  });
  describe('Given signInWithGoogle', () => {
    describe('When sucessful', () => {
      beforeEach(async () => {
        expected = chance.string();
        input = chance.string()
        args.input = input;
        // @ts-ignore
        UserServices.signInWithGoogle.mockResolvedValue(expected);
        actual = await UserResolvers.signInWithGoogle(root, args);
      });

      test('Then should get user using user google input', () => {
        expect(UserServices.signInWithGoogle).toHaveBeenCalledTimes(1);
        expect(UserServices.signInWithGoogle).toHaveBeenCalledWith(input);
      });

      test('Then should return user', () => {
        expect(actual).toStrictEqual(expected);
      });
    });
    describe('When service fails', () => {
      beforeEach(async () => {
        error = chance.string();
        expected = new Error(error);
        input = chance.string()
        args.input = input
        // @ts-ignore
        UserServices.signInWithGoogle.mockRejectedValue(error);
        actual = await UserResolvers.signInWithGoogle(root, args);
      });

      test('Then should attempt to get users by user google input', () => {
        expect(UserServices.signInWithGoogle).toHaveBeenCalledTimes(1);
        expect(UserServices.signInWithGoogle).toHaveBeenCalledWith(input);
      });

      test('Then should return error', () => {
        expect(actual).toStrictEqual(expected);
      });
    });
  });
});
