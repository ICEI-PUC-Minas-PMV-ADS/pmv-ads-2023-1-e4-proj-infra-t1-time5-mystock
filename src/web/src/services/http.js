import axios from "axios";

const http = axios.create({
  baseURL: "https://localhost:7002/",
});

export default http;
