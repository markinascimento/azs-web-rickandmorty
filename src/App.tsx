// -> Query lib
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// -> ContextAPI
import { EpisodesProvider } from './app/context/EpisodesContext';

// -> Routes
import { Router } from './router';
import { Toaster } from 'react-hot-toast';

export function App() {
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <EpisodesProvider>
        <Toaster />

        <Router />
      </EpisodesProvider>
    </ApolloProvider>
  );
}
