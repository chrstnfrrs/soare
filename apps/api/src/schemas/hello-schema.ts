import { gql } from 'apollo-server-express';

const HelloTypes = gql`
  extend type Query {
    hello: String!
  }
`;

export default HelloTypes;
