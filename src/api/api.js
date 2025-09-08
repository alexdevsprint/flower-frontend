import axios from "axios";

const axiosAPI = axios.create({
  baseURL: "https://flower-frontend-gamma.vercel.app/",
});

export default axiosAPI;
