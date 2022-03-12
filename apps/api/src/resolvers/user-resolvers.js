import * as UserServices from '../services/user-services';
import * as UserRepository from '../repositories/user-repositories';

const create = async (_root, args, _context) => {
  try {
    const { input: userArgs } = args;

    const user = await UserServices.create(userArgs);

    return user;
  } catch (error) {
    console.log('error');
  }
};

const get = async () => {
  const users = await UserRepository.select();

  console.log('users', users);

  return users;
};

const getByEmail = async (root, args, context) => {
  try {
    const { email } = args;

    const user = await UserServices.getByEmail(email);

    return user;
  } catch (error) {
    console.log('error');
  }
};

// const getById = async (root, args, context) => {

// };

export { create, get, getByEmail };
