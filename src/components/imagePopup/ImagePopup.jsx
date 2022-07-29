import React from 'react'
import balcony from '../asset/balcony.jpg'
import './ImagePopup.css'
import {AiFillCloseSquare} from 'react-icons/ai'

export default function ({image,closePopup}) {
  return (
    <div className='image-popup-wrapper'>
        <div className="image-popup-container">
            <AiFillCloseSquare className='close-icon' onClick={() => closePopup(false)}/>
            <div className="image-wrapper">
                <img src={image} alt="" />
            </div>
        </div>
    </div>
    // null comment
  )
}
