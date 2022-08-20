import axios from "axios";
import config from "../Constants/config";

const token = sessionStorage.getItem("token")
const axiosInstance = axios.create({
    baseURL: config.baseURL,
    headers: {"Authorization" : `${token}`}
})

export default axiosInstance;