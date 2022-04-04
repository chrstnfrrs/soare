import bcrypt from 'bcrypt';

import * as UserRepository from '../repositories/user-repositories';

const create = async (userArgs) => {
  const hashedPassword = await bcrypt.hash(userArgs.password, 10);

  // eslint-disable-next-line no-param-reassign
  userArgs.password = hashedPassword;
  // eslint-disable-next-line no-param-reassign
  userArgs.email = userArgs.email.toLowerCase();

  const user = await UserRepository.create(userArgs);

  return user;
};

const deleteById = async (id) => {
  const isDeleted = await UserRepository.deleteById(id);

  return isDeleted;
};

const getByCredentials = async (credentials) => {
  const user = await UserRepository.selectByEmail(credentials.email);

  if (!user) {
    throw new Error('Invalid Credentials');
  }

  const isValidPassword = await bcrypt.compare(
    credentials.password,
    user.password,
  );

  if (!isValidPassword) {
    throw new Error('Invalid Credentials');
  }

  return user;
};

const getByEmail = async (email) => {
  const user = await UserRepository.selectByEmail(email);

  if (!user) {
    throw new Error('Invalid Email');
  }

  return user;
};

const getById = async (id) => {
  const user = await UserRepository.selectById(id);

  if (!user) {
    throw new Error('Invalid ID');
  }

  return user;
};

const signInWithGoogle = async (userArgs) => {
  const existingUser = await UserRepository.selectByEmail(userArgs.email);

  if (existingUser) {
    return existingUser;
  }

  const googleUser = await UserRepository.createGoogle(userArgs);

  return googleUser;
};

export {
  create,
  deleteById,
  getByCredentials,
  getByEmail,
  getById,
  signInWithGoogle,
};
