// use for get method
import axios from "axios";
import { notification } from "antd";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
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
