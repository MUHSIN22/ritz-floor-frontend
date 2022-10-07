import React, { useEffect } from 'react'
import { useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import axiosInstance from '../../../Axios/axiosInstance'
import { useLoader } from '../../../contexts/loadingContext'
import PrimaryTable from '../../Utils/PrimaryTable/PrimaryTable'

let tableHeader = ["Si.No", "Name", "Email", "Contact","Referal Id","Action"]
let referTableHeader = ["Si.No","Name","Friend Name","Email","Friend Email","Contact","Friend Contact","Referal ID","Action"]


export default function ReferAndEarn() {
    const [referals,setReferals] = useState([])
    const [loading,setLoading] = useLoader();
    const {type} = useParams();
    const navigate = useNavigate()
    useEffect(() => {
        if(!type){
            navigate('/admin-panel/refer-and-earn/refer')
        }else{
            getReferals()
        }
    },[type])

    const getReferals = () => {
        axiosInstance.get(`/referal/get-all-referals/${type}`)
        .then(res => {
            setReferals(res.data.item)
        }).catch(err => {
            toast.error("Please refresh the page. Something went wrong!")
        })
    }

    const sendEmail = (id) => {
        setLoading(true);
        axiosInstance.put(`/referal/${id}/${type}`)
            .then(res => {
                if(res.data.success){
                    toast.success(res.data.message)
                    getReferals();
                }else{
                    toast.error(res.data.message)
                }
                setLoading(false)
            }).catch(err => {
                setLoading(false)
                toast.error("Something went wrong!");
            })
    }

    const deleteReferal = (id) => {
        setLoading(true);
        axiosInstance.delete('/referal/'+id)
            .then(res => {
                if(res.data.success){
                    toast.success(res.data.message)
                    getReferals();
                }else{
                    toast.error(res.data.message)
                }
                setLoading(false)
            }).catch(err => {
                setLoading(false)
                toast.error("Something went wrong!");
            })
    }

    return (
        <div className="refer-and-earn">
            <div className="testimonials-btns-wrapper">
                <NavLink to='/admin-panel/refer-and-earn/refer'  className={({ isActive }) => isActive  ? "btn-testimonial btn-testimonial--active" : 'btn-testimonial'}>Referral</NavLink>
                <NavLink to='/admin-panel/refer-and-earn/discount' className={({ isActive }) => isActive ? "btn-testimonial btn-testimonial--active" : 'btn-testimonial'}>Discounts</NavLink>
            </div>
            <div className="table-wrapper">
                <PrimaryTable tableHeader={type ==="refer" ? referTableHeader :tableHeader} tableBody={referals} isAction={true} approve={sendEmail} deny={deleteReferal}/>
            </div>
        </div>
    )
}
