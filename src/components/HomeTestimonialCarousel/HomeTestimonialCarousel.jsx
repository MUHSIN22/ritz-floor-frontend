import React, { useEffect, useRef, useState } from 'react'
import arrowLeft from '../asset/arrow-left.png'
import arrowRight from '../asset/arrow-right.png'
import './HomeTestimonialCarousel.css'
import PageDataFetcher from '../../APIServices/PageDataFetcher'
import config from '../../Constants/config'
import profile from '../asset/user.png'

export default function HomeTestimonialCarousel() {
    const [card1,setCard1] = useState(0);
    const [card2,setCard2] = useState(1);
    const [card3,setCard3] = useState(2)
    const [index,setIndex] = useState(0);
    const [cardContent,setCardContent] = useState(null);
    const [testmonialContents,setTestimonialContents] = useState([])
    const cardRef = useRef(null)

    useEffect(() => {
        PageDataFetcher.getSectionItems('homepage',3)
            .then(res => {
                console.log(res);
                setTestimonialContents(res)
            })
    },[])

    const navigateCard = (dir) => {
        cardRef.current.style.opacity = 0;
        cardRef.current.style.transform = 'translateY(-5%)'
        if(dir === 1){
            setIndex(prev => {
                if(prev >= testmonialContents.length - 1){
                    return 0
                }else{
                    return prev + 1
                }
            })
        }else if(dir === -1){
            setIndex(prev => {
                if(prev <= 0){
                    return testmonialContents.length - 1
                }else{
                    return prev - 1
                }
            })
        }
        // if(dir === 1){
        //     if(card2 === 1){
        //         setCard1(2)
        //         setCard2(0)
        //         setCard3(1)
        //     }else if(card2 === 0){
        //         setCard1(1)
        //         setCard2(2)
        //         setCard3(0)
        //     }else{
        //         setCard1(0)
        //         setCard2(1)
        //         setCard3(2)
        //     }
        // }else{
        //     if(card2 === 1){
        //         setCard1(1)
        //         setCard2(2)
        //         setCard3(0)
        //     }else if(card2 === 2){
        //         setCard1(2)
        //         setCard2(0)
        //         setCard3(1)
        //     }else{
        //         setCard1(0)
        //         setCard2(1)
        //         setCard3(2)
        //     }
        // }

        setTimeout(() => {
            cardRef.current.style.opacity = 1;
            cardRef.current.style.transform = 'translateY(0)'
        },300)
    }
    console.log(testmonialContents);

    return (
        <>
            {
                testmonialContents && testmonialContents[0]&&
                <div className="testimonial-carousel-container">
                <img src={profile} className="static-avatar" alt="" />
                <div className="testimonial-card" ref={cardRef}>
                    <img src={profile} alt="" className="card-img" />
                    <h4 className="testimonial-name">{testmonialContents[index].name}</h4>
                    <p className="testimonial">
                        {testmonialContents[index].content}
                    </p>
                    <div className="arrows-wrapper">
                        <img src={arrowLeft} alt="" onClick={()=>navigateCard(-1)} className="arrows" />
                        <img src={arrowRight} alt="" onClick={()=>navigateCard(1)} className="arrows" />
                    </div>
                </div>
                <img src={profile} className="static-avatar" alt="" />
            </div>
            }
        </>
    )
}
