import axios from "axios";

const BASE_URL = "https://randomuser.me/";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response?.status === 401) {
    } else {
      return Promise.reject(
        error.response?.data || { message: "Network error!" }
      );
    }
  }
);

export default instance;
