import Chance from 'chance';
import bcrypt from 'bcrypt';

import * as User from '../graphql/user';
import { mutate, query } from '../adapters/fetch-adapters';
import prisma from '../adapters/prisma-adapters';

const chance = new Chance();

describe('Given the user schema', () => {
  describe('When creating a user', () => {
    describe('When user has unique email', () => {
      let id;

      afterEach(async () => {
        await prisma.user.delete({ where: { id } });
      });
      test('Then should create user', async () => {
        const email = chance.email();
        const password = chance.string();
        const firstName = chance.first();
        const lastName = chance.last();

        const { data } = await mutate(User.createUser, {
          variables: {
            input: {
              email,
              password,
              firstName,
              lastName,
            },
          },
        });

        // Get user id to use for delete mutation later
        id = data.createUser.id;

        expect(data.createUser).toMatchObject({
          email,
          firstName,
          lastName,
        });
      });
    });

    describe('When user has not unique email', () => {
      let email, id;

      beforeEach(async () => {
        email = chance.email();
        const password = chance.string();
        const firstName = chance.first();
        const lastName = chance.last();

        const user = await prisma.user.create({
          data: {
            email,
            password,
            firstName,
            lastName,
          },
        });

        id = user.id;
      });

      afterEach(async () => {
        await prisma.user.delete({ where: { id } });
      });

      test('Then should return error', async () => {
        const password = chance.string();
        const firstName = chance.first();
        const lastName = chance.last();
        const { errors } = await mutate(User.createUser, {
          variables: {
            input: {
              email,
              password,
              firstName,
              lastName,
            },
          },
        });

        expect(errors[0].message).toStrictEqual('Error: Unable to create user');
      });
    });
  });

  describe('When deleting a user', () => {
    let id;

    beforeEach(async () => {
      const email = chance.email();
      const password = chance.string();
      const firstName = chance.first();
      const lastName = chance.last();
      const user = await prisma.user.create({
        data: {
          email,
          password,
          firstName,
          lastName,
        },
      });

      id = user.id;
    });
    test('Then should delete user', async () => {
      const { data } = await mutate(User.deleteUser, {
        variables: { id },
      });

      expect(data.deleteUser).toStrictEqual(true);
    });
  });

  describe('When fetching all users', () => {
    let email, id;

    beforeEach(async () => {
      email = chance.email();
      const password = chance.string();
      const firstName = chance.first();
      const lastName = chance.last();
      const user = await prisma.user.create({
        data: {
          email,
          password,
          firstName,
          lastName,
        },
      });

      id = user.id;
    });

    afterEach(async () => {
      await prisma.user.delete({ where: { id } });
    });

    test('Then should return all users', async () => {
      const { data } = await query(User.users);

      expect(data.users).toEqual(
        expect.arrayContaining([expect.objectContaining({ email })]),
      );
      expect(data.users.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('When fetching a user by credentials', () => {
    let email, password, firstName, lastName, id;

    describe('When user is in database', () => {
      describe('When using valid credentials', () => {
        beforeEach(async () => {
          email = chance.email();
          password = chance.string();
          firstName = chance.first();
          lastName = chance.last();

          const user = await prisma.user.create({
            data: {
              email: email.toLowerCase(),
              password: await bcrypt.hash(password, 10),
              firstName,
              lastName,
            },
          });

          id = user.id;
        });

        afterEach(async () => {
          await prisma.user.delete({ where: { id } });
        });

        test('Then should find user', async () => {
          const { data } = await query(User.userByCredentials, {
            variables: {
              input: {
                email,
                password,
              },
            },
          });

          expect(data.userByCredentials).toMatchObject({
            email,
            firstName,
            lastName,
          });
        });
      });
      describe('When using invalid password', () => {
        beforeEach(async () => {
          email = chance.email();
          password = chance.string();
          firstName = chance.first();
          lastName = chance.last();

          const user = await prisma.user.create({
            data: {
              email: email.toLowerCase(),
              password: await bcrypt.hash(password, 10),
              firstName,
              lastName,
            },
          });

          id = user.id;
        });
        afterEach(async () => {
          await prisma.user.delete({ where: { id } });
        });
        test('Then should receive an error', async () => {
          const { errors } = await query(User.userByCredentials, {
            variables: {
              input: {
                email,
                password: chance.string(),
              },
            },
          });

          expect(errors[0].message).toStrictEqual('Error: Invalid Credentials');
        });
      });
    });
    describe('When user in not in database', () => {
      beforeEach(() => {
        email = chance.string();
        password = chance.string();
      });
      test('Then should receive an error', async () => {
        const { errors } = await query(User.userByCredentials, {
          variables: {
            input: {
              email,
              password,
            },
          },
        });

        expect(errors[0].message).toStrictEqual('Error: Invalid Credentials');
      });
    });
  });

  describe('When fetching a user by email', () => {
    let email, firstName, lastName, id;

    describe('When user is in database', () => {
      beforeEach(async () => {
        const password = chance.string();

        email = chance.email();
        firstName = chance.first();
        lastName = chance.last();

        const user = await prisma.user.create({
          data: {
            email: email.toLowerCase(),
            password: await bcrypt.hash(password, 10),
            firstName,
            lastName,
          },
        });

        id = user.id;
      });

      afterEach(async () => {
        await prisma.user.delete({ where: { id } });
      });

      test('Then should find user', async () => {
        const { data } = await query(User.userByEmail, {
          variables: {
            email,
          },
        });

        expect(data.userByEmail).toMatchObject({
          email,
          firstName,
          lastName,
        });
      });
    });
    describe('When user in not in database', () => {
      beforeEach(() => {
        email = chance.string();
      });
      test('Then should receive an error', async () => {
        const { errors } = await query(User.userByEmail, {
          variables: {
            email,
          },
        });

        expect(errors[0].message).toStrictEqual('Error: Invalid Email');
      });
    });
  });

  describe('When fetching a user by id', () => {
    let email, firstName, lastName, id;

    describe('When user is in database', () => {
      beforeEach(async () => {
        const password = chance.string();

        email = chance.email();
        firstName = chance.first();
        lastName = chance.last();

        const user = await prisma.user.create({
          data: {
            email: email.toLowerCase(),
            password: await bcrypt.hash(password, 10),
            firstName,
            lastName,
          },
        });

        id = user.id;
      });

      afterEach(async () => {
        await prisma.user.delete({ where: { id } });
      });

      test('Then should find user', async () => {
        const { data } = await query(User.user, {
          variables: {
            id,
          },
        });

        expect(data.user).toMatchObject({
          id,
          email,
          firstName,
          lastName,
        });
      });
    });
    describe('When user in not in database', () => {
      beforeEach(() => {
        id = chance.guid();
      });
      test('Then should receive an error', async () => {
        const { errors } = await query(User.user, {
          variables: {
            id,
          },
        });

        expect(errors[0].message).toStrictEqual('Error: Invalid ID');
      });
    });
  });

  describe('When user signs in with google', () => {
    let email, id, firstName, lastName;

    describe('When user already exists', () => {
      beforeEach(async () => {
        const password = chance.string();

        email = chance.email();
        firstName = chance.first();
        lastName = chance.last();

        const user = await prisma.user.create({
          data: {
            email: email.toLowerCase(),
            password: await bcrypt.hash(password, 10),
            firstName,
            lastName,
          },
        });

        id = user.id;
      });

      afterEach(async () => {
        await prisma.user.delete({ where: { id } });
      });

      test('Then should return user', async () => {
        const { data } = await mutate(User.signInWithGoogle, {
          variables: {
            input: {
              email,
              firstName,
              lastName,
            },
          },
        });

        expect(data.signInWithGoogle).toMatchObject({
          id,
          email,
          firstName,
          lastName,
        });
      });
    });
    describe('When user does not exist', () => {
      afterEach(async () => {
        await prisma.user.delete({ where: { id } });
      });
      test('Then should return user', async () => {
        email = chance.email();
        firstName = chance.first();
        lastName = chance.last();

        const { data } = await mutate(User.signInWithGoogle, {
          variables: {
            input: {
              email,
              firstName,
              lastName,
            },
          },
        });

        id = data.signInWithGoogle.id;

        expect(data.signInWithGoogle).toMatchObject({
          id,
          email,
          firstName,
          lastName,
        });
      });
    });
  });
});
