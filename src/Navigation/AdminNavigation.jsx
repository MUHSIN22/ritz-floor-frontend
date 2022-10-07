import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import axiosInstance from '../Axios/axiosInstance'
import AdminLayout from '../components/Admin /AdminLayout/AdminLayout'
import ContactUs from '../components/Admin /Contact Us/ContactUs'
import EstimationForm from '../components/Admin /FreeEstimation/EstimationForm'
import KnowledgeSeries from '../components/Admin /KnowledgeSeries/KnowledgeSeries'
import AddUserForm from '../components/Admin /Manage Users/add user/AddUserForm'
import ManageUsers from '../components/Admin /Manage Users/ManageUsers'
import HomePageManager from '../components/Admin /ManagePages/HomaPageManager/HomePageManager'
import ManagePages from '../components/Admin /ManagePages/ManagePages'
import SpecialOfferManager from '../components/Admin /ManagePages/specialOfferManager/SpecialOfferManager'
import TestimonialManager from '../components/Admin /ManagePages/TesmtimonialManager/TestimonialManager'
import WhyChooseUseManager from '../components/Admin /ManagePages/WhyChooseUsManager/WhyChooseUseManager'
import NewsLetter from '../components/Admin /NewsLetter/NewsLetter'
import ReferAndEarn from '../components/Admin /ReferAndEarn/ReferAndEarn'
import Testimonials from '../components/Admin /Testimonials/Testimonials'
import WorkingTimes from '../components/Admin /WorkingTimes/WorkingTimes'
import PrimaryTable from '../components/Utils/PrimaryTable/PrimaryTable'
import { AuthProvider, useAuth } from '../contexts/adminAuth'

let userViewHeaders = ["SiNo", "Email", "Delete User"]

export default function AdminNavigation({ setAdmin }) {
    const [users, setUsers] = useState([])

    const location = useLocation()
    useEffect(() => {
        let paths = location.pathname.split('/')
        if (paths.includes('admin-panel')) {
            setAdmin(true)
        } else {
            setAdmin(false)
        }
    }, [location])

    const deleteUser = (id, index) => {
        let isConfirmed = window.confirm("Are you sure to delete the user?")
        if (isConfirmed) {
            axiosInstance.delete('/user/delete_user/' + id)
                .then(res => {
                    toast.success(res.data.message)
                    window.location.reload()
                }).catch(err => {
                    toast.error("Something went wrong!")
                })
        }
    }

    useEffect(() => {
        let token = sessionStorage.getItem('token');
        if(token){
            axiosInstance.get('/user/get-all-users')
            .then(res => {
                setUsers(res.data.users)
            }).catch(err => {
                console.log(err);
            })
        }
    }, [])

    return (
            <Routes>
                <Route path='/admin-panel' element={<AdminLayout />}>
                    <Route path='manage-users' element={<ManageUsers />}>
                        <Route path='add-user' element={<AddUserForm />} />
                        <Route path='view-users' element={<>
                            {
                                users && users[0] ?
                                    <PrimaryTable tableHeader={userViewHeaders} tableBody={users} deleteCol={true} deleteRow={deleteUser} />
                                    : "No users found"
                            }
                        </>} />
                    </Route>
                    <Route path='manage-pages' element={<ManagePages />}>
                        <Route path='home/:section' element={<HomePageManager />} />
                        <Route path='why-choose-us/:section' element={<WhyChooseUseManager />} />
                        <Route path='special-offers/:section' element={<SpecialOfferManager />} />
                        <Route path="testimonials/:section" element={<TestimonialManager />} />
                    </Route>
                    <Route path='knowledge-series' element={<KnowledgeSeries/>} />
                    <Route path='working-times' element={<WorkingTimes />} />
                    <Route path='testimonials' element={<Testimonials />} />
                    <Route path='testimonials/:section' element={<Testimonials />} />
                    <Route path="contact-us" element={<ContactUs />} />
                    <Route path="estimation-form" element={<EstimationForm />} />
                    {/* <Route path='manage-newsletter' element={<NewsLetter />} /> */}
                    <Route path="refer-and-earn" element={<ReferAndEarn />} />
                    <Route path="refer-and-earn/:type" element={<ReferAndEarn />} />
                </Route>
            </Routes>
    )
}
