import React, { useEffect, useState } from "react";
import "./UpComingCarousel.css";
import { Carousel } from "3d-react-carousal";
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
