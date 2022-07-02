import React from "react";
import BannerImage from "../asset/BannerImage03.png";
import { LocalPhone } from "@mui/icons-material";
import Vector from "../asset/Kerikature.png";
import SpringCarousel from "../SpringCarousel/SpringCarousel";
import "./Testimonials.css";
import Testimonial3dCarousel from "../Testimonial3dCarousel/Testimonial3dCarousel";
import VideoTestimonials from "../VideoTestimonials/VideoTestimonials";
import "../Testimonial3dCarousel/Testimonial3dCarousel.css";
import { Carousel } from "3d-react-carousal";
import PlaceHolder from "../asset/placeholderimg.jpg";
import image1 from "../asset/videoslideimages/Rectangle 54 (1).svg";
import image2 from "../asset/videoslideimages/Rectangle 55 (1).svg";
import image3 from "../asset/videoslideimages/Rectangle 56 (1).svg";
import image4 from "../asset/Vector (8).svg";
import CustomClientCrousel from "../VanillaVideo/customClientCrousel";

import ReactPlayer from "react-player";
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
						Email : ritzfloor@gmail.com
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
				<CustomClientCrousel />
			</div>

			<div className="Testimonials-Carousel02">
				<div className="Testimonials-Carousel02-Header">
					<h1>Testimonial</h1>
				</div>
				{typeof window !== "undefined" && <Testimonial3dCarousel />}
			</div>
			<div className="VideoTestimonials-Carousel03">
				<div className="VideoTestimonials-Carousel03-Header">
					<h1>Video Testimonials</h1>
					<VideoCrousel />
				</div>
			</div>
		</div>
	);
}

const VideoCrousel = () => {
	let slides = [
		<div>
			<ReactPlayer
				url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
				width="600px"
				height="500px"
			/>
		</div>,
		<div>
			<ReactPlayer
				url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
				width="600px"
				height="500px"
			/>
		</div>,
		<div>
			<ReactPlayer
				url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
				width="600px"
				height="500px"
			/>
		</div>,
	];
	return (
		<div className="Testimonial3dCarousel-Container">
			<div className="Testimonial3dCarousel">
				{typeof window !== "undefined" && <Carousel slides={slides} />}
			</div>
		</div>
	);
};
