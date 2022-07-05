import React from "react";
import "./UpComingCarousel.css";
import { Carousel } from "3d-react-carousal";
import woodfloor from "../asset/wood-floor-m-380x254.jpg";
import tiles from "../asset/tiles-floor-m-380x254.jpg";
import carpet from "../asset/carpet-floor-m-380x254.jpg";
import vinyl from "../asset/vinyl-decking-380x254.jpg";
import laminate from "../asset/laminate-m-380x254.jpg";
import Hardwood from "../asset/hard-wood-floor-m-380x254.jpg";
export default function UpComingCarousel() {
  let slides = [
    <div className="UpCarousel-Slide">
      <img src={woodfloor} alt="" />
      <span>22% 0ff</span>
    </div>,
    <div className="UpCarousel-Slide">
      <img src={tiles} alt="" />
      <span>22% 0ff</span>
    </div>,
    <div className="UpCarousel-Slide">
      <img src={vinyl} alt="" />
      <span>22% 0ff</span>
    </div>,
  ];
  return (
    <div className="UpComingCarousel-Carousel">
      <div className="UpComingCarousel">
        <Carousel slides={slides}  />
      </div>
    </div>
  );
}
