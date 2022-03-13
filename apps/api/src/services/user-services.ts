import * as UserRepository from '../repositories/user-repositories';

const create = async (userArgs) => {
  const user = await UserRepository.create(userArgs);

  return user;
};

const getByEmail = async (email) => {
  const user = await UserRepository.selectByEmail(email);

  return user;
};

export { create, getByEmail };
