import React from "react";
import BannerImage from "../asset/BannerImage07.png";
import { LocalPhone } from "@mui/icons-material";
import mainImg from "../asset/image 12.svg";
import "./Venylproducts.css";
import Vector from "../asset/Kerikature.png";
import tiles1 from "../asset/TILES/1.jpg";
import tiles2 from "../asset/TILES/2.jpg";
import tiles3 from "../asset/TILES/3.jpg";
import tiles4 from "../asset/TILES/4.jpg";
//vinyl-images
import vinyl1 from "../asset/VINYL/1.jpg";
import vinyl2 from "../asset/VINYL/2.jpg";
import vinyl3 from "../asset/VINYL/3.jpg";
import vinyl4 from "../asset/VINYL/4.jpg";
import vinyl5 from "../asset/VINYL/5.jpg";
import vinyl6 from "../asset/VINYL/6.jpg";
import laminated1 from '../asset/laminated/1.jpg'
import laminated2 from '../asset/laminated/2.jpg'
import laminated3 from '../asset/laminated/3.png'
import laminated4 from '../asset/laminated/4.jpg'
import laminated5 from '../asset/laminated/5.jpg'
import laminated6 from '../asset/laminated/6.png'
import knowledge1 from '../asset/knowledge/1.jpg'
import knowledge2 from '../asset/knowledge/2.jpg'
import knowledge3 from '../asset/knowledge/3.png'
import knowledge4 from '../asset/knowledge/4.jpg'
import knowledge5 from '../asset/knowledge/5.jpg'
import knowledge6 from '../asset/knowledge/6.png'
import { useState } from "react";
import { useEffect } from "react";
import { useParams, ussParams } from "react-router-dom";
import MainBanner from "../Banner/MainBanner";
import axiosInstance from "../../Axios/axiosInstance";
import config from "../../Constants/config";

export const VenylProducts = () => {
	const {id} = useParams();
	const [current, setCurrent] = useState(null);
	const [data,setData] = useState(null)
	const [images,setImage] = useState(null)

	useEffect(() => {
		fetchData();
		window.scrollTo(0, 0)
	}, []);

	const fetchData = async () => {
		if(id){
			let response = await axiosInstance.get(`/product-page/${id}`)
				.then(res => {
					console.log(res);
					setData(res.data.productDetails)
					setImage(res.data.images)
				}).catch(err => {
					console.log(err);
				})
 		}
	}
	return (
		<>
			{
				data &&
				<div>
					<div className="banner-container">
						<MainBanner background={BannerImage} />
					</div>

					<div className="vinyl-content">
						<h1>{data.content_title}</h1>
						<p>{data.content}</p>
					</div>
					{
						images && images[0] &&
						<>
							<h1 className="venyl-h1">{data.product_title}</h1>
							<div className="venyl-card-container">
								{
									images.map((image,index) => (
										<div className="venyl-card" key={index}>
											<img src={config.backendURL+image.img} className="wall-img" />
										</div>
									))
								}
							</div>
						</>
					}
				</div>
			}
		</>
	);
};
export default VenylProducts;


// const items = {
	// 	laminate: {
	// 		title: "Laminate Products",
	// 		subtitle: "Laminate Products",
	// 		description: "Regardless of which floor covering product you eventually decide on,it will be constructed or manufactured in some manner.But how ceramic is created is in a world all its own.All ceramic tiles are created from natural products extracted from the earth that are shaped into tiles and then fired in kilns at extremely high temperatures.",
	// 		images: [laminated1, laminated2, laminated3, laminated4, laminated5, laminated6],
	// 	},
	// 	vinyl: {
	// 		title: "Vinyl Flooring",
	// 		subtitle: "Vinyl Products",
	// 		description: "Vinyl is waterproof, Durable, Versatile, Affordable and able to hold heavy fool traffic.While luxury vinyl has similarities to laminate,there are significant differences in the construction of these products that set them apart from one another. Vinyl Plank Flooring is Easy to Install (and DIY-Friendly)",
	// 		images: [vinyl1, vinyl2, vinyl3, vinyl4, vinyl5, vinyl6],
	// 	},
	// 	carpet: {
	// 		title: "Carpet Products",
	// 		subtitle: "Carpet Products",
	// 		description: "Carpet has been one of the most popular choices for homeowners because of its versatility, comfort, and price. Carpet provides excellent insulation value to a space, much more than hard surface flooring materials. Available in an almost infinite number of colors, styles, and textures, carpet is functional and beautiful in any home. Whether you like a traditional look or something more contemporary, there's a carpet for you.",
	// 		images: [tiles1, tiles2, tiles3, tiles4, tiles1, tiles2],
	// 	},
	// 	tiles: {
	// 		title: "Tiles",
	// 		subtitle: "Tiles Products",
	// 		description: "Regardless of which floor covering product you eventually decide on,it will be constructed or manufactured in some manner.But how ceramic is created is in a world all its own.All ceramic tiles are created from natural products extracted from the earth that are shaped into tiles and then fired in kilns at extremely high temperatures.",
	// 		images: [tiles1, tiles2, tiles3, tiles4, tiles1, tiles2],
	// 	},
	// 	hardwood: {
	// 		title: "Hardwood Products",
	// 		subtitle: "Hardwood Products",
	// 		description: "Regardless of which floor covering product you eventually decide on,it will be constructed or manufactured in some manner.But how ceramic is created is in a world all its own.All ceramic tiles are created from natural products extracted from the earth that are shaped into tiles and then fired in kilns at extremely high temperatures.",
	// 		images: [tiles1, tiles2, tiles3, tiles4, tiles1, tiles2],
	// 	},
	// 	kitchen: {
	// 		title: "Kitchen Products",
	// 		subtitle: "Kitchen Products",
	// 		description: "Regardless of which floor covering product you eventually decide on,it will be constructed or manufactured in some manner.But how ceramic is created is in a world all its own.All ceramic tiles are created from natural products extracted from the earth that are shaped into tiles and then fired in kilns at extremely high temperatures.",
	// 		images: [tiles1, tiles2, tiles3, tiles4, tiles1, tiles2],
	// 	},
	// 	accent: {
	// 		title: "Accent Wall",
	// 		subtitle: "Accent Wall",
	// 		description: "Regardless of which floor covering product you eventually decide on,it will be constructed or manufactured in some manner.But how ceramic is created is in a world all its own.All ceramic tiles are created from natural products extracted from the earth that are shaped into tiles and then fired in kilns at extremely high temperatures.",
	// 		images: [tiles1, tiles2, tiles3, tiles4, tiles1, tiles2],
	// 	},
	// 	knowledge: {
	// 		title: "Knowledge Series",
	// 		subtitle: "Knowledge Series",
	// 		description: "Regardless of which floor covering product you eventually decide on,it will be constructed or manufactured in some manner.But how ceramic is created is in a world all its own.All ceramic tiles are created from natural products extracted from the earth that are shaped into tiles and then fired in kilns at extremely high temperatures.",
	// 		images: [knowledge1,knowledge2,knowledge3,knowledge4,knowledge5,knowledge6],
	// 	},
	// }