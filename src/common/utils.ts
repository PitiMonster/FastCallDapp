import { SupportedNetwork } from "./types";

export const supportedNetworks = ["ethereum", "goerli", "sepolia"] as const;
export const ENDPOINTS: Record<SupportedNetwork, string> = {
  ethereum: "https://api.etherscan.io",
  goerli: "https://api-goerli.etherscan.io",
  sepolia: "https://api-sepolia.etherscan.io"
};
