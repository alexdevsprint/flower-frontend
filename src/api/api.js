import axios from "axios";

const axiosAPI = axios.create({
  baseURL: "http://localhost:3000/", //сюди потрібно додати посилання на наш бекенд  
});

export default axiosAPI;