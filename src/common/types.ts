import { supportedNetworks } from "./utils";

export type SupportedNetwork = (typeof supportedNetworks)[number];

export type Module = "contract";

export type ContractsGetRequestAction =
  | "getabi"
  | "getsourcecode"
  | "getcontractcreation"
  | "checkverifystatus";

export type ContactsPostRequestAction = "verifysourcecode";

export type Action = ContractsGetRequestAction | ContactsPostRequestAction;

export type ContractsRequestParams = Partial<{
  module: Module;
  action: Action;
  address: string;
}>;

export type IOOperation = { name: string; type: string };

export type ABIFunction = {
  constant: boolean; // true = read / false = write
  inputs: IOOperation[];
  name: string;
  outputs: IOOperation[];
  type: "function";
};
export const isABIFunction = (a: ABIAction): a is ABIFunction =>
  a.type === "function";

export type ABIConstructor = {
  inputs: IOOperation[];
  type: "constructor";
};
export const isABIConstructor = (a: ABIAction): a is ABIConstructor =>
  a.type === "constructor";

export type ABIEvent = {
  anonymous: boolean;
  inputs: IOOperation;
  name: string;
  type: "event";
};
export const isABIEvent = (a: ABIAction): a is ABIEvent => a.type === "event";

export type ABIAction = ABIFunction | ABIConstructor | ABIEvent;
