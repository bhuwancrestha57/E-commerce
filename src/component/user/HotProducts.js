import React from "react";

import { hotProduct } from "../../services/User";
import UserItems from "./UserItems";

const HotProducts = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    hotProduct().then((response) => {
      setData(response);
    });
  }, []);
  return (
    <div>
      <UserItems data={data} title="Hot Products" />
    </div>
  );
};

export default HotProducts;
