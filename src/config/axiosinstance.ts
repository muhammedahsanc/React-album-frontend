import Cookies from 'js-cookie';
import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:4000/",
});
instance.defaults.headers.common["Authorization"] =Cookies.get("token");
export default instance;
