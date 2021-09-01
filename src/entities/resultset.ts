import { gql } from 'apollo-server';

export default gql`
  type Resultset {
    count: Int
    limit: Int
    offset: Int
  }
`;
