import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const withQueryProvider = (Component) => {
  return () => {
    return (
      <QueryClientProvider client={queryClient}>
        <Component />
      </QueryClientProvider>
    );
  };
};
export default withQueryProvider;
