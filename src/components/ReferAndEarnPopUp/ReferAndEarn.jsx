import React, { useState } from "react";
import "./ReferAndEarn.css";
import referal from "../asset/undraw_referral_re_0aji.svg";
import { AiOutlineClose } from 'react-icons/ai'
import axiosInstance from "../../Axios/axiosInstance";
import { toast } from "react-toastify";

export default function ReferAndEarn({ setShowPopUp, setShowSuccess, showPopup }) {
  const [formData, setFormData] = useState({ name: '', email: '', friendEmail: '', phone: '' })
  const handleFormSubmit = (event) => {
    event.preventDefault();
    axiosInstance.post(`/referal/${showPopup}`, formData)
      .then(res => {
        if (res.data.success) {
          setFormData({ name: '', email: '', friendEmail: "", phone: '' })
          setShowPopUp(false)
          setShowSuccess(true)
        } else {
          toast.error("Something went wrong!")
        }
      })

  }

  const handleInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const changeForm = (event, form) => {
    let activeLink = document.querySelector(".head-and-link--active")
    if (activeLink) {
      activeLink.classList.remove("head-and-link--active");
    }
    event.target.classList.add("head-and-link--active");
    setShowPopUp(form)
  }
  return (
    <div className="ReferAndEarn-Container">
      <AiOutlineClose className="close-icon" onClick={() => setShowPopUp(false)} />
      <div className="ReferAndEarn-Header">
        <h1>
          <span className={"head-and-link " + (showPopup === "refer" ? "head-and-link--active" : '')} onClick={(e) => changeForm(e, 'refer')}>Refer and Earn</span>
          <span>|</span>
          <span className={"head-and-link " + (showPopup === "discount" ? "head-and-link--active" : '')} onClick={(e) => changeForm(e, 'discount')}>Get Discount</span>
        </h1>
      </div>
      <div className="refer-content">
        <div className="ReferAndEarn-Banner">
          <img src={referal} alt="" />
        </div>
        <form onSubmit={handleFormSubmit} className="Refer-Form">
          <div className="Refer-Form-COl">
            <label htmlFor="Name">{showPopup === "refer" ? "Existing Customer Name" : "Name"}</label>
            <input type="text" name="name" required onChange={handleInput} value={formData.name} id="01" />
          </div>
          <div className="Refer-Form-COl">
            <label htmlFor="Name">Contact No</label>
            <input type="text" name="phone" required onChange={handleInput} value={formData.phone} id="01" />
          </div>
          <div className="Refer-Form-COl">
            <label htmlFor="Name">Email Id</label>
            <input type="email" name="email" required onChange={handleInput} value={formData.email} id="01" />
          </div>
          {
            showPopup === "refer" &&
            <div className="Refer-Form-COl">
              <label htmlFor="Name">Friend's Name</label>
              <input type="text" name="friendName" required onChange={handleInput} value={formData.friendName} id="01" />
            </div>
          }
          {
            showPopup === "refer" &&
            <div className="Refer-Form-COl">
              <label htmlFor="Name">Contact No</label>
              <input type="text" name="friendPhone" required onChange={handleInput} value={formData.friendPhone} id="01" />
            </div>
          }
          
          {
            showPopup === "refer" &&
            <div className="Refer-Form-COl">
              <label htmlFor="Name">Email Id</label>
              <input type="email" name="friendEmail" required onChange={handleInput} value={formData.friendEmail} id="01" />
            </div>
          }
          <button className="Submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}
