import React, { useRef } from 'react'
import AdminSideNavigation from '../AdminSideNavigation/AdminSideNavigation'
import './AdminLayout.css'
import profileAvatar from '../../asset/profile avatar.png'
import { Link, Outlet } from 'react-router-dom'
import adminLogo from '../../asset/admin-logo.png'


export default function AdminLayout() {
    const hamRef = useRef(null)
    const menuRef = useRef(null)

    const handleHamburgerClick = (event) => {
        let activeItem = document.querySelector(".dropdown--active")
        event.target.classList.toggle("hamburger--active")
        menuRef.current.classList.toggle("menu--active")
        if(activeItem){
          activeItem.classList.remove("dropdown--active")
        }
    }

    const closeNav = () => {
        menuRef.current.classList.remove("menu--active")
        hamRef.current.classList.remove("hamburger--active")
    }

    return (
        <main className="admin-layout">
            <div className="side-nav-container" ref={menuRef}>
                <AdminSideNavigation closeNav={closeNav} />
            </div>
            <div className="admin-header-wrapper">
                <header className="admin-header">
                    <h3 className="header-title">Welcome to: Ritz Floor</h3>
                    <ul className="hamburger" ref={hamRef} onClick={handleHamburgerClick}>
                        <li className="layer"></li>
                        <li className="layer"></li>
                        <li className="layer"></li>
                    </ul>
                    <Link to="/" className='header-logo-wrapper'>
                        <img src={adminLogo} className="header-logo" alt="" />
                    </Link>
                    <div className="profile-wrapper">
                        <img src={profileAvatar} alt="" className="profile-avatar" />
                        <p className="profile-name">Akash Singh</p>
                    </div>
                </header>
            </div>

            <section className="admin-content">
                <Outlet />
            </section>
        </main>
    )
}
