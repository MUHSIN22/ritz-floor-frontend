import React, { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axiosInstance from '../../../Axios/axiosInstance'
import { useLoader } from '../../../contexts/loadingContext'
import PrimaryTable from '../../Utils/PrimaryTable/PrimaryTable'

let tableHeader = ["Si.No", "Name", "Email", "Contact","Referal Id","Action"]

export default function ReferAndEarn() {
    const [referals,setReferals] = useState([])
    const [loading,setLoading] = useLoader();
    useEffect(() => {
        getReferals()
    },[])

    const getReferals = () => {
        axiosInstance.get('/referal/get-all-referals')
        .then(res => {
            setReferals(res.data.item)
        }).catch(err => {
            toast.error("Please refresh the page. Something went wrong!")
        })
    }

    const sendEmail = (id) => {
        setLoading(true);
        axiosInstance.put('/referal/'+id)
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
            <div className="table-wrapper">
                <PrimaryTable tableHeader={tableHeader} tableBody={referals} isAction={true} approve={sendEmail} deny={deleteReferal}/>
            </div>
        </div>
    )
}
