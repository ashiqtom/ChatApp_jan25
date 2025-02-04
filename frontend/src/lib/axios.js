import axios from "axios";

const VITE_API_URL = `${import.meta.env.VITE_API_URL}/api`;
console.log('Api_Url', VITE_API_URL)

export const axiosInstance = axios.create({
  baseURL: VITE_API_URL,
  withCredentials: true,
});