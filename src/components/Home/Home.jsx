import React from "react";
import "./Home.css";
import BannerImage from "../asset/BannerImage.png";
import { LocalPhone } from "@mui/icons-material";
import ProductCat from "../Product-Carousel/ProductCat";
import { Link } from "react-router-dom";
import laminate from "../asset/laminate-m-380x254.jpg";
import TestimonialCarousel from "../Home-Testimonial-Carousel/TestimonialCarousel";
import Vector from "../asset/Kerikature.png";
export default function Home() {
  return (
    <div className="Home-Container">
      <div className="Banner">
        <img src={BannerImage} alt="" />
        <div className="Banner-Contact-details">
          <h1>Ritz Floor and Decor</h1>
          <h3>Give an exotic look to your home</h3>
          <h2>45690 YALE RD, Chilliwack, BC, Canada V2P2N3</h2>
          <div className="Btn-row">
            <span>
              <LocalPhone />
            </span>
            <a href="tel:+ 604-702-2233">+ 604-702-2233</a>
          </div>
          <a
            href="mailto:ritzfloor@gmail.com"
            className="Banner-Contact-details-Email"
          >
            Email:ritzfloor@gmail.com
          </a>
        </div>
      </div>
      <div className="Products">
        <ProductCat />
      </div>
      <div className="Why-choose-us">
        <div className="Why-choose-us-content">
          <h1>Why Choose Us</h1>
          <h4>
            When it comes to creating a beautiful space, flooring plays a
            decisive role. We invite you to have a look at the stunning Span
            floor installations across the country.
          </h4>
          <Link to="/Aboutus" className="Read-more">
            Read More
          </Link>
        </div>
        <div className="Why-choose-us-Image">
          <img src={laminate} alt="" />
        </div>
        <div className="Home-CariKature">
          <img src={Vector} alt="" />
        </div>
      </div>
      <div className="Testimonial-Carousel">
        <TestimonialCarousel />
      </div>
    </div>
  );
}
