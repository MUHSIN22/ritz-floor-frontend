import React, { useRef } from 'react'
import referal from "../asset/undraw_referral_re_0aji.svg";
import {AiOutlineClose} from 'react-icons/ai'
import '../ReferAndEarnPopUp/ReferAndEarn.css'

export default function ContactPopup({setShowPopUp}) {
    const contactFormRef = useRef(null);
    const handleContactSubmit = (event) => {
        event.preventDefault()
        fetch('https://sheet.best/api/sheets/a393b342-3ffe-419c-822b-76ced13675fa',{
            method: "POST",
            body: new FormData(contactFormRef.current)
        }).then((res) => {
            setShowPopUp(false)
        }).catch(err => {
        })
    }
  return (
    <div className="ReferAndEarn-Container">
      <AiOutlineClose className="close-icon" onClick={() => setShowPopUp(false)}/>
      <div className="ReferAndEarn-Header">
        <h1>Refer and Earn </h1>
      </div>
      <div className="refer-content">
        <div className="ReferAndEarn-Banner">
          <img src={referal} alt="" />
        </div>
        <form className="Refer-Form" onSubmit={handleContactSubmit} ref={contactFormRef}>
          <div className="Refer-Form-COl">
            <label htmlFor="Name">Name</label>
            <input type="text" name="Name" id="01" />
          </div>
          <div className="Refer-Form-COl">
            <label htmlFor="Name">Email Id</label>
            <input type="email" name="Email" id="01" />
          </div>
          <div className="Refer-Form-COl">
            <label htmlFor="Name">Message</label>
            <textarea name="Message" id="" cols="30" rows="10"></textarea>
          </div>
          <button className="Submit-btn">Submit</button>
        </form>
      </div>
    </div>
  )
}
