// axiosInstance.js
import axios from "axios";
import Cookies from "js-cookie"; // Import Cookies library to work with cookies

const instance = axios.create({
  baseURL: "http://localhost:4000/api/v1", // Adjust base URL as needed
  withCredentials: true, // Ensure that cookies are sent with requests
});

// Add interceptors to handle requests and responses
instance.interceptors.request.use(
  (config) => {
    // Modify request headers to include cookies
    const token = Cookies.get("token"); // Get token from cookie
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add other interceptors for error handling, etc.

export default instance;
