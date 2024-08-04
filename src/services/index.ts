import axios from "axios";

const API_ENVS = {
  production: "https://feed-backer-backend.vercel.app/api/api",
  development: "",
  local: "http://localhost:8000/api",
};

const httpClient = axios.create({
  baseURL: API_ENVS.production ?? API_ENVS.local,
});

httpClient.interceptors.response.use(
  (response) => {
   
    return response;
  },
  (error) => {
    console.log("error:", error);

    const canThrowAnError =
      error.request.status === 0 || error.request.status === 500;

    if (canThrowAnError) {
      throw new Error(error.message);
    }
    return error.response;
  }
);

export default {
};
