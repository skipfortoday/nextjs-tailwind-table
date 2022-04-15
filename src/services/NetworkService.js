import axios from "axios";
import store from "../store/index";
import { showProgressBar } from "../store/actions/route";

const BASE_URL = "https://randomuser.me/api/";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    store.dispatch(showProgressBar(true));
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => {
    store.dispatch(showProgressBar(false));
    return response.data;
  },
  (error) => {
    store.dispatch(showProgressBar(false));
    if (error.response?.status === 401) {
    } else {
      return Promise.reject(
        error.response?.data || { message: "Network error!" }
      );
    }
  }
);

export default instance;
