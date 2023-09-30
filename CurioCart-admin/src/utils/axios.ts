import axios from "axios";

const BACKEND_URL = "http://localhost:5555";

const baseAxios = axios.create({
  baseURL: BACKEND_URL,
  timeout: 50000, // timeout of 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

const axiosPrivate = axios.create({
  baseURL: BACKEND_URL,
  timeout: 50000, // timeout of 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export { baseAxios as default, axiosPrivate };
