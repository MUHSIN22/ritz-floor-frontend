import React, { useEffect, useState } from "react";
import "./UpComingCarousel.css";
import { Carousel } from "3d-react-carousal";
import woodfloor from "../asset/wood-floor-m-380x254.jpg";
import tiles from "../asset/tiles-floor-m-380x254.jpg";
import carpet from "../asset/carpet-floor-m-380x254.jpg";
import vinyl from "../asset/vinyl-decking-380x254.jpg";
import laminate from "../asset/laminate-m-380x254.jpg";
import Hardwood from "../asset/hard-wood-floor-m-380x254.jpg";
import PageDataFetcher from "../../APIServices/PageDataFetcher";
import config from "../../Constants/config";
export default function UpComingCarousel() {
  const [slides,setSlides] = useState([])
  useEffect(() => {
    PageDataFetcher.getSectionItems('specialoffers', 3)
			.then(res => {
				console.log(res);
        res.forEach((item) => {
          setSlides((prev) => [
            ...prev,
            <div className="UpCarousel-Slide">
              <img src={config.backendURL+ item.img} alt="" />
              <span>{item.discount}% 0ff</span>
            </div>
          ])
        })
			})
  },[])
  return (
    <div className="UpComingCarousel-Carousel">
      <div className="UpComingCarousel">
        {slides[0]&& <Carousel slides={slides}  />}
      </div>
    </div>
  );
}
