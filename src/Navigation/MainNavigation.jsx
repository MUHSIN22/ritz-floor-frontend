import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactUs from '../components/ContactUs/ContactUs'
import Home from '../components/Home/Home'
import Cat from '../components/imageCat/Cat'
import OffersCarousel from '../components/OffersCarousel/OffersCarousel'
import ProductPage from '../components/ProductPage/ProductPage'
import ReferalPage from '../components/ReferalPage/ReferalPage'
import SpecialOffers from '../components/SpcialOffers/SpecialOffers'
import Testimonials from '../components/Testimonials/Testimonials'
import UpComingCarousel from '../components/UpComingCarousel/UpComingCarousel'
import VenylProducts from '../components/venyl-products/VenylProducts'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'

export default function MainNavigation() {
    return (
        <>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/productpage" element={<ProductPage />} />
                <Route path="/ContactUs" element={<ContactUs />} />
                <Route path="/whychooseus" element={<WhyChooseUs />} />
                <Route path="/specialOffers" element={<SpecialOffers />} />
                <Route path="/OfferCarousel" element={<OffersCarousel />} />
                <Route path="/UpComingCarousel" element={<UpComingCarousel />} />
                <Route path="/ReferalPage" element={<ReferalPage />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/cat" element={<Cat />} />
                <Route path="/products/:id" element={<VenylProducts />} />
                <Route path="/knowledge-series" element={<VenylProducts />} />
            </Routes>
        </>
    )
}
