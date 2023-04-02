import { HelmetProvider } from "react-helmet-async";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";

import { ApiProvider } from "modules/api/ApiProvider";

import { AppRouter } from "./AppRouter";

export const App = () => {
  return (
    <BrowserRouter>
      <ApiProvider>
        <HelmetProvider>
          <ReactQueryDevtools />
          <AppRouter />
        </HelmetProvider>
      </ApiProvider>
    </BrowserRouter>
  );
};

export default App;
