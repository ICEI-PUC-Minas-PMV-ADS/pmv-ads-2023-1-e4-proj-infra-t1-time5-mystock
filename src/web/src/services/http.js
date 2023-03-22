import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:5223/",
});

export default http;
