import React, { useEffect, useState } from "react";
import BannerImage from "../asset/BannerImage08.webp";
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
import MainBanner from "../Banner/MainBanner";
import HomeTestimonialCarousel from "../HomeTestimonialCarousel/HomeTestimonialCarousel";
import TestimonialSlider from "../Utils/TestimonialSlider/TestimonialSlider";
import axiosInstance from "../../Axios/axiosInstance";
import { toast } from "react-toastify";
import PageDataFetcher from "../../APIServices/PageDataFetcher";
import {AiOutlineCaretLeft, AiOutlineCaretRight} from 'react-icons/ai'

export default function Testimonials() {
	const [textTestimonials,setTextTestimonials] = useState([])
	const [nav,setNav] = useState(null)
	const [toggler,setToggler] = useState(false)
	useEffect(() => {
		window.scrollTo(0,0);
		axiosInstance.get('/crousels/get-content/testimonials/section-2')
            .then(res => {
                setTextTestimonials(res.data.item)
            }).catch(err => {
                toast.error("Please refresh the page!")
            })
	},[])
	return (
		<div className="Testimonials-Container">
			<MainBanner background={BannerImage}/>
			{/* <div className="Spring3d">
				<div className="Spring3d-He">
					<h1>What Client Says</h1>
				</div>
				<HomeTestimonialCarousel />
			</div> */}

			<div className="testimonial-second-section">
				<AiOutlineCaretLeft  onClick={() => {setNav(-1); setToggler(!toggler)}} className="slider-navigation-icon navigation-slider-left" />
				<AiOutlineCaretRight onClick={() => {setNav(1); setToggler(!toggler)}} className="slider-navigation-icon navigation-slider-right"  />
				<h1>Testimonial</h1>
				<div className="testimonial-slider-holder">
					<TestimonialSlider slideItems={textTestimonials} navDir={nav} toggler={toggler}/>
				</div>
			</div>

			{/* <div className="Testimonials-Carousel02">
				<div className="Testimonials-Carousel02-Header">
					<h1>Testimonial</h1>
				</div>
				{typeof window !== "undefined" && <Testimonial3dCarousel />}
			</div> */}
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
	const [videoSlides,setVideoSlides] = useState([])
	useEffect(() => {
		PageDataFetcher.getSectionItems('testimonials',3)
		.then(res => {
			console.log(res)
			let slides = [];
			res.forEach(item => {
				slides.push(
					<div>
						<ReactPlayer
							url={item.url}
							className="react-player"
						/>
					</div>
				)
			})
			setVideoSlides(slides)
		})
	},[])
	return (
		<div className="Testimonial3dCarousel-Container">
			<div className="Testimonial3dCarousel">
				{typeof window !== "undefined" && <Carousel slides={videoSlides} />}
			</div>
		</div>
	);
};
