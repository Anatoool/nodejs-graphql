import { gql } from 'apollo-server';

export default gql`
    type VacancyBrandedTemplateSimple {
        template_id: Int
    }

    type Vacancy {
        id: ID!
        header: String!
        branded_template: VacancyBrandedTemplateSimple
        vacancyBrandedTemplate: VacancyBrandedTemplate
        deferredOrder: VacancyDeferredOrder
    }

    type VacanciesList {
        vacancies: [Vacancy!]!
        metadata: Metadata!
    }

    extend type Query {
        vacancy(id: ID!): Vacancy

        vacanciesList(
            company_id: ID
            owner_id: ID
            limit: Int
            offset: Int
            state: [Int]
        ): VacanciesList
    }
`;
