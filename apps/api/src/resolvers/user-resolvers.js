import * as UserRepository from '../repositories/user-repositories';

const create = async (_root, args, _context) => {
  console.log('args', args);

  return {
    id: '1',
    email: args.input.email,
    firstName: args.input.firstName,
    lastName: args.input.lastName,
  };
};

const get = async () => {
  const users = await UserRepository.select();

  console.log('users', users);

  return users;
};

const login = async (_root, args, _context) => {
  return {
    id: '1',
    email: args.input.email,
    firstName: 'Christian',
    lastName: 'Farris',
  };
};

export { create, get, login };
