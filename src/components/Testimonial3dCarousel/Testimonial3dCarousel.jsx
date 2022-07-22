import React, { useEffect } from "react";
import "./Testimonial3dCarousel.css";
import { Carousel } from "3d-react-carousal";
import PlaceHolder from "../asset/placeholderimg.jpg";

export default function Testimonial3dCarousel() {
	useEffect(() => {
		const interval = setInterval(() => {
			const arrow = document.querySelectorAll(
				"Testimonial3dCarousel .react-3d-carousel .slider-container .slider-right i"
			);
			console.log(arrow);
		}, []);
		return clearInterval(interval);
	}, []);
	let slides = [
		<div className="Testimonial3dCarousel-Slide">
			<div className="Mark">
				<span className="span-comma">
					<b>"</b>
				</span>
			</div>

			<div className="Testimonial-Slide-Content">
				<p>
					One of the best one stop shop for all your tiles and decor needs. Be it office, house, or penthouse. The staff is professional, well aware of the trends and is pretty helpful with exactly what you need. 
				</p>
				<div className="Testimonial-Slide-Profile-Row">
					<div className="Testimonials-Profile-Image">
						<img src={PlaceHolder} alt="" />
					</div>
					<div className="Testimonials-Profile-Content-Col">
						<h4 className="my-0">Akash Singh</h4>
						<h5 className="my-0">UI/UX Designer</h5>
					</div>
				</div>
			</div>
		</div>,
		<div className="Testimonial3dCarousel-Slide">
			<div className="Mark">
				<span className="span-comma">
					<b>"</b>
				</span>
			</div>
			<div className="Testimonial-Slide-Content">
				<p>
					Ritz Floor and Decor helps you with the exact flooring and decor needs. They have a wide range of tiles and is budget friendly. Their staff is amazing and well versed with different decor styles, plus the quality of the material is high-grade. 
				</p>
				<div className="Testimonial-Slide-Profile-Row">
					<div className="Testimonials-Profile-Image">
						<img src={PlaceHolder} alt="" />
					</div>
					<div className="Testimonials-Profile-Content-Col">
						<h4 className="my-0">Akash Singh</h4>
						<h5 className="my-0">UI/UX Designer</h5>
					</div>
				</div>
			</div>
		</div>,
		<div className="Testimonial3dCarousel-Slide">
			<div className="Mark">
				<span className="span-comma">
					<b>"</b>
				</span>
			</div>
			<div className="Testimonial-Slide-Content">
				<p>
					I came here looking for flooring for my garage, I was so taken aback by the material and the amazing quality, I ended up buying new flooring for my living room.
				</p>
				<div className="Testimonial-Slide-Profile-Row">
					<div className="Testimonials-Profile-Image">
						<img src={PlaceHolder} alt="" />
					</div>
					<div className="Testimonials-Profile-Content-Col">
						<h4 className="my-0">Akash Singh</h4>
						<h5 className="my-0">UI/UX Designer</h5>
					</div>
				</div>
			</div>
		</div>,
	];
	return (
		<div className="Testimonial3dCarousel-Container">
			<div className="Testimonial3dCarousel">
				<Carousel slides={slides} />
			</div>
		</div>
	);
}
