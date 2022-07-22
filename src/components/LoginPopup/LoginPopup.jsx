import React from 'react'
import './LoginPopup.css'
import vector from '../asset/login.png'

export default function LoginPopup() {
  return (
    <div className="login-popup-wrapper">
        <div className="login-popup-container">
            <h1>Login</h1>
            <img src={vector} alt="" />
            <form>
                <label htmlFor="">Email</label>
                <input type="email"  />
                <label htmlFor="">Password</label>
                <input type="password" />
                <button type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}
