import axios from "axios";
import config from "../Constants/config";

const token = sessionStorage.getItem("token")

const axiosInstance = axios.create({
    baseURL: config.baseURL,
    timeout: 10000,
    headers: {"Authorization" : `${token}`}
})

export default axiosInstance;