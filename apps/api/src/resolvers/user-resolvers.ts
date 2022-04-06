import * as UserServices from '../services/user-services';

const create = async (_root, args) => {
  try {
    const { input: userArgs } = args;

    const user = await UserServices.create(userArgs);

    return user;
  } catch (error) {
    return new Error(error);
  }
};

const deleteById = async (_root, args) => {
  try {
    const { id } = args;

    const isDeleted = Boolean(await UserServices.deleteById(id));

    return isDeleted;
  } catch (error) {
    return new Error(error);
  }
};

const get = async () => {
  try {
    const users = await UserServices.get();

    return users;
  } catch (error) {
    return new Error(error)
  }

};

const getByCredentials = async (_root, args) => {
  try {
    const { input: credentials } = args;

    const user = await UserServices.getByCredentials(credentials);

    return user;
  } catch (error) {
    return new Error(error);
  }
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

const getById = async (_root, args) => {
  try {
    const { id } = args;

    const user = await UserServices.getById(id);

    return user;
  } catch (error) {
    return new Error(error);
  }
};

const signInWithGoogle = async (_root, args) => {
  try {
    const { input: userArgs } = args;

    const user = await UserServices.signInWithGoogle(userArgs);

    return user;
  } catch (error) {
    return new Error(error);
  }
};

export {
  create,
  deleteById,
  get,
  getByCredentials,
  getByEmail,
  getById,
  signInWithGoogle,
};
