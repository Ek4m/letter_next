import axios from "axios";
import Cookie from "js-cookie";

import { __access_token, __refresh_token } from "../../constants";

export const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

httpClient.interceptors.request.use(async (config) => {
  const aToken = Cookie.get(__access_token);
  if (aToken) {
    config.headers!.Authorization = `Bearer ${aToken}`;
  }
  return config;
});

httpClient.interceptors.response.use(
  (response) => response,
  async (err) => {
    console.log(err);
    let refresh_token = "";
    if (err.config.url === "/auth/refresh" || err.response.status !== 401) {
      return Promise.reject(err);
    } else {
      refresh_token = Cookie.get(__refresh_token) || "";
      if (!refresh_token) {
        return Promise.reject(err);
      } else {
        try {
          const response = await httpClient.post("/auth/refresh", {
            refresh_token,
          });
          Cookie.set(__access_token, response.data.access_token);
          return httpClient.request(err.config);
        } catch (e) {
          return Promise.reject(e);
        }
      }
    }
  }
);

export * from "./responses";
