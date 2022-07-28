import React, { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axiosInstance from '../../../Axios/axiosInstance'
import { useLoader } from '../../../contexts/loadingContext'
import PrimaryTable from '../../Utils/PrimaryTable/PrimaryTable'

let tableHeader = ["SiNo", "Email","Actions"]
export default function NewsLetter() {
    const [newsLetter,setNewsLetter] = useState([]);
    const [loading,setLoading] = useLoader();

    useEffect(() => {
        getNewsLetters();
    },[])

    const getNewsLetters = () => {
        axiosInstance.get('/newsletter/get-news-letters')
        .then(res => {
            setNewsLetter(res.data.letters)
        }).catch(err => {
            console.log(err);
        })
    }

    const sendEmail = (id) => {
        setLoading(true);
        axiosInstance.put('/newsletter/'+id)
            .then(res => {
                if(res.data.success){
                    toast.success(res.data.message)
                    getNewsLetters();
                }else{
                    toast.error(res.data.message)
                }
                setLoading(false)
            }).catch(err => {
                setLoading(false)
                toast.error("Something went wrong!");
            })
    }

    const deleteNewsLetter = (id) => {
        setLoading(true);
        axiosInstance.delete('/newsletter/'+id)
            .then(res => {
                if(res.data.success){
                    toast.success(res.data.message)
                    getNewsLetters();
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
        <div className="news-letter">
            <div className="table-wrapper">
                {
                    newsLetter[0]&&
                    <PrimaryTable tableHeader={tableHeader} tableBody={newsLetter} isAction={true}  approve={sendEmail} deny={deleteNewsLetter} />
                }
            </div>
        </div>
    )
}
