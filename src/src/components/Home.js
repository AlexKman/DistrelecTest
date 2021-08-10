import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../data.json";
import "./Home.scss";

export default function Home() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <h1>Related Products</h1>
      <Slider {...settings}>
        {data.carouselData.map((obj) => {
          return (
            <div>
              {" "}
              <img
                className="carousel-image"
                src={obj.productImageUrl}
                alt={obj.code}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
