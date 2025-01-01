import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:9999/classroom-service/graphql',
  cache: new InMemoryCache(),
});