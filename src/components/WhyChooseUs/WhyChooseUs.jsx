import React from "react";
import "./WhyChooseUs.css";
import BannerImage from "../asset/BannerImage041.png";
import { LocalPhone, CheckCircle } from "@mui/icons-material";
import Vector from "../asset/Kerikature.png";
import Laminate from "../asset/laminate-m-380x254.jpg";
import LivingRoom from "../asset/livingroom.jpg";
import bedroom from "../asset/bedroom.jpg";
import dineroom from "../asset/dineroom.jpg";
import officeroom from "../asset/officeroom.jpg";
import balcony from "../asset/balcony.jpg";
import Cat from "../imageCat/Cat";
export default function WhyChooseUs() {
	return (
		<>
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
							Email : ritzfloor@gmail.com
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
						<p className="my-0">
							Our Vision
							<br />
							Winning over the world One room at a time
						</p>

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
						<p className="my-0 features-p">
							Introduce that personal touch, a reflection of your distinct taste
							in every inch of your floor tile renovation. Made with special
							care, keeping convenience and elegance in mind, Welspun Flooring
							offers the best flooring solutions with a wide range of floor
							tiles, that are a perfect fit for every individual space in your
							home
						</p>
					</div>
					<Cat />
				</div>
			</div>
			<OurWorks />
		</>
	);
}
const OurWorks = () => {
	return (
		<div className="work-container">
			<div className="work-leftside">
				<h1>Our Works</h1>
				<p>
					You can entirely change the look of your house's interior with our
					home décor ideas and home improvement tips. Make a stylish statement
					by giving your home's interiors a complete facelift. Look through our
					gallery for some great inspiration and to learn why flooring is so
					important in every home.
				</p>
			</div>
			<div className="work-rightside">
				<ImagePyramid1 />
				<ImagePyramid2 />
			</div>
		</div>
	);
};
const ImagePyramid1 = () => {
	return (
		<div className="pyramid-container">
			<div className="item1"></div>
			<div className="item2"></div>
			<div className="item3"></div>
			<div className="item4"></div>
			<div className="item5"></div>
			<div className="item6"></div>
			<div className="item7"></div>
			<div className="item8"></div>
		</div>
	);
};
const ImagePyramid2 = () => {
	return (
		<div className="pyramid-container2">
			<div className="item11"></div>
			<div className="item22"></div>
			<div className="item33"></div>
			<div className="item44"></div>
			<div className="item55"></div>
			<div className="item66"></div>
			<div className="item77"></div>
			<div className="item88"></div>
		</div>
	);
};
