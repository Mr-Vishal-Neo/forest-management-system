
import axios, { AxiosError } from "axios";
// import { getCookie } from "cookies-next";
import { handleStatus } from "../utils/handleStatus";
import { getItem } from "../utils/sessionStorageUtils";

// ✅ use Vite env
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const EMAIL_API_BASE_URL = import.meta.env.VITE_API_BASE_URL_EMAIL_SERVICE;

const axiosPrivate = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

axiosPrivate.interceptors.request.use(
  (config) => {
    const accessToken = getItem("access_token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (err) => Promise.reject(err),
);

axiosPrivate.interceptors.response.use(
  (response) => response,
  (err: AxiosError) => {
    const { response, message } = err;
    handleStatus(response?.status, message);
    return Promise.reject(err);
  },
);

const axiosPublic = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

const axiosEmailService = axios.create({
  baseURL: EMAIL_API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

axiosEmailService.interceptors.request.use(
  (config) => {
    const username = "admin";
    const password = "password";
    const basicAuth = `Basic ${btoa(`${username}:${password}`)}`;
    config.headers.Authorization = basicAuth;
    return config;
  },
  (err) => Promise.reject(err),
);

axiosEmailService.interceptors.response.use(
  (response) => response,
  (err: AxiosError) => {
    const { response, message } = err;
    handleStatus(response?.status, message);
    return Promise.reject(err);
  },
);

export { axiosPrivate, axiosPublic, axiosEmailService };
