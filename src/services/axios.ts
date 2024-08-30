import axios, { AxiosInstance } from "axios";
import useAuthStore from "@/hooks/store/useAuthStore";

const token = useAuthStore.getState().user?.token;

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "x-access-token": "Bearer " + token,
  },
});

export const getInstance = (): AxiosInstance => axiosInstance;
