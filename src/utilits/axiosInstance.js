import axios from "axios";

const axiosInstance = axios.create({
  //   baseURL: "https://qsisphysio.com/api",
  baseURL: "http://localhost:5009",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
