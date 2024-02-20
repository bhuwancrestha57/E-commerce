// use for get method
import axios from "axios";
import { notification } from "antd";

const API_BASE_URL = "https://fakestoreapi.com/";
const api = axios.create({
  baseURL: API_BASE_URL,
});
export const get = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    notification.error({
      message: `${error.message}`,
      placement: "bottomRight",
    });
  }
};
