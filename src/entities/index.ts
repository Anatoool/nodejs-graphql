import { gql } from 'apollo-server';
import { DocumentNode } from 'graphql';

import metadataTypeDefs from 'entities/metadata';
import orderTypeDefs from 'entities/order';
import resultsetTypeDefs from 'entities/resultset';
import vacancyBrandedTemplateTypeDefs from 'entities/vacancy-branded-template';
import vacancyDeferredOrderTypeDefs from 'entities/vacancy-deferred-order';
import vacancyTypeDefs from 'entities/vacancy';

const typeDefs = gql`
  type Query {
    _empty: ID
  }
`;

const combinedTypeDefs: DocumentNode[] = [
    typeDefs,
    metadataTypeDefs,
    orderTypeDefs,
    resultsetTypeDefs,
    vacancyBrandedTemplateTypeDefs,
    vacancyDeferredOrderTypeDefs,
    vacancyTypeDefs,
];

export default combinedTypeDefs;
