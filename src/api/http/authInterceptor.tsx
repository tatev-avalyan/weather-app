import axios from "axios";

import { apiHeader } from "./apiInterceptor";

export const instance = axios.create({
  baseURL: "https://api.openweathermap.org/",
  timeout: 30000
});
instance.interceptors.request.use((config) => {
  config.headers = apiHeader();

  return config;
});
instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
  
    throw error;
  }
);
