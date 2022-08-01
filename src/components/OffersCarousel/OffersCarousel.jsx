import React, { useEffect, useState } from "react";
import "./OffersCarousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import vinyl03 from "../asset/vinyl03.jpg";
import PageDataFetcher from "../../APIServices/PageDataFetcher";
import config from "../../Constants/config";
export default function OffersCarousel() {
  const [firstCarousel, setFirstCarousel] = useState([]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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

  useEffect(() => {
    PageDataFetcher.getSectionItems("specialoffers", 2).then((res) => {
      console.log(res);
      setFirstCarousel(res);
    });
  }, []);

  return (
    <div className="OffersCarousel-Container">
      <div className="Offers">
        {" "}
        {firstCarousel && firstCarousel[0] && (
          <Carousel
            responsive={responsive}
            showDots={true}
            renderDotsOutside={true}
            autoPlay={true}
            infinite={true}
            dotListClass="custom-dot-list-style"
          >
            {firstCarousel.map((item, index) => (
              <div className="Offer-Card" key={index}>
                <img src={config.backendURL + item.img} alt="" />
                <span>{item.discount}% off</span>
                {/* <div className="Offer-Card-description">
                  <h5>{item.title}</h5>
                </div> */}
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
}
