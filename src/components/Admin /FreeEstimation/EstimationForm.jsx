import React, { useState } from 'react'
import { useEffect } from 'react';
import axiosInstance from '../../../Axios/axiosInstance';
import PrimaryTable from '../../Utils/PrimaryTable/PrimaryTable';

let tableHeader = ["SiNo", "First Name", "Last Name", "Email", "Phone", "Address", "City", "Purchase", "Product", "Need Installation"]
let purchase = [
    "Within 1 Month",
    "1-3 months",
    "3-6 months",
    "Over 6 months"
]
const product = [
    "Laminate",
    "Vinyl",
    "Carpet",
    "Floor Tiles & Backsplash",
    "Engineered Hardwood",
    "Kitchen Cabinets & Countertops"
]

export default function EstimationForm() {
    const [estimationData, setEstimationData] = useState([]);

    useEffect(() => {
        axiosInstance.get('/contact/get-all-estimation')
            .then(res =>{ 
                console.log(res.data.item);
                res.data.item.map((item) => {
                    item.purchase = purchase[item.purchase];
                    item.product = product[item.product];
                    item.installation = item.installation == 1 ? "Yes" : "No"
                    return item;
                })
                setEstimationData(res.data.item)
            }).catch(err => {
                console.log(err);
            })
    },[])
    return (
        <div className="contact-us">
            <div className="table-wrapper">
                {
                    estimationData[0] &&
                    <PrimaryTable tableHeader={tableHeader} tableBody={estimationData} />
                }
            </div>
        </div>
    )
}
