import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();

export const axiosInstance5000 = axios.create({
    baseURL: "http://localhost:5000",
});