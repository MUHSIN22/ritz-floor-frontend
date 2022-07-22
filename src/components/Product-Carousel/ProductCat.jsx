import React, { useEffect, useState } from "react";
import "./ProductCat.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import woodfloor from "../asset/wood-floor-m-380x254.jpg";
import tiles from "../asset/products/tiles.jpg";
import carpet from "../asset/products/carpet.jpg";
import vinyl from "../asset/products/vinyl.jpg";
import laminate from "../asset/products/laminate.jpg";
import hardwood from "../asset/products/hardwood.jpg";
import kitchen from "../asset/products/kitchen.jpg";
import accent from "../asset/products/accent.jpg";
import knowledge from "../asset/products/knowledge.jpg";
import { useNavigate } from "react-router-dom";
import AdminPageManager from "../../APIServices/AdminPageManager";
import axiosInstance from "../../Axios/axiosInstance";
import PageDataFetcher from "../../APIServices/PageDataFetcher";
import config from "../../Constants/config";
export default function ProductCat(props) {
	const navigate = useNavigate();
	const [products, setProducts] = useState([])

	useEffect(() => {
		PageDataFetcher.getSectionItems('homepage',1)
		.then(res => {
			setProducts(res)
		})
	}, [])

	const categoryFinder = (title) => {
		let category;
		switch(title){
			case "Laminate":
				category = 'laminate';
				break;
			case 'Vinyl':
				category = 'vinyl';
				break;
			case 'Carpet':
				category = 'carpet'
				break;
			case 'Tiles and Mossaics':
				category = 'tiles';
				break;
			case 'Engineered Hardwood':
				category = 'hardwood';
				break;
			case 'Kitchen':
				category = 'kitchen';
				break;
			case "Accent Walls":
				category = 'accent'
				break;
			default:
				break;
		}	
		return category;
	}
	return (
		<div className="ProductCat-Container">
			<div className="Product-Catalogue">
				<div className="Product-Catalogue-Header">
					<h1>Our Products</h1>
				</div>
				<div className="products-wrapper">
					{
						products[0] &&
						products.map((product, index) => (
							<div className="product-card" key={index} onClick={() => navigate('/products/'+(categoryFinder(product.title)))}>
								<div className="product-image-wrapper">
									<img src={config.backendURL+product.img} alt="" className="product-image" />
								</div>
								<h3 className="product-card-title">{product.title}</h3>
							</div>
						))
					}
					<div className="product-card" onClick={() => navigate('/products/knowledge')}>
						<div className="product-image-wrapper">
							<img src={knowledge} alt="" className="product-image" />
						</div>
						<h3 className="product-card-title">Knowledge Series</h3>
					</div>
				</div>
				{/* <div className="Product-Carousel">
					<Carousel
						responsive={responsive}
						showDots={true}
						autoPlay={true}
						infinite={true}
						renderDotsOutside={true}
						dotListClass="custom-dot-list-style"
					>
						<div
							className="Product-Card"
							onClick={(e, id = 1) => changePage(e, id)}
						>
							<div className="Product-Image">
								<img src={vinyl} alt="" />
							</div>
							<div className="Product-Name">
								<h2>Vinyl</h2>
							</div>
						</div>
						<div
							className="Product-Card"
							onClick={(e, id = 2) => changePage(e, id)}
						>
							<div className="Product-Image">
								<img src={tiles} alt="" />
							</div>
							<div className="Product-Name">
								<h2>Tiles</h2>
							</div>
						</div>
						<div
							className="Product-Card"
							onClick={(e, id = 3) => changePage(e, id)}
						>
							<div className="Product-Image">
								<img src={laminate} alt="" />
							</div>
							<div className="Product-Name">
								<h2>Laminate</h2>
							</div>
						</div>

						<div
							className="Product-Card"
							onClick={(e, id = 4) => changePage(e, id)}
						>
							<div className="Product-Image">
								<img src={Hardwood} alt="" />
							</div>
							<div className="Product-Name">
								<h2>Hard Wood</h2>
							</div>
						</div>
					</Carousel>
				</div> */}
			</div>
		</div>
	);
}
