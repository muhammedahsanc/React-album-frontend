import axios from "axios";
const instance = axios.create({
  baseURL:  "https://mygallery-backend.onrender.com/",
});

export default instance;
