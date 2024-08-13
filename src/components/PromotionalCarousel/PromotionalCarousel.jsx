import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PromotionalCarousel.css";

const PromotionalCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="carousel-container z-0">
      <div className="promotional-carousel">
        <Slider {...settings}>
          <div>
            <img
              src="/promotions/promo1.jpg"
              alt="Promotion 1"
              className="w-full object-contain md:h-[400px]"
            />
          </div>
          <div>
            <img
              src="/promotions/promo2.webp"
              alt="Promotion 2"
              className="w-full object-contain md:h-[400px]"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default PromotionalCarousel;
