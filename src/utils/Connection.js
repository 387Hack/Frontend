import axios from "axios";
import { BACKEND_URL } from "../Assets/Constants";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const fetchClient = () => {
  const defaultOptions = {
    baseURL: `${BACKEND_URL}`,
    timeout: 1000,
  };

  let instance = axios.create(defaultOptions);

  instance.interceptors.request.use((config) => {
    const token = cookies.get("token");
    if (token) config.headers["Authorization"] = `bearer ${token}`;
    return config;
  });

  return instance;
};

export default fetchClient();
