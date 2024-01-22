import Cookies from 'js-cookie';
import axios from "axios";
const instance = axios.create({
baseURL: "https://mygallery-backend.onrender.com/",
});
instance.defaults.headers.common["Authorization"] =Cookies.get("token");
export default instance;
// baseURL: "https://gallery-backend-edl1.onrender.com"