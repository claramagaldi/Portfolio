import React from "react";
import "./testimonials.css";
import TestimonialsItem from "../testimonialsItem/TestimonialsItem";
import testimonialsItemsList from "../../assets/testimonials/testimonialsItemsList";

// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h4>Review from clients</h4>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonialsItemsList.map((item) => (
          <SwiperSlide>
            <TestimonialsItem
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
