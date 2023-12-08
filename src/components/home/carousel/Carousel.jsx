import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination, } from "swiper";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductSlider from "./ProductSlider";
import { swiperProducts } from "../../../helpers/swiperProducts";
import { SwiperContainer } from "./carousel.styles";

function Carousel() {
  return (
    <SwiperContainer>
      <Swiper
        navigation={true}
        pagination={{
            dynamicBullets: true,
          }}
        spaceBetween={300}
        speed="500" 
        loop={true}
        id="swiperTeam"
        breakpoints={{
        500: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        950: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1900: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
        }}                    
        modules={[Pagination , Navigation]}
        className="mySwiper"
      >
        {swiperProducts.map((product, index) => (
          <SwiperSlide className="sliderTestimonios" key={index}>
            <ProductSlider product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
}

export default Carousel;
