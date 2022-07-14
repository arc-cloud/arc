// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import '../styles/CustomSwiper.scss';
// import required modules
import { Pagination, Navigation } from "swiper";

import Works from './Works';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import '../assets/custom_swiper_nav.js';

const CustomSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{ clickable: true, }}
        navigation={{
          nextEl: '.next',
          prevEl: '.prev'
        }}
        modules={[Pagination, Navigation]}

      >
        {/* Works */}
        <SwiperSlide>
          <button className='prev'>
            <FontAwesomeIcon icon={ faAngleLeft } />
          </button>
          <Works />
          <button className='next'>
            <FontAwesomeIcon icon={ faAngleRight } />
          </button>
        </SwiperSlide>

          {/* Contact */}
        <SwiperSlide>
          <button className='prev'>
            <FontAwesomeIcon icon={ faAngleLeft } />
          </button>
          Contact
          <button className='next'>
            <FontAwesomeIcon icon={ faAngleRight } />
          </button>
        </SwiperSlide>

        {/* Misc */}
        <SwiperSlide>
          <button className='prev'>
            <FontAwesomeIcon icon={ faAngleLeft } />
          </button>
          Misc
          <button className='next'>
            <FontAwesomeIcon icon={ faAngleRight } />
          </button>
        </SwiperSlide>
      </Swiper>
    </>
  );
}


export default CustomSwiper;