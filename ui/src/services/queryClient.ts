import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      onError: (error: Error) => {
        console.error('Query error:', error.message);
      }
    },
    mutations: {
      onError: (error: Error) => {
        console.error('Mutation error:', error.message);
      }
    }
  }
});