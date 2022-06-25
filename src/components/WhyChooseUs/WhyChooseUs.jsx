import React from "react";
import "./WhyChooseUs.css";
import BannerImage from "../asset/BannerImage041.png";
import { LocalPhone, CheckCircle } from "@mui/icons-material";
import Vector from "../asset/Kerikature.png";
import Laminate from "../asset/laminate-m-380x254.jpg";
import LivingRoom from "../asset/livingroom.jpg";
import bedroom from '../asset/bedroom.jpg'
import dineroom from '../asset/dineroom.jpg'
import officeroom from '../asset/officeroom.jpg'
import balcony from '../asset/balcony.jpg'
export default function WhyChooseUs() {
  return (
    <div className="WhyChooseUs-Container">
      <div className="WhyChooseUs-Banner">
        <img src={BannerImage} alt="" />
        <div className="WhyChooseUs-Banner-Contact-details">
          <h1>Ritz Floor and Decor</h1>
          <h3>Give an exotic look to your home</h3>
          <h2>45690 YALE RD, Chilliwack, BC, Canada V2P2N3</h2>
          <div className="WhyChooseUs-Btn-row">
            <span>
              <LocalPhone />
            </span>
            <a href="tel:+ 604-702-2233">+ 604-702-2233</a>
          </div>
          <a
            href="mailto:ritzfloor@gmail.com"
            className="WhyChooseUs-Banner-Contact-details-Email"
          >
            Email:ritzfloor@gmail.com
          </a>
        </div>
        <div className="WhyChooseUs-CariKature">
          <img src={Vector} alt="" />
        </div>
      </div>
      <div className="AboutUs-Row">
        <div className="AboutUs-Content-Col">
          <div className="AboutUs-Header">
            <h1 className="my-0">About Us</h1>
          </div>
          <p className="my-0">Our Vision</p>
          <p className="my-0">Winning over the world One room at a time</p>
          <div className="AboutUs-Content-row">
            <CheckCircle /> <p>CREDENTIALS</p>
          </div>
          <div className="AboutUs-Content-row">
            <CheckCircle /> <p>CUSTOMIZATION</p>
          </div>
          <div className="AboutUs-Content-row">
            <CheckCircle /> <p>EXPERIENCE</p>
          </div>
          <div className="AboutUs-Content-row">
            <CheckCircle /> <p>ACCESSORIES</p>
          </div>
          <div className="AboutUs-Content-row">
            <CheckCircle /> <p>SPECIALIZATION</p>
          </div>
          <div className="AboutUs-Content-row">
            <CheckCircle /> <p>MAINTENANCE GUIDANCE</p>
          </div>
        </div>
        <div className="AboutUs-Image">
          <img src={Laminate} alt="" />
        </div>
      </div>
      <div className="AboutUs-Features-Container">
        <div className="Features-Content">
          <h1 className="my-0">Features</h1>
          <p className="my-0">
            Introduce that personal touch, a reflection of your distinct taste
            in every inch of your floor tile renovation. Made with special care,
            keeping convenience and elegance in mind, Welspun Flooring offers
            the best flooring solutions with a wide range of floor tiles, that
            are a perfect fit for every individual space in your home
          </p>
        </div>
        <div className="Features-Image-Catalogue">
          <div className="Features-Image">
            <img src={LivingRoom} alt="" />
            <div className="Feature-image-Overlay-img">
              <h3>Living Room</h3>
            </div>
            <div className="OverLay">
            </div>
          </div>
          <div className="Features-Image">
            <img src={bedroom} alt="" />
            <div className="Feature-image-Overlay-img">
              <h3>Bed Room</h3>
            </div>
            <div className="OverLay">

            </div>
          </div>
          <div className="Features-Image">
            <img src={officeroom} alt="" />
            <div className="Feature-image-Overlay-img">
              <h3>Office Room</h3>
            </div>
            <div className="OverLay">

            </div>
          </div>
          <div className="Features-Image">
            <img src={dineroom} alt="" />
            <div className="Feature-image-Overlay-img">
              <h3>Dining Room</h3>
            </div>
            <div className="OverLay">

            </div>
          </div>
          <div className="Features-Image">
            <img src={balcony} alt="" />
            <div className="Feature-image-Overlay-img">
              <h3>Balcony</h3>
            </div>
            <div className="OverLay">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
