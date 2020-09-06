import axios from "axios";
import { base_url } from "./variables";

axios.defaults.withCredentials = true;

export const createRun = (run) => {
  return axios.post(`${base_url}/run`, run);
};
