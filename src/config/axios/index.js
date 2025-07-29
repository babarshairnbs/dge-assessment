import axios from "axios";
import STORAGE_KEY from "../../constants/Storage";
import { getLocalStorageItem } from "../../services/localStorageService";

// Create an Axios instance
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = getLocalStorageItem(STORAGE_KEY.TOKEN); // Optional: JWT or other auth token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log("Request error:", error);
    return Promise.reject(error);
  }
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.log("API error:", error.response.data?.message || error.message);
    } else if (error.request) {
      console.log("No response from server:", error.request);
    } else {
      console.log("Axios config error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
