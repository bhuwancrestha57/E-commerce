import React from "react";
import UserItems from "./UserItems";

import { trendingVendors } from "../../services/User";

const TrendingVendors = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    trendingVendors().then((response) => {
      setData(response);
    });
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
