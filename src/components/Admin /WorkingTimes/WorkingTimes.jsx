import React, { useEffect, useState } from 'react'
import axiosInstance from '../../../Axios/axiosInstance'
import PrimaryTable from '../../Utils/PrimaryTable/PrimaryTable'
import WorkingHourPopup from './WorkingHourPopup/WorkingHourPopup'

let tableHeader = ["SiNo", 'Day', "From", "To","Edit"]
export default function WorkingTimes() {
    const [isEdit, setEdit] = useState(false)
    const [tableBody, setTableBody] = useState([])
    const [isEditPopup, setEditPopup] = useState(false);

    useEffect(() => {
        axiosInstance.get('/working-time')
            .then(res => {
                setTableBody(res.data.data)
            })
    },[isEditPopup])

    const toggleEdit = (id,index) => {
        let data = tableBody.filter((item) => item.id === id);
        setEditPopup(data[0])
    }
    return (
        <div className="home-page-manager">
            {
                isEditPopup&&
                <WorkingHourPopup setEditPopup={setEditPopup} editPopup={isEditPopup} />
            }
            <PrimaryTable tableHeader={tableHeader} tableBody={tableBody} editContent={toggleEdit} setTableBody={setTableBody} />
        </div>
    )
}
