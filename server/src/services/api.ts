import axios from "axios";

const api = axios.create({
  baseURL: "https://api.spacex.land/graphql/",
});

export default api;
