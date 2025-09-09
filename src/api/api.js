import axios from "axios";

const baseURL =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000"
    : "https://flower-backend-fvzk.onrender.com";

const axiosAPI = axios.create({
  baseURL,
});

export default axiosAPI;
