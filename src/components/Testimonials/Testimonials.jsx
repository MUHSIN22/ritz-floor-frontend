import React from "react";
import BannerImage from "../asset/BannerImage05.png";
import { LocalPhone } from "@mui/icons-material";
import Vector from "../asset/Kerikature.png";
import SpringCarousel from "../SpringCarousel/SpringCarousel";
import "./Testimonials.css";
import Testimonial3dCarousel from "../Testimonial3dCarousel/Testimonial3dCarousel";
import VideoTestimonials from "../VideoTestimonials/VideoTestimonials";
export default function Testimonials() {
  return (
    <div className="Testimonials-Container">
      <div className="Testimonials-Banner">
        <img src={BannerImage} alt="" />
        <div className="Testimonials-Banner-Contact-details">
          <h1>Ritz Floor and Decor</h1>
          <h3>Give an exotic look to your home</h3>
          <h2>45690 YALE RD, Chilliwack, BC, Canada V2P2N3</h2>
          <div className="Testimonials-Btn-row">
            <span>
              <LocalPhone />
            </span>
            <a href="tel:+ 604-702-2233">+ 604-702-2233</a>
          </div>
          <a
            href="mailto:ritzfloor@gmail.com"
            className="Testimonials-Banner-Contact-details-Email"
          >
            Email:ritzfloor@gmail.com
          </a>
        </div>
        <div className="Testimonials-CariKature">
          <img src={Vector} alt="" />
        </div>
      </div>
      <div className="Spring3d">
        <div className="Spring3d-He">
          <h1>What Client Says</h1>
        </div>
        <SpringCarousel />
      </div>

      <div className="Testimonials-Carousel02">
        <div className="Testimonials-Carousel02-Header">
          <h1>Testimonial</h1>
        </div>
        <Testimonial3dCarousel />
      </div>
      <div className="VideoTestimonials-Carousel03">
        <div className="VideoTestimonials-Carousel03-Header">
          <h1>Video Testimonials</h1>
        </div>
        <VideoTestimonials />
      </div>
    </div>
  );
}
