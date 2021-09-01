import { gql } from 'apollo-server';

export default gql`
    type VacancyBrandedTemplate {
        id: Int
        company_id: Int
        is_default: Boolean
        name: String
    }
`;
