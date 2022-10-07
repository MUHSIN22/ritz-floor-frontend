import React from 'react'
import './ReferSuccessPopup.css'
import referSuccess from '../asset/refer success.png'
import { Link } from 'react-router-dom'

export default function ReferSuccessPopup() {
    return (
        <div className="success-popup-container">
            <div className="success-popup">
                <img src={referSuccess} className="success-image" alt="" />
                <p className="success-text">
                    Congratulations!! you have earned a coupon,
                    which can be reedemed during your visit
                    at ourstore, please check your mail
                </p>
                <Link to="/" className="btn-success-home">Home</Link>
            </div>
        </div>
    )
}
