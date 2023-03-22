import { Route, Routes } from "react-router-dom";

import { ContractPlaygroundPage } from "./pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ContractPlaygroundPage />} />
    </Routes>
  );
};
