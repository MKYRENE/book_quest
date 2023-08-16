import{ApolloClient,InMemoryCache, createHttpLink,} from '@apollo/client';

const HTTPLink = createHttpLink ({
    uri: '/graphql',
});

const client = new ApolloClient({
    link: HTTPLink,
    cache: new InMemoryCache(),
});

export default client;