import React from "react";
import UserItems from "./UserItems";

import { get } from "../../axios/Fetcher";

const HotProducts = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const responseData = await get("products?limit=4");
      console.log("dataabc", responseData);
      setData(responseData);
    };
    fetchData();
  }, []);
  return (
    <div>
      <UserItems data={data} title="Hot Products" />
    </div>
  );
};

export default HotProducts;
