import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";

import { ContractsRequestParams } from "common/types";
import { wrapPromise, wrapPromise2 } from "common/utils";
import { get } from "modules/api/api";

const genericContracts = (params: ContractsRequestParams) => {
  params.module = "contract";
  return get<
    { message: string; result: string; status: string },
    ContractsRequestParams
  >("", { params });
};

export const getABI = (address: string) =>
  wrapPromise(genericContracts({ address, action: "getabi" }));

export const getABIv2 = (address: string) =>
  genericContracts({ address, action: "getabi" });

export const useGetABIQuery = (address: string) => {
  console.log("query");
  const query = useQuery("get-abi", () => getABIv2(address));
  return query;
};
