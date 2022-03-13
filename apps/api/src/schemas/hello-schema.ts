import { gql } from 'apollo-server';

const HelloTypes = gql`
  extend type Query {
    hello: String!
  }
`;

export default HelloTypes;
