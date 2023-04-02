import { Suspense } from "react";
// eslint-disable-next-line import/named
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary
} from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      suspense: true
    }
  }
});

export const ApiProvider: React.FC<{ children?: React.ReactNode }> = ({
  children
}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export const QueryBoundaries: React.FC<React.PropsWithChildren> = ({
  children
}) => (
  <QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundary onReset={reset} FallbackComponent={ErrorView}>
        <Suspense fallback={<LoadingView />}>{children}</Suspense>
      </ErrorBoundary>
    )}
  </QueryErrorResetBoundary>
);

const LoadingView = () => <div>Loading...</div>;

const ErrorView = ({ error, resetErrorBoundary }: FallbackProps) => (
  <div>
    <div>{error.message}</div>
    <button title="Retry" onClick={resetErrorBoundary} />
  </div>
);
