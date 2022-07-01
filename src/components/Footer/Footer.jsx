import {
	LocalPhone,
	Mail,
	FmdGood,
	FacebookRounded,
	Twitter,
	Instagram,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
	return (
		<div className="Footer-Container">
			<div className="Footer-Row">
				<div className="Footer-Map">
					<iframe
						title="Footer-Map"
						src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d65324392.06077993!2d72.87105593771504!3d2.1211566083918143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d21.234071999999998!2d81.6802046!4m5!1s0x54843f638f55b411%3A0xbc91eae6b2352e0e!2s45690%20Yale%20Rd%2C%20Chilliwack%2C%20BC%20V2P%202N3%2C%20Canada!3m2!1d49.157502!2d-121.9584125!5e0!3m2!1sen!2sin!4v1655111045722!5m2!1sen!2sin"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
				<div className="Get-in-Touch">
					<h2>Get In Touch</h2>
					<div className="Get-in-touch-row">
						<LocalPhone
							className="small-icons"
							style={{ height: "30px", width: "30px" }}
						/>
						<a href="tel:+1 604 780 5352">+1 604 780 5352</a>
					</div>
					<div className="Get-in-touch-row">
						<Mail style={{ height: "30px", width: "30px" }} />
						<a href="mailto:RITZFLOOR@GMAIL.COM">RITZFLOOR@GMAIL.COM</a>
					</div>
					<div className="Get-in-touch-row">
						<FmdGood style={{ height: "30px", width: "30px" }} />
						<div>
							<p>45690 YALE RD,</p>
							<p>CHILLIWACK, BC V2P 2N3</p>
						</div>
					</div>

					<div className="Footer-Social-media">
						<a href="https://www.facebook.com/RitzFloorDecor/">
							<FacebookRounded />
						</a>

						<a href="https://www.instagram.com/ritzfloor/?igshid=YmMyMTA2M2Y%3D">
							<Instagram />
						</a>
					</div>
				</div>
				<div className="News-Letter">
					<h2>Newsletter</h2>
					<h3>Signup to Newsletter</h3>
					<input name="Email" id="01" placeholder="Email" />
					<Link to="/">Submit</Link>
				</div>
			</div>
		</div>
	);
}
