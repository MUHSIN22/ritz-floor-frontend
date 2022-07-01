import React from "react";
import "./ProductCat.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import woodfloor from "../asset/wood-floor-m-380x254.jpg";
import tiles from "../TILES/pexels-vecislavas-popa-3741317.jpg";
import carpet from "../asset/carpet-floor-m-380x254.jpg";
import vinyl from "../VINYL/pexels-curtis-adams-4832510.jpg";
import laminate from "../LAMINATE/pexels-pixabay-534172.jpg";
import Hardwood from "../asset/hard-wood-floor-m-380x254.jpg";
export default function ProductCat(props) {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<div className="ProductCat-Container">
			<div className="Product-Catalogue">
				<div className="Product-Catalogue-Header">
					<h1>Our Products</h1>
				</div>
				<div className="Product-Carousel">
					<Carousel
						responsive={responsive}
						showDots={true}
						autoPlay={true}
						infinite={true}
						renderDotsOutside={true}
						dotListClass="custom-dot-list-style"
					>
						<div className="Product-Card">
							<div className="Product-Image">
								<img src={vinyl} alt="" />
							</div>
							<div className="Product-Name">
								<h2>Vinyl</h2>
							</div>
						</div>
						<div className="Product-Card">
							<div className="Product-Image">
								<img src={tiles} alt="" />
							</div>
							<div className="Product-Name">
								<h2>Tiles</h2>
							</div>
						</div>
						<div className="Product-Card">
							<div className="Product-Image">
								<img src={laminate} alt="" />
							</div>
							<div className="Product-Name">
								<h2>Laminate</h2>
							</div>
						</div>
						<div className="Product-Card">
							<div className="Product-Image">
								<img src={vinyl} alt="" />
							</div>
							<div className="Product-Name">
								<h2>Vinyl</h2>
							</div>
						</div>
						<div className="Product-Card">
							<div className="Product-Image">
								<img src={laminate} alt="" />
							</div>
							<div className="Product-Name">
								<h2>Laminate</h2>
							</div>
						</div>
						<div className="Product-Card">
							<div className="Product-Image">
								<img src={Hardwood} alt="" />
							</div>
							<div className="Product-Name">
								<h2>Hard Wood</h2>
							</div>
						</div>
						<div className="Product-Card">
							<div className="Product-Image">
								<img src={woodfloor} alt="" />
							</div>
							<div className="Product-Name">
								<h2>Wood Floor</h2>
							</div>
						</div>
						<div className="Product-Card">
							<div className="Product-Image">
								<img src={carpet} alt="" />
							</div>
							<div className="Product-Name">
								<h2>Carpet</h2>
							</div>
						</div>
					</Carousel>
				</div>
			</div>
		</div>
	);
}
