import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { toast } from 'react-toastify'
import axiosInstance from '../../Axios/axiosInstance'
import './EstimationModal.css'

export default function EstimationModal({setEstimationModal}) {
    const [formData,setFormData] = useState({f_name:"",l_name:"",email:"",phone:"",address:"",city:"",purchase:"0",product:"0",installation:1})
    
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]:event.target.value})
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        axiosInstance.post('/contact/free-estimation',formData)
            .then(res => {
                toast.success(res.data.message)
                setEstimationModal(false);
            }).catch(err => {
                toast.error(err.data.message)
            })
    }
    return (
        <div className="estimation-modal-wrapper">
            <form className="estimation-modal" onSubmit={handleFormSubmit}>
                <h1 className="estimation-title">Get a free Estimation</h1>
                <AiOutlineClose className="close-icon" onClick={() => setEstimationModal(false)}/>
                <div className="two-col-wrapper">
                    <div className="input-wrapper">
                        <label htmlFor="" className='estimation-label'>First Name</label>
                        <input type="text" name='f_name' className="estimation-input" required onChange={handleChange} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="" className='estimation-label'>Last Name</label>
                        <input type="text" name='l_name' className="estimation-input" required onChange={handleChange} />
                    </div>
                </div>
                <div className="two-col-wrapper">
                    <div className="input-wrapper">
                        <label htmlFor="" className='estimation-label'>Email</label>
                        <input type="email" name='email' className="estimation-input" required onChange={handleChange} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="" className='estimation-label'>Phone</label>
                        <input type="text" name='phone' className="estimation-input" required onChange={handleChange} />
                    </div>
                </div>
                <label htmlFor="" className='estimation-label'>Address</label>
                <textarea className="estimation-input" required name='address' rows={5} onChange={handleChange} ></textarea>
                <label htmlFor="" className='estimation-label'>City</label>
                <input type="text" name='city' className="estimation-input" required onChange={handleChange} />
                <div className="two-col-wrapper">
                    <div className="input-wrapper">
                        <label htmlFor="" className='estimation-label'>When do you plan on making your purchase?</label>
                        <select name="purchase" id="" defaultValue="0" className='estimation-select' required onChange={handleChange} >
                            <option value="0" selected>Within 1 Month</option>
                            <option value="1">1-3 months</option>
                            <option value="2">3-6 months</option>
                            <option value="3">Over 6 months</option>
                        </select>
                    </div>
                    <div className="input-wrapper" r>
                        <label htmlFor="" className='estimation-label'>What type of product are you interested in?</label>
                        <select name="product" defaultValue="0" id="" className='estimation-select' required onChange={handleChange} >
                            <option value="0" selected>Laminate</option>
                            <option value="1">Vinyl</option>
                            <option value="2">Carpet</option>
                            <option value="3">Floor Tiles & Backsplash</option>
                            <option value="3">Engineered Hardwood</option>
                            <option value="3">Kitchen Cabinets & Countertops</option>
                        </select>
                    </div>
                </div>

                <label htmlFor="" className='estimation-label'>What type of product are you interested in?</label>
                <div className="checkbox-wrapper">
                    <label htmlFor="yes">
                        <input type="radio" checked name="installation" value={1} id="yes" required onChange={handleChange} />
                        <span>Yes</span>
                    </label>
                    <label htmlFor="no">
                        <input type="radio" id="no" name="installation" value={0} required onChange={handleChange}  />
                        <span>No</span>
                    </label>
                </div>
                <button className="btn-submit">Submit</button>
            </form>
        </div>
    )
}
