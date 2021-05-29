import React from "react";
import "./Home.css";
import Product from "./Product";
import { Carousel } from "react-responsive-carousel";
import CarouselContainer from "./CarouselContainer";

function Home() {
  return (
    <div className="home">
      {/* Main banner */}
      <div className="home__container">
        {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        /> */}

        <main className="banner_container">
          <CarouselContainer />
        </main>

        {/* Various Product rows */}

        <div className="home__row">
          <Product
            id="12321341"
            title="Shoe Dog: A Memoir by the Creator of NIKE by Phil Knight"
            price={29.9}
            image="https://m.media-amazon.com/images/I/717LHuYp7uL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />

          <Product
            id="12321341"
            title="Steve Jobs: A Biography by Walter Isaacson | Hardcover"
            price={16.36}
            image="https://m.media-amazon.com/images/I/51S2iJN3DYL.jpg"
            rating={4}
          />

          <Product
            id="12321341"
            title="Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future Paperback – Illustrated"
            price={12.17}
            image="https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL.jpg"
            rating={4}
          />

          <Product
            id="12321341"
            title="The Everything Store: Jeff Bezos and the Age of Amazon Hardcover – Large Print"
            price={24.37}
            image="https://images-na.ssl-images-amazon.com/images/I/51pTt7Xz1zL._SX345_BO1,204,203,200_.jpg"
            rating={4}
          />

          <Product
            id="12321341"
            title="Sam Walton: Made in America by John Huey, Sam Walton ,"
            price={13.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51oz8rdSl+L._SX303_BO1,204,203,200_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="23445930"
            title="iPad Pro 2020 11 inch Wi-Fi Only  128 GB Space Grey+Apple Pencil (2nd Generation)"
            price={799}
            image="https://m.media-amazon.com/images/I/81FH2j7EnJL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />

          <Product
            id="23445756"
            title="Apple MacBook Pro 16 with Touch Bar, 9th-Gen 8-Core Intel i9 2.4GHz, AMD Radeon Pro 5500M 8GB, Space Gray"
            price={2589}
            image="https://m.media-amazon.com/images/I/71BMVOs2xML._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />

          <Product
            id="2344576"
            title="Apple iPhone 11 Pro Max [64GB, Midnight Green] + Carrier Subscription [Cricket Wireless]"
            price={799}
            image="https://m.media-amazon.com/images/I/71xn9bCRfhL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />

          <Product
            id="3254354345"
            title="
            Apple Watch Series 3 (GPS, 42mm) - Silver Aluminum Case with White Sport Band"
            price={489}
            image="https://m.media-amazon.com/images/I/71gsjKxyfjL._AC_UY327_FMwebp_QL65_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="49538094"
            title="Fila Men's Kelpe Hiking Vulc 13 MID Plus 2 Walking Shoe, White Navy red-125"
            price={69}
            image="https://images-na.ssl-images-amazon.com/images/I/81iinDNoMbL._UL1500_.jpg"
            rating={4}
          />
          <Product
            id="90829332"
            title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model"
            price={1199}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={5}
          />

          <Product
            id="4903850"
            title="KUCCU Stand Mixer, 8.5 Qt 660W, 6-Speed Tilt-Head Food Dough Mixer, Electric Kitchen Mixer with Dough Hook, Flat Beater & Wire Whisk, Mixing Bowl (8.5-QT, Black)"
            price={169.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
