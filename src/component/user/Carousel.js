import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import b2 from "../../image/banner-2.png";
import b3 from "../../image/banner-3.png";

import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { get } from "../../axios/Fetcher";
import React from "react";

const Carousel = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const responseData = await get("products?limit=4");

      setData(responseData);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="flex ">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="w-full h-[500px] px-0 "
        >
          <div>
            {data?.map((item) => (
              <div key={item?.id}>
                <SwiperSlide>
                  <img src={item?.image} alt="Product" />
                </SwiperSlide>
              </div>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
};
export default Carousel;
