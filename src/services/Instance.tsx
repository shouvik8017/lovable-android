import axios from "axios";
import { BASEURL } from "../constants/ApiUrls";

const axiosInstance = axios.create({
    baseURL: BASEURL,
})

// Add interceptors for handling global errors
axiosInstance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    },
);

// Interceptor for response (optional but useful)
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        // Global error handling
        if (error.response) {
            // The request was made and the server responded with a status code
            console.error('Data:', error.response.data);
            console.error('Status:', error.response.status);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;