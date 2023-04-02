import { useEffect, useState } from "react";

import { getABI, useGetABIQuery } from "common/requests/contracts";
import { ABIAction, ABIFunction, isABIFunction } from "common/types";

import { ABIFunctionDetails } from "./ABIFuncDetails";

export const ContractABI = (data: any) => {
  const [reads, setReads] = useState<ABIFunction[]>([]);
  const [writes, setWrites] = useState<ABIFunction[]>([]);

  const { data: abiData } = useGetABIQuery(
    "0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413"
  );

  useEffect(() => {
    if (!abiData) return;

    setReads([]);
    setWrites([]);

    (JSON.parse(abiData.data.result) as ABIAction[]).map((a) => {
      if (isABIFunction(a)) {
        if (a.constant) setReads((prev) => [...prev, a]);
        else setWrites((prev) => [...prev, a]);
      }
    });
  }, [abiData]);

  if (!abiData) return;

  console.log(JSON.parse(abiData.data.result));

  return (
    <div>
      <h4>Reads:</h4>
      <ul>
        {reads.map((r) => (
          <ABIFunctionDetails key={r.name} data={r} />
        ))}
      </ul>
      <h4>Writes:</h4>
      <ul>
        {writes.map((w) => (
          <ABIFunctionDetails key={w.name} data={w} />
        ))}
      </ul>
    </div>
  );
};
