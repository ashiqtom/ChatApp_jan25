import axios from "axios";

const VITE_API_URL = `${import.meta.env.VITE_API_URL}/api`;
console.log('VITE_API_URL', VITE_API_URL)

export const axiosInstance = axios.create({
  baseURL: VITE_API_URL,
  withCredentials: true,
});