import axios from "axios";

export const axiosAPI = axios.create({
    baseURL : 'https://tchat-api.onrender.com/api'
});