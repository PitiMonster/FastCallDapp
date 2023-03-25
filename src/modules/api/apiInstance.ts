/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line import/named
import axios from "axios";

import { API_KEY } from "common/envs";
import { SupportedNetwork } from "common/types";
import { ENDPOINTS } from "common/utils";

const baseURL =
  ENDPOINTS[
    (window.localStorage.getItem("current_network") as
      | SupportedNetwork
      | undefined) || "ethereum"
  ];

const apiBaseURL = `${baseURL}/api`;

const apiInstance = axios.create({
  baseURL: apiBaseURL
});

apiInstance.interceptors.request.use((config) => {
  config.params = { ...config.params, apikey: API_KEY };
  return config;
});

export default apiInstance;
