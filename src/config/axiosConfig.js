import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// 🔐 Attach token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    console.log("\n🔐 === REQUEST INTERCEPTOR ===");
      console.log("Request URL:", config.url);
      console.log("Token:", token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
