import React from "react";
import "./OffersCarousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import vinyl03 from "../asset/vinyl03.jpg";
export default function OffersCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="OffersCarousel-Container">
      <div className="Offers">
        {" "}
        <Carousel responsive={responsive}>
          <div className="Offer-Card">
            <img src={vinyl03} alt="" />
            <span>20% off</span>
            <div className="Offer-Card-description">
              <h5>Wood logo</h5>
            </div>
          </div>
          <div className="Offer-Card">
            <img src={vinyl03} alt="" />
            <span>20% off</span>
            <div className="Offer-Card-description">
              <h5>Wood logo</h5>
            </div>
          </div>
          <div className="Offer-Card">
            <img src={vinyl03} alt="" />
            <span>20% off</span>
            <div className="Offer-Card-description">
              <h5>Wood logo</h5>
            </div>
          </div>
          <div className="Offer-Card">
            <img src={vinyl03} alt="" />
            <span>20% off</span>
            <div className="Offer-Card-description">
              <h5>Wood logo</h5>
            </div>
          </div>
          <div className="Offer-Card">
            <img src={vinyl03} alt="" />
            <span>20% off</span>
            <div className="Offer-Card-description">
              <h5>Wood logo</h5>
            </div>
          </div>
          <div className="Offer-Card">
            <img src={vinyl03} alt="" />
            <span>20% off</span>
            <div className="Offer-Card-description">
              <h5>Wood logo</h5>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
