import { HelmetProvider } from "react-helmet-async";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./AppRouter";
import { ApiProvider } from "./modules/ContractPlayground/api/ApiProvider";

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
