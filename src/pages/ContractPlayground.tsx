import { Helmet } from "react-helmet-async";

import { ContractPlayground } from "modules/ContractPlayground";

export const ContractPlaygroundPage = () => (
  <>
    <Helmet>
      <title>Contract playground</title>
    </Helmet>
    <ContractPlayground />
  </>
);
