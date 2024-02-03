import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import b1 from "../../image/banner-1.png";
import b2 from "../../image/banner-2.png";
import b3 from "../../image/banner-3.png";
import b4 from "../../image/banner-4.png";
import b5 from "../../image/banner-5.png";

import { EffectFade, Navigation, Pagination } from "swiper/modules";

const Carousel = () => {
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
          <SwiperSlide>
            <a href="/">
              <img
                src={b1}
                alt="example"
                style={{ width: "100%", height: "100%" }}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img
                src={b2}
                alt="example"
                style={{ width: "100%", height: "100%" }}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              {" "}
              <img
                src={b4}
                alt="example"
                style={{ width: "100%", height: "100%" }}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={b5}
              alt="example"
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
        </Swiper>

        <div className="w-[40%] h-[500px] px-5">
          <div>
            <a href="/">
              <img className="pb-5" src={b2} alt="/" />
            </a>
          </div>
          <div>
            <a href="/">
              <img src={b3} alt="/" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Carousel;
