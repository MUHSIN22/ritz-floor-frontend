import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../../contexts/adminAuth'
import AdminNavList from '../../../JSON DB/AdminNavList'
import adminLogo from '../../asset/admin-logo.png'
import './AdminSideNavigation.css'

export default function AdminSideNavigation({ closeNav }) {
    const auth = useAuth();
    return (
        <nav className="admin-side-navigation">
            <Link to='/admin-panel'>
                <img src={adminLogo} className='admin-panel-logo' alt="" />
            </Link>
            <ul className="nav-list">
                {
                    AdminNavList.map((item, index) => (
                        <li key={index} className='nav-btn'>
                            <NavLink to={item.link} className={({ isActive }) => isActive ? "nav-link nav-link--active" : 'nav-link'} onClick={() => closeNav()}>{item.title}</NavLink>
                        </li>
                    ))
                }
                <li className='nav-btn' onClick={() => auth.logout()}>
                    <span className='nav-link'>Logout</span>
                    {/* <NavLink to={item.link} className={({isActive}) => isActive? "nav-link nav-link--active": 'nav-link'} onClick={() => closeNav()}>{item.title}</NavLink> */}
                </li>
            </ul>
        </nav>
    )
}
