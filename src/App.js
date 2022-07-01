import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import ProductPage from "./components/ProductPage/ProductPage";
import ContactUs from "./components/ContactUs/ContactUs";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import SpecialOffers from "./components/SpcialOffers/SpecialOffers";
import OffersCarousel from "./components/OffersCarousel/OffersCarousel";
import UpComingCarousel from "./components/UpComingCarousel/UpComingCarousel";
import ReferalPage from "./components/ReferalPage/ReferalPage";
import Testimonials from "./components/Testimonials/Testimonials";
import Cat from "./components/imageCat/Cat";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VenylProducts from "./components/venyl-products/VenylProducts";
function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/productpage" element={<ProductPage />} />
					<Route path="/ContactUs" element={<ContactUs />} />
					<Route path="/whychooseus" element={<WhyChooseUs />} />
					<Route path="/specialOffers" element={<SpecialOffers />} />
					<Route path="/OfferCarousel" element={<OffersCarousel />} />
					<Route path="/UpComingCarousel" element={<UpComingCarousel />} />
					<Route path="/ReferalPage" element={<ReferalPage />} />
					<Route path="/testimonials" element={<Testimonials />} />
					<Route path="/cat" element={<Cat />} />
					<Route path="/venyl-products" element={<VenylProducts />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
