import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

export const ApiProvider: React.FC<{ children?: React.ReactNode }> = ({
  children
}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
