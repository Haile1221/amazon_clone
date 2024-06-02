import axios from "axios";

const axiosInstance = axios.create({
  // we do not have function firebase deploy url because of payment
  // for function local file
  // baseURL: "http://127.0.0.1:5001/clone-da067/us-central1/api",
  // Render deploy version
  baseURL: "https://amazon-api-deploy-fgbg.onrender.com/",
});

export { axiosInstance };
