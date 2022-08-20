import React from "react";
import BannerImage from "../asset/BannerImage07.png";
import { LocalPhone } from "@mui/icons-material";
import mainImg from "../asset/image 12.svg";
import "./Venylproducts.css";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, ussParams } from "react-router-dom";
import MainBanner from "../Banner/MainBanner";
import axiosInstance from "../../Axios/axiosInstance";
import config from "../../Constants/config";
import ImagePopup from "../imagePopup/ImagePopup";
import FAQsKnowledgeCenter from "../../JSON DB/FAQsKnowledgeCenter";

export const VenylProducts = () => {
	const { id } = useParams();
	const [current, setCurrent] = useState(null);
	const [data, setData] = useState(null)
	const [images, setImage] = useState(null)
	const [isPopup, setPopup] = useState(false)
	const [selectedImage, setSelectedImage] = useState(null)

	useEffect(() => {
		fetchData();
		window.scrollTo(0, 0)
	}, [window.location]);

	const fetchData = async () => {
		if (id) {
			let response = await axiosInstance.get(`/product-page/${id}`)
				.then(res => {
					console.log(res);
					setData(res.data.productDetails)
					setImage(res.data.images)
				}).catch(err => {
					console.log(err);
				})
		} else {
			let response = await axiosInstance.get(`/knowledge-series`)
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
					{
						isPopup &&
						<ImagePopup image={selectedImage} closePopup={setPopup} />
					}
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
									images.map((image, index) => (
										<div className="venyl-card" key={index} onClick={() => {
											setSelectedImage(config.backendURL + image.img);
											setPopup(true)
										}}>
											<img src={config.backendURL + image.img} className="wall-img" />
										</div>
									))
								}
							</div>
						</>
					}
					{
						window.location.pathname.split('/').includes('knowledge-series') &&
						<div className="product-faqs-wrapper">
							<h1 className="venyl-h1">FAQs</h1>
							{
								FAQsKnowledgeCenter.map((item, index) => (
									<div className="question-and-answer" key={index}>
										<div className="question-wrapper">
											<span className="question-icon">Q.</span>
											<p className="question">
												{item.question}
											</p>
										</div>
										<div className="answer-wrapper">
											<span className="answer-icon">A.</span>
											<p className="answer">
												{item.answer}
											</p>
											<ul className="answer">
												{
													item.points &&
													item.points.map((point, i) => (
														<li key={i}>{point}</li>
													))
												}
											</ul>
										</div>
									</div>
								))
							}
						</div>
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