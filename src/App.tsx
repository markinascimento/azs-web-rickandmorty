// -> Query lib
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// -> Routes
import { Router } from './router';

export function App() {
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}
