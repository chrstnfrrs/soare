import Chance from 'chance';
import { vi } from 'vitest';
import bcrypt from 'bcrypt';

import * as UserServices from '../../../src/services/user-services';
import * as UserRepositories from '../../../src/repositories/user-repositories';

vi.mock('bcrypt');
vi.mock('../../../src/repositories/user-repositories');

const chance = new Chance();

describe('UserServices', () => {
  let actual, expected, result, email, id;

  afterEach(() => {
    // @ts-ignore
    UserRepositories.create.mockReset();
    // @ts-ignore
    UserRepositories.deleteById.mockReset();
    // @ts-ignore
    UserRepositories.select.mockReset();
    // @ts-ignore
    UserRepositories.selectByEmail.mockReset();
    // @ts-ignore
    UserRepositories.selectById.mockReset();
    // @ts-ignore
    bcrypt.hash.mockReset();
    // @ts-ignore
    bcrypt.compare.mockReset();
  });

  describe('Given create', () => {
    let userArgs, alteredUserArgs, password, hashedPassword;

    describe('When successful', () => {
      beforeEach(async () => {
        password = chance.string();
        hashedPassword = chance.string();
        userArgs = {
          email: chance.email(),
          password,
        };
        alteredUserArgs = {
          ...userArgs,
          email: userArgs.email.toLowerCase(),
          password: hashedPassword,
        };
        result = chance.string();

        // @ts-ignore
        bcrypt.hash.mockResolvedValue(hashedPassword);
        // @ts-ignore
        UserRepositories.create.mockResolvedValue(result);
        expected = result;

        actual = await UserServices.create(userArgs);
      });
      test('Then should hash password', () => {
        expect(bcrypt.hash).toHaveBeenCalledTimes(1);
        expect(bcrypt.hash).toHaveBeenCalledWith(password, 10);
      });
      test('Then should create user', () => {
        expect(UserRepositories.create).toHaveBeenCalledTimes(1);
        expect(UserRepositories.create).toHaveBeenCalledWith(alteredUserArgs);
      });
      test('Then should return user', () => {
        expect(actual).toStrictEqual(expected);
      });
    });
  });

  describe('Given deleteById', () => {
    describe('When successful', () => {
      beforeEach(async () => {
        id = chance.guid();
        result = chance.string();

        // @ts-ignore
        UserRepositories.deleteById.mockResolvedValue(result);
        expected = result;

        actual = await UserServices.deleteById(id);
      });
      test('Then should delete by id', () => {
        expect(UserRepositories.deleteById).toHaveBeenCalledTimes(1);
        expect(UserRepositories.deleteById).toHaveBeenCalledWith(id);
      });
      test('Then should return user', () => {
        expect(actual).toStrictEqual(expected);
      });
    });
  });

  describe('Given get', () => {
    describe('When successful', () => {
      beforeEach(async () => {
        result = chance.string();

        // @ts-ignore
        UserRepositories.select.mockResolvedValue(result);
        expected = result;

        actual = await UserServices.get();
      });
      test('Then should select by email', () => {
        expect(UserRepositories.select).toHaveBeenCalledTimes(1);
      });
      test('Then should return user', () => {
        expect(actual).toStrictEqual(expected);
      });
    });
  });

  describe('Given getByCredentials', () => {
    let credentials, isValidPassword, password, userPassword;

    describe('When successful', () => {
      beforeEach(async () => {
        isValidPassword = true;
        email = chance.string();
        password = chance.string();
        userPassword = chance.string();
        credentials = {
          email,
          password,
        };
        result = {
          password: userPassword,
        };

        // @ts-ignore
        UserRepositories.selectByEmail.mockResolvedValue(result);
        // @ts-ignore
        bcrypt.compare.mockResolvedValue(isValidPassword);
        expected = result;

        actual = await UserServices.getByCredentials(credentials);
      });
      test('Then should get user by email', () => {
        expect(UserRepositories.selectByEmail).toHaveBeenCalledTimes(1);
        expect(UserRepositories.selectByEmail).toHaveBeenCalledWith(
          email.toLowerCase(),
        );
      });
      test('Then should validated password', () => {
        expect(bcrypt.compare).toHaveBeenCalledTimes(1);
        expect(bcrypt.compare).toHaveBeenCalledWith(password, userPassword);
      });
      test('Then should return user', () => {
        expect(actual).toStrictEqual(expected);
      });
    });

    describe('When no user is found', () => {
      beforeEach(async () => {
        email = chance.string();
        password = chance.string();
        credentials = {
          email,
          password,
        };
        result = undefined;

        // @ts-ignore
        UserRepositories.selectByEmail.mockResolvedValue(result);
        expected = new Error('Invalid Credentials');

        try {
          await UserServices.getByCredentials(credentials);
        } catch (error) {
          actual = error;
        }
      });
      test('Then should get user by email', () => {
        expect(UserRepositories.selectByEmail).toHaveBeenCalledTimes(1);
        expect(UserRepositories.selectByEmail).toHaveBeenCalledWith(
          email.toLowerCase(),
        );
      });
      test('Then should return user', () => {
        expect(actual).toStrictEqual(expected);
      });
    });

    describe('When passwords do not match', () => {
      beforeEach(async () => {
        isValidPassword = false;
        email = chance.string();
        password = chance.string();
        userPassword = chance.string();
        credentials = {
          email,
          password,
        };
        result = {
          password: userPassword,
        };

        // @ts-ignore
        UserRepositories.selectByEmail.mockResolvedValue(result);
        // @ts-ignore
        bcrypt.compare.mockResolvedValue(isValidPassword);
        expected = new Error('Invalid Credentials');

        try {
          await UserServices.getByCredentials(credentials);
        } catch (error) {
          actual = error;
        }
      });
      test('Then should get user by email', () => {
        expect(UserRepositories.selectByEmail).toHaveBeenCalledTimes(1);
        expect(UserRepositories.selectByEmail).toHaveBeenCalledWith(
          email.toLowerCase(),
        );
      });
      test('Then should validated password', () => {
        expect(bcrypt.compare).toHaveBeenCalledTimes(1);
        expect(bcrypt.compare).toHaveBeenCalledWith(password, userPassword);
      });
      test('Then should return user', () => {
        expect(actual).toStrictEqual(expected);
      });
    });
  });

  describe('Given getByEmail', () => {
    describe('When successful', () => {
      beforeEach(async () => {
        email = chance.guid();
        result = chance.string();

        // @ts-ignore
        UserRepositories.selectByEmail.mockResolvedValue(result);
        expected = result;

        actual = await UserServices.getByEmail(email);
      });
      test('Then should select by email', () => {
        expect(UserRepositories.selectByEmail).toHaveBeenCalledTimes(1);
        expect(UserRepositories.selectByEmail).toHaveBeenCalledWith(email);
      });
      test('Then should return user', () => {
        expect(actual).toStrictEqual(expected);
      });
    });
    describe('When error', () => {
      beforeEach(async () => {
        email = chance.guid();
        result = undefined;

        // @ts-ignore
        UserRepositories.selectByEmail.mockResolvedValue(result);
        expected = new Error('Invalid Email');

        try {
          await UserServices.getByEmail(email);
        } catch (error) {
          actual = error;
        }
      });
      test('Then should select by email', () => {
        expect(UserRepositories.selectByEmail).toHaveBeenCalledTimes(1);
        expect(UserRepositories.selectByEmail).toHaveBeenCalledWith(email);
      });
      test('Then should return user', () => {
        expect(actual).toStrictEqual(expected);
      });
    });
  });

  describe('Given getById', () => {
    describe('When successful', () => {
      beforeEach(async () => {
        id = chance.guid();
        result = chance.string();

        // @ts-ignore
        UserRepositories.selectById.mockResolvedValue(result);
        expected = result;

        actual = await UserServices.getById(id);
      });
      test('Then should select by id', () => {
        expect(UserRepositories.selectById).toHaveBeenCalledTimes(1);
        expect(UserRepositories.selectById).toHaveBeenCalledWith(id);
      });
      test('Then should return user', () => {
        expect(actual).toStrictEqual(expected);
      });
    });
    describe('When error', () => {
      beforeEach(async () => {
        id = chance.guid();
        result = undefined;

        // @ts-ignore
        UserRepositories.selectById.mockResolvedValue(result);
        expected = new Error('Invalid ID');

        try {
          await UserServices.getById(id);
        } catch (error) {
          actual = error;
        }
      });
      test('Then should select by id', () => {
        expect(UserRepositories.selectById).toHaveBeenCalledTimes(1);
        expect(UserRepositories.selectById).toHaveBeenCalledWith(id);
      });
      test('Then should return user', () => {
        expect(actual).toStrictEqual(expected);
      });
    });
  });

  describe('Given signInWithGoogle', () => {
    let userArgs;

    describe('When user already exists', () => {
      beforeEach(async () => {
        email = chance.email();
        result = chance.string();
        userArgs = {
          email,
        };

        // @ts-ignore
        UserRepositories.selectByEmail.mockResolvedValue(result);
        expected = result;

        actual = await UserServices.signInWithGoogle(userArgs);
      });
      test('Then should select by email', () => {
        expect(UserRepositories.selectByEmail).toHaveBeenCalledTimes(1);
        expect(UserRepositories.selectByEmail).toHaveBeenCalledWith(
          email.toLowerCase(),
        );
      });
      test('Then should return user', () => {
        expect(actual).toStrictEqual(expected);
      });
    });
    describe('When user logs in for the first time', () => {
      beforeEach(async () => {
        email = chance.email();
        userArgs = {
          email,
        };
        result = chance.string();

        // @ts-ignore
        UserRepositories.selectByEmail.mockResolvedValue(undefined);
        // @ts-ignore
        UserRepositories.create.mockResolvedValue(result);
        expected = result;

        actual = await UserServices.signInWithGoogle(userArgs);
      });
      test('Then should select by email', () => {
        expect(UserRepositories.selectByEmail).toHaveBeenCalledTimes(1);
        expect(UserRepositories.selectByEmail).toHaveBeenCalledWith(
          email.toLowerCase(),
        );
      });
      test('Then should create', () => {
        expect(UserRepositories.create).toHaveBeenCalledTimes(1);
        expect(UserRepositories.create).toHaveBeenCalledWith(userArgs);
      });
      test('Then should return user', () => {
        expect(actual).toStrictEqual(expected);
      });
    });
  });
});
