import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function CarouselContainer() {
  return (
    <div className="carousel__container">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicator={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <img loading="lazy" src="https://links.papareact.com/6ff" />
        </div>

        <div>
          <img loading="lazy" src="https://links.papareact.com/gi1" />
        </div>

        <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselContainer;
