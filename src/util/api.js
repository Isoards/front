import axios from "axios";
import { QueryClient } from "@tanstack/react-query";
import { getAuthToken } from "./auth.js";

export const queryClient = new QueryClient();

const BASE_URL = "http://localhost:7000";

const axiosAPI = (url, options) => {
  const instance = axios.create({ baseURL: url, ...options });
  return instance;
};

// Auth Required
const axiosAuthAPI = (url, options) => {
  const instance = axios.create({ baseURL: url, ...options });
  instance.defaults.withCredentials = true;
  return instance;
};

export const defaultInstance = axiosAPI(BASE_URL);
export const authInstance = axiosAuthAPI(BASE_URL);

authInstance.interceptors.request.use(
  function (config) {
    const accessToken = getAuthToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);




//dk
export const userSignUp = (email, password, name, phone, gender, birthDate) => defaultInstance.post('/api/v1/auth/user/signup', {email, password, name, phone, gender, birthDate});
export const userLogin = (email, password) => defaultInstance.post('/api/v1/auth/user/login', {email, password});