import { lazy, Suspense } from "react";

import { MetamaskButton } from "common/components";
import { getABI } from "common/requests/contracts";
import { QueryBoundaries } from "modules/api/ApiProvider";

import { ContractABI } from "./ContractInfo/components/ContractABI";

export const ContractPlayground = () => {
  // const handleGetABI = async () => {
  //   const response = await getABI("0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413");
  //   console.log(response);
  //   const methods: { constant: boolean; name: string }[] = JSON.parse(
  //     response.data.result
  //   );
  //   console.log(JSON.parse(response.data.result));
  //   const read: string[] = [];
  //   const write: string[] = [];
  //   methods.forEach((method) => {
  //     if (method.constant === undefined) return;
  //     if (method.constant) read.push(method.name);
  //     else write.push(method.name);
  //   });

  //   console.log(JSON.stringify(read));
  //   console.log("------");
  //   console.log(JSON.stringify(write));
  // };

  const Lazy = lazy(() =>
    import("./ContractInfo/components/ContractABI").then((module) => ({
      default: module.ContractABI
    }))
  );

  // const response = getABI("0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413");
  const response = "xd";

  return (
    <div>
      Contract playground module
      <MetamaskButton />
      {/* <button onClick={handleGetABI}>Get abi</button> */}
      <QueryBoundaries>
        <Lazy data={response} />
      </QueryBoundaries>
    </div>
  );
};
