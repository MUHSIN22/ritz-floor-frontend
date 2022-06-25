import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuid } from "uuid";
import { config } from "react-spring";
import { ArrowLeft, ArrowRight } from "react-feather";
import "./SpringCarousel.css";
import Placeholder from "../asset/placeholderimg.jpg";
import Aks from "../asset/Aks.png";
export default class SpringCarousel extends Component {
  id = uuid();
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
  };

  slides = [
    {
      key: uuid(),
      content: (
        <div className="Spring-3d-Slide">
          <div className="Testimonial-Profile-pic">
            <img src={Aks} alt="" />
          </div>
          <div className="Testimonial-Description">
            <h4>Akash Singh</h4>
            <p>
              The Ritz floor is the leader of floor installation and repair in
              the country sed diam nonumy eirmod tempor invidunt ut labor and
              efficient strategy.
            </p>
          </div>
        </div>
      ),
    },
    {
      key: uuid(),
      content: (
        <div className="Spring-3d-Slide">
          <div className="Testimonial-Profile-pic">
            <img src={Placeholder} alt="" />
          </div>
          <div className="Testimonial-Description">
            <h4>Akash Singh</h4>
            <p>
              The Ritz floor is the leader of floor installation and repair in
              the country sed diam nonumy eirmod tempor invidunt ut labor and
              efficient strategy.
            </p>
          </div>
        </div>
      ),
    },
    {
      key: uuid(),
      content: (
        <div className="Spring-3d-Slide">
          <div className="Testimonial-Profile-pic">
            <img src={Placeholder} alt="" />
          </div>
          <div className="Testimonial-Description">
            <h4>Akash Singh</h4>
            <p>
              The Ritz floor is the leader of floor installation and repair in
              the country sed diam nonumy eirmod tempor invidunt ut labor and
              efficient strategy.
            </p>
          </div>
        </div>
      ),
    },
  ];

  render() {
    return (
      <div
        style={{
          width: "50%",
          height: "500px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          animationConfig={this.state.config}
        />
        <div className="Spring-3d-Carousel">
          <div className="Spring-3d-carousel-btn-row">
            <button
              onClick={() => {
                this.setState({ goToSlide: this.state.goToSlide - 1 });
              }}
            >
              <ArrowLeft />
            </button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button
              onClick={() => {
                this.setState({ goToSlide: this.state.goToSlide + 1 });
              }}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
