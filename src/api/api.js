import axios from "axios";

const axiosAPI = axios.create({
  baseURL: "https://flower-backend-fvzk.onrender.com",
});

export default axiosAPI;
