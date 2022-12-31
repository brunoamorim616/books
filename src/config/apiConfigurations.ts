import axios from "axios";

export const NYTApi = axios.create({
  baseURL: "https://api.nytimes.com/svc",
});
