import { gql } from 'apollo-server';

export default gql`
    type Order {
        id: ID!
        title: String!
        total: Int!
    }
`;
