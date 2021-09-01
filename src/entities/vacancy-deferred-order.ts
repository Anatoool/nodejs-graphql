import { gql } from 'apollo-server';

export default gql`
    type VacancyDeferredOrder {
        id: ID!
        order_id: Int!
        vacancy_id: Int!
        order(clientId: ID!): Order
    }
`;
