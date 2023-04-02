import { SupportedNetwork } from "./types";

export const supportedNetworks = ["ethereum", "goerli", "sepolia"] as const;
export const ENDPOINTS: Record<SupportedNetwork, string> = {
  ethereum: "https://api.etherscan.io",
  goerli: "https://api-goerli.etherscan.io",
  sepolia: "https://api-sepolia.etherscan.io"
};

// wrapPromise.js
/**
 * Wraps a promise so it can be used with React Suspense
 * @param {Promise} promise The promise to process
 * @returns {Object} A response object compatible with Suspense
 */
type RequestStatus = "pending" | "error" | "success";

export function wrapPromise(promise: Promise<any>) {
  let status: RequestStatus = "pending";
  let response: any;
  let counter = 0;
  console.log("executed");
  const suspender = promise.then(
    (res) => {
      console.log(counter);
      counter++;
      console.log(counter);
      console.log(res);
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  const handler: Record<RequestStatus, () => any> = {
    pending: () => {
      throw suspender;
    },
    error: () => {
      throw response;
    },
    success: () => response
  };

  const read = () => {
    console.log(status, counter);
    const result = handler[status]();
    return result;
  };

  return { read };
}

export function wrapPromise2(promise: any) {
  let status = "pending";
  let result: any;
  const suspend = promise().then(
    (res: any) => {
      status = "success";
      result = res;
    },
    (err: any) => {
      status = "error";
      result = err;
    }
  );
  return {
    read() {
      // let suspense catch the error and return the fallback
      if (status === "pending") {
        throw suspend;
      } else if (status === "error") {
        throw result;
      }
      // change fallback to content when value is returned
      else if (status === "success") {
        return result;
      }
    }
  };
}
