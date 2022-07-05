import React, { useRef, useState } from 'react'
import arrowLeft from '../asset/arrow-left.png'
import arrowRight from '../asset/arrow-right.png'
import profile1 from '../asset/Aks.png'
import profile2 from '../asset/profile2.svg'
import profile3 from '../asset/profile3.svg'
import './HomeTestimonialCarousel.css'

let testmonialContents = [
    {
        name: 'Akash Singh',
        testimonial: "The Ritz floor is the leader of floor installation and repair in the country sed diam nonumy eirmod tempor invidunt ut labore and efficient strategy.",
        image: profile1
    },
    {
        name: 'Alan Neupane',
        testimonial: "The Ritz floor is the leader of floor installation and repair in the country sed diam nonumy eirmod tempor invidunt ut labore and efficient strategy.",
        image: profile2
    },
    {
        name: 'Muhsin N',
        testimonial: "The Ritz floor is the leader of floor installation and repair in the country sed diam nonumy eirmod tempor invidunt ut labore and efficient strategy.",
        image: profile3
    }
]

export default function HomeTestimonialCarousel() {
    const [card1,setCard1] = useState(0);
    const [card2,setCard2] = useState(1);
    const [card3,setCard3] = useState(2)
    const cardRef = useRef(null)

    const navigateCard = (dir) => {
        cardRef.current.style.opacity = 0;
        cardRef.current.style.transform = 'translateY(-5%)'
        if(dir === 1){
            if(card2 === 1){
                setCard1(2)
                setCard2(0)
                setCard3(1)
            }else if(card2 === 0){
                setCard1(1)
                setCard2(2)
                setCard3(0)
            }else{
                setCard1(0)
                setCard2(1)
                setCard3(2)
            }
        }else{
            if(card2 === 1){
                setCard1(1)
                setCard2(2)
                setCard3(0)
            }else if(card2 === 2){
                setCard1(2)
                setCard2(0)
                setCard3(1)
            }else{
                setCard1(0)
                setCard2(1)
                setCard3(2)
            }
        }
        setTimeout(() => {
            cardRef.current.style.opacity = 1;
            cardRef.current.style.transform = 'translateY(0)'
        },300)
    }


    return (
        <div className="testimonial-carousel-container">
            <img src={testmonialContents[card1].image} className="static-avatar" alt="" />
            <div className="testimonial-card" ref={cardRef}>
                <img src={testmonialContents[card2].image} alt="" className="card-img" />
                <h4 className="testimonial-name">{testmonialContents[card2].name}</h4>
                <p className="testimonial">
                    {testmonialContents[card2].testimonial}
                </p>
                <div className="arrows-wrapper">
                    <img src={arrowLeft} alt="" onClick={()=>navigateCard(-1)} className="arrows" />
                    <img src={arrowRight} alt="" onClick={()=>navigateCard(1)} className="arrows" />
                </div>
            </div>
            <img src={testmonialContents[card3].image} className="static-avatar" alt="" />
        </div>
    )
}
