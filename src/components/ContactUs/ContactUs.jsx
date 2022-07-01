import React from "react";
import "./ContactUs.css";
import BannerImage03 from "../asset/BannerImage03.png";
import { LocalPhone, Scale } from "@mui/icons-material";
import ContactUsImage from "../asset/ContactUs-image.jpg";
import { FmdGood } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Vector from "../asset/Kerikature.png";
export default function ContactUs() {
	return (
		<div className="ContactUs-Container">
			<div className="ContactUs-Banner">
				<img src={BannerImage03} alt="" />
				<div className="ContactUs-Banner-Contact-details">
					<h1>Ritz Floor and Decor</h1>
					<h3>Give an exotic look to your home</h3>
					<h2>45690 YALE RD, Chilliwack, BC, Canada V2P2N3</h2>
					<div className="ContactUs-Btn-row">
						<span>
							<LocalPhone />
						</span>
						<a href="tel:+ 604-702-2233">+ 604-702-2233</a>
					</div>
					<a
						href="mailto:ritzfloor@gmail.com"
						className="ContactUs-Banner-Contact-details-Email"
					>
						Email : ritzfloor@gmail.com
					</a>
				</div>
				<div className="ContactUs-CariKature">
					<img src={Vector} alt="" />
				</div>
			</div>
			<div className="ContactUs-Block">
				<div className="Map-Div">
					<div className="Map-row">
						<img src={ContactUsImage} alt="" />
					</div>
					<div className="Map-row">
						<FmdGood style={{ transform: "scale(1.4)" }} />
						<p className="map-p">45690 YALE RD, CHILLIWACK, BC V2P 2N3</p>
					</div>
					<div className="Map-row">
						<iframe
							title="Map"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8047.789390793396!2d-121.96126358415081!3d49.15933855087769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54843f6181ae28cb%3A0xa1c9d8441b03984c!2sRitz%20Floor%20%26%20Decor!5e0!3m2!1sen!2sin!4v1655116671512!5m2!1sen!2sin"
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
				<div className="ContactUs-Form">
					<div className="ContactUs-header">
						<h1>Get In Touch</h1>
					</div>
					<form>
						<div className="Form-col">
							<label htmlFor="Name">Name</label>
							<input type="text" name="Name" />
						</div>
						<div className="Form-col">
							<label htmlFor="Email">Email</label>
							<input type="email" name="Name" />
						</div>
						<div className="Form-col">
							<label htmlFor="Name">Message</label>
							<textarea name="Message" id="" cols="80" rows="10"></textarea>
						</div>
					</form>
					<Link to="/">Submit</Link>
				</div>
			</div>
		</div>
	);
}
