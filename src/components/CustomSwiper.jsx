

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import '../styles/CustomSwiper.scss';
// import required modules
import { Pagination, Navigation } from "swiper";

import Works from './Works';

const CustomSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{ clickable: true, }}
        navigation={true}
        modules={[Pagination, Navigation]}

      >
        {/* Works */}
        <SwiperSlide>
          <Works />
        </SwiperSlide>

          {/* Contact */}
        <SwiperSlide>
          Contact
        </SwiperSlide>

        {/* Misc */}
        <SwiperSlide>
          Misc
        </SwiperSlide>
      </Swiper>
    </>
  );
}


export default CustomSwiper;