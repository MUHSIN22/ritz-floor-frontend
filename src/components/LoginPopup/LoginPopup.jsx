import React from 'react'
import './LoginPopup.css'
import vector from '../asset/login.png'
import {IoClose} from 'react-icons/io5'
import { useState } from 'react'
import axiosInstance from '../../Axios/axiosInstance'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
export default function LoginPopup({setLogin}) {
  const [formData, setFormData] = useState({email:'',password:''})
  const navigate = useNavigate();
  
  const loginSubmit = (event) => {
    event.preventDefault();
    axiosInstance.post('/user/login-user',formData)
      .then((res) => {
        toast.success(res.data.message);
        sessionStorage.setItem("token",res.data.token)
        setLogin(false)
        setTimeout(() => {
          navigate('/admin-panel')
          window.location.reload();
        },500)
      }).catch(err => {
        toast.error(err.response.data.message)
      })
  }
  return (
    <div className="login-popup-wrapper">
        <div className="login-popup-container">
            <IoClose className="close-icon" onClick={() => setLogin(false)}/>
            <h1>Login</h1>
            <img src={vector} alt="" />
            <form onSubmit={loginSubmit}>
                <label htmlFor="">Email</label>
                <input type="email" name='email' required onChange={(event) => setFormData({...formData,[event.target.name]:event.target.value})}/>
                <label htmlFor="">Password</label>
                <input type="password" name='password' required onChange={(event) => setFormData({...formData,[event.target.name]:event.target.value})}/>
                <button type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}
