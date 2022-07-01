import React from "react";
import BannerImage from "../asset/BannerImage.png";
import { LocalPhone } from "@mui/icons-material";
import mainImg from "../asset/image 12.svg";
import "./Venylproducts.css";
import Vector from "../asset/Kerikature.png";
import tiles1 from "../asset/TILES/IMG_20220312_103032~2.jpg";
import tiles2 from "../asset/TILES/IMG_20220312_103150.jpg";
import tiles3 from "../asset/TILES/pexels-jean-van-der-meulen-1599790.jpg";
import tiles4 from "../asset/TILES/pexels-vecislavas-popa-3741317.jpg";
//vinyl-images
import vinyl1 from "../asset/VINYL/1.jpg";
import vinyl2 from "../asset/VINYL/2.jpg";
import vinyl3 from "../asset/VINYL/1646691396881.jpg";
import vinyl4 from "../asset/VINYL/1649952640707.jpg";
import vinyl5 from "../asset/VINYL/1645570487050.jpg";
import vinyl6 from "../asset/VINYL/pexels-curtis-adams-4832510.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, ussParams } from "react-router-dom";

export const VenylProducts = () => {
	const param = useParams();
	console.log(param);
	const list = [
		{
			id: 1,
			title: "Vinyl Flooring",
			subtitle: "Vinyl Products",
			description:
				"Vinyl is waterproof,Durable,Versatile,Affordable and able to hold heavy fool traffic.While luxury vinyl has similarities to laminate,there are significant differences in the construction of these products that set them apart from one another. Vinyl Plank Flooring is Easy to Install (and DIY-Friendly)",
			images: [vinyl1, vinyl2, vinyl3, vinyl4, vinyl5, vinyl6],
			heading: [
				"Luxury Vinyl",
				"Luxury Vinyl",
				"Luxury Vinyl",
				"Luxury Vinyl",
				"Luxury Vinyl",
				"Luxury Vinyl",
			],
			sub_heading: [
				"Vinyl Plank",
				"Vinyl Plank",
				"Vinyl Plank",
				"Vinyl Plank",
				"Vinyl Plank",
				"Vinyl Plank",
			],
		},
		{
			id: 2,
			title: "Tiles",
			subtitle: "Tiles Products",
			description:
				"Regardless of which floor covering product you eventually decide on,it will be constructed or manufactured in some manner.But how ceramic is created is in a world all its own.All ceramic tiles are created from natural products extracted from the earth that are shaped into tiles and then fired in kilns at extremely high temperatures.",
			images: [tiles1, tiles2, tiles3, tiles4, tiles1, tiles2],
			heading: [
				"Flat Tiles",
				"Flat Tiles",
				"Flat Tiles",
				"Flat Tiles",
				"Flat Tiles",
				"Flat Tiles",
			],
			sub_heading: [
				"Tiles Plank",
				"Tiles Plank",
				"Tiles Plank",
				"Tiles Plank",
				"Tiles Plank",
				"Tiles Plank",
			],
		},
		{
			id: 3,
			title: "Vinyl Products",
			subtitle: "Tiles Products",
			description:
				"Regardless of which floor covering product you eventually decide on,it will be constructed or manufactured in some manner.But how ceramic is created is in a world all its own.All ceramic tiles are created from natural products extracted from the earth that are shaped into tiles and then fired in kilns at extremely high temperatures.",
			images: [],
			heading: [
				"Luxury Vinyl",
				"Luxury Vinyl",
				"Luxury Vinyl",
				"Luxury Vinyl",
				"Luxury Vinyl",
				"Luxury Vinyl",
			],
			sub_heading: [
				"Vinyl Plank",
				"Vinyl Plank",
				"Vinyl Plank",
				"Vinyl Plank",
				"Vinyl Plank",
				"Vinyl Plank",
			],
		},
		{
			id: 4,
			title: "Vinyl Products",
			subtitle: "Tiles Products",
			description:
				"Regardless of which floor covering product you eventually decide on,it will be constructed or manufactured in some manner.But how ceramic is created is in a world all its own.All ceramic tiles are created from natural products extracted from the earth that are shaped into tiles and then fired in kilns at extremely high temperatures.",
			images: {},
			heading: [
				"Luxury Vinyl",
				"Luxury Vinyl",
				"Luxury Vinyl",
				"Luxury Vinyl",
				"Luxury Vinyl",
				"Luxury Vinyl",
			],
			sub_heading: [
				"Vinyl Plank",
				"Vinyl Plank",
				"Vinyl Plank",
				"Vinyl Plank",
				"Vinyl Plank",
				"Vinyl Plank",
			],
		},
	];
	const [current, setCurrent] = useState(list[0]);
	useEffect(() => {
		setCurrent(list[param.id - 1]);
	}, []);
	console.log(current);
	return (
		<div>
			<div className="banner-container">
				<div className="Banner">
					<img src={mainImg} alt="" className="Banner-img" />
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
							Email : ritzfloor@gmail.com
						</a>
					</div>
				</div>
				<div className="Home-CariKature">
					<img src={Vector} alt="" />
				</div>
			</div>

			<div className="vinyl-content">
				<h1>{current.title}</h1>
				<p>{current.description}</p>
			</div>
			<h1 className="venyl-h1">{current.subtitle}</h1>
			<div className="venyl-card-container">
				<div className="venyl-card">
					<img src={current.images[5]} className="wall-img" />
					<h2>{current.heading[0]}</h2>
					<h3>{current.sub_heading[0]}</h3>
				</div>
				<div className="venyl-card">
					<img src={current.images[1]} className="wall-img" />
					<h2>{current.heading[1]}</h2>
					<h3>{current.sub_heading[1]}</h3>
				</div>
				<div className="venyl-card">
					<img src={current.images[2]} className="wall-img" />

					<h2>{current.heading[2]}</h2>
					<h3>{current.sub_heading[2]}</h3>
					<div>New</div>
				</div>
				<div className="venyl-card">
					<img src={current.images[3]} className="wall-img" />
					<h2>{current.heading[3]}</h2>
					<h3>{current.sub_heading[3]}</h3>
					<div>New</div>
				</div>
				<div className="venyl-card">
					<img src={current.images[4]} className="wall-img" />
					<h2>{current.heading[4]}</h2>
					<h3>{current.sub_heading[4]}</h3>
				</div>
				<div className="venyl-card">
					<img src={current.images[1]} className="wall-img" />
					<h2>{current.heading[5]}</h2>
					<h3>{current.heading[5]}</h3>
				</div>
			</div>
		</div>
	);
};
export default VenylProducts;
