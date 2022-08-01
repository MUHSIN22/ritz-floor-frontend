import axios from "axios";
import config from "../Constants/config";

const token = sessionStorage.getItem("token")

console.log(config.baseURL,"base url ------------------");
const axiosInstance = axios.create({
    baseURL: config.baseURL,
    headers: {"Authorization" : `${token}`}
})

export default axiosInstance;