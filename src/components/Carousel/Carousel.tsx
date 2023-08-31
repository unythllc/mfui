"use client";
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";

const Carousel = () => {
  const images = [
    {
      id: 1,
      src: "/static/displayer1.png",
    },
    {
      id: 2,
      src: "/static/displayer 2.png",
    },
    {
      id: 3,
      src: "/static/displayer3.png",
    },
  ];

  React.useEffect(() => {
    const sliderWidth =
      document.getElementById("slider-image-size")?.offsetWidth;
    console.log(sliderWidth);
  }, []);

  return (
    <Swiper
      loop={true}
      autoplay={true}
      style={{ height: "35rem" }}
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={100}
      initialSlide={0}
      slidesPerView={2}
      centeredSlides={true}
      speed={1000}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {images.map((image, index) => (
        <SwiperSlide
          id={"slider-image-size"}
          className={"block rounded-xl"}
          key={index}
        >
          <Image
            alt={"Product Image"}
            src={image.src}
            className={"rounded-xl"}
            layout={"fill"}
            priority
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
