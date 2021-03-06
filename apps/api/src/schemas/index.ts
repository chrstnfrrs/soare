import { gql } from 'apollo-server-express';

import HelloSchema from './hello-schema';
import UserSchema from './user-schema';

const Query = gql`
  type Query
`;
const Mutation = gql`
  type Mutation
`;

const schema = [Query, Mutation, HelloSchema, UserSchema];

export default schema;
