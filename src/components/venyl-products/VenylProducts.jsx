import React from "react";
import BannerImage from "../asset/BannerImage.png";
import { LocalPhone } from "@mui/icons-material";
import mainImg from "../asset/image 12.svg";
import "./Venylproducts.css";
import Vector from "../asset/Kerikature.png";
import wall1 from "../asset/image 13.svg";
export const VenylProducts = () => {
	return (
		<div>
			<div className="Banner">
				<img src={mainImg} alt="" className="venyl-main-img" />
				<div className="Banner-Contact-details">
					<h1>Ritz Floor and Decor</h1>
					<h3>Give an exotic look to your home</h3>
					<h2>45690 YALE RD, Chilliwack, BC, Canada V2P2N3</h2>
					<div className="Btn-row">
						<span>
							<LocalPhone />
						</span>
						<a href="tel:+ 604-702-2233">+ 604-702-2233</a>
					</div>
					<a
						href="mailto:ritzfloor@gmail.com"
						className="Banner-Contact-details-Email"
					>
						Email:ritzfloor@gmail.com
					</a>
				</div>
				<div className="Home-CariKature">
					<img src={Vector} alt="" />
				</div>
			</div>
			<h1 className="venyl-h1">Venyl Products</h1>
			<div className="venyl-card-container">
				<div className="venyl-card">
					<img src={wall1} className="wall-img" />
					<h2>Sea Oak Beige</h2>
					<h3>Vinyl-Alpha Vinyl-Medium</h3>
				</div>
				<div className="venyl-card">
					<img src={wall1} className="wall-img" />
					<h2>Sea Oak Beige</h2>
					<h3>Vinyl-Alpha Vinyl-Medium</h3>
				</div>
				<div className="venyl-card">
					<img src={wall1} className="wall-img" />

					<h2>Sea Oak Beige</h2>
					<h3>Vinyl-Alpha Vinyl-Medium</h3>
					<div>New</div>
				</div>
				<div className="venyl-card">
					<img src={wall1} className="wall-img" />
					<h2>Sea Oak Beige</h2>
					<h3>Vinyl-Alpha Vinyl-Medium</h3>
					<div>New</div>
				</div>
				<div className="venyl-card">
					<img src={wall1} className="wall-img" />
					<h2>Sea Oak Beige</h2>
					<h3>Vinyl-Alpha Vinyl-Medium</h3>
				</div>
				<div className="venyl-card">
					<img src={wall1} className="wall-img" />
					<h2>Sea Oak Beige</h2>
					<h3>Vinyl-Alpha Vinyl-Medium</h3>
				</div>
			</div>
		</div>
	);
};
export default VenylProducts;
