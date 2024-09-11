import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles/swiper.css';


export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1.7}
        spaceBetween={30}
        slidesPerGroupAuto
        
        className="mySwiper"
      >
        <SwiperSlide>
        <img src="images/home/swiper-1.jpeg" alt="" />
          
        </SwiperSlide>
        <SwiperSlide>
        <img src="images/home/swiper-1.jpeg" alt="" />
          
        </SwiperSlide>
        <SwiperSlide>
        <img src="images/home/swiper-1.jpeg" alt="" />
          
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
