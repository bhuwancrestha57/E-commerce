import React from "react";
import UserItems from "./UserItems";

import { get } from "../../axios/Fetcher";

const TrendingVendors = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const responseData = await get("products?limit=10");
      console.log("dataabc", responseData);
      setData(responseData);
    };
    fetchData();
  }, []);
  return (
    <div>
      <UserItems
        data={data?.filter((item, index) => index > 5)}
        title="Trending Vendors"
      />
    </div>
  );
};

export default TrendingVendors;
