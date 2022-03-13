import * as UserServices from '../services/user-services';
import * as UserRepository from '../repositories/user-repositories';

const create = async (_root, args) => {
  try {
    const { input: userArgs } = args;

    const user = await UserServices.create(userArgs);

    return user;
  } catch (error) {
    return new Error(error);
  }
};

const get = async () => {
  const users = await UserRepository.select();

  return users;
};

const getByEmail = async (_root, args) => {
  try {
    const { email } = args;

    const user = await UserServices.getByEmail(email);

    return user;
  } catch (error) {
    return new Error(error);
  }
};

export { create, get, getByEmail };
