import axios from "axios";

const AUTH_URL = "http://localhost:8000";

export const authRequest = axios.create({
  baseURL: AUTH_URL,
  withCredentials: true,
});
