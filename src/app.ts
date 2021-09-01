import { ApolloServer } from 'apollo-server';

import dataSources from 'data-sources';
import typeDefs from 'entities';
import resolvers from 'resolvers';

const context = ({ req }: any) => {
    const token = req.headers.authorization || '';

    return { token };
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    dataSources,
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
