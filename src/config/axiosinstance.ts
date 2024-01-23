import Cookies from "js-cookie";
import instance from "./axios";

instance.interceptors.request.use(
  (config) => {
    const accessToken = JSON.parse(Cookies.get("token")?? JSON.stringify(""));
    if (config.headers) config.headers.Authorization = accessToken!;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;

// instance.defaults.headers.common["Authorization"]=Cookies.get("token");
// baseURL: "",
