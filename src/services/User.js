import { get } from "../axios/Fetcher";

export const hotProduct = async () => {
  const response = await get("products?limit=4");
  return response;
};
export const trendingVendors = async () => {
  const response = await get("products?limit=10");
  return response;
};
