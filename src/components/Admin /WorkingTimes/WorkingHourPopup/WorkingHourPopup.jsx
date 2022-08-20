import React, { useEffect, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { toast } from 'react-toastify';
import axiosInstance from '../../../../Axios/axiosInstance';
import './WorkingHourPopup.css'

export default function WorkingHourPopup({ setEditPopup, editPopup }) {
    const [form, setForm] = useState({ from: '', to: '' })
    const [isClosed, setClosed] = useState(false);

    useEffect(() => {
        setForm(editPopup)
    }, [])
    const editSubmission = (event) => {
        event.preventDefault();
        let body = form;
        form.isClosed = isClosed;
        axiosInstance.put(`/working-time/${editPopup.id}`,body)
            .then(res => {
                toast.success(res.data.message)
                setEditPopup(false);
            }).catch(err => {
                toast.error(err.data.message)
            })
    }
    return (
        <div className="working-hour-popup">
            <div className="hour-popup-form">
                <form onSubmit={editSubmission}>
                    <h1 className="product-popup-title">Edit Timing({editPopup.day})</h1>
                    <AiFillCloseCircle className='close-icon' onClick={() => setEditPopup(false)} />
                    <div className="two-columns-wrapper">
                        <div className="input-wrapper">
                            <label htmlFor="closed-checkedbox" className='closed-wrapper'>
                                <input type="checkbox" name='closed-checkedbox' id='closed-checkedbox' onChange={(event) => setClosed(event.target.checked)} className='checkbox-closing' />
                                <span>Closed</span>
                            </label>
                        </div>
                        {
                            !isClosed &&
                            <>
                                <div className="input-wrapper">
                                    <label htmlFor="">From</label>
                                    <input type="text" name='from' value={form.from} className="home-input" onChange={(event) => setForm({ ...form, [event.target.name]: event.target.value })} />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="">To</label>
                                    <input name="to" id="" cols="30" value={form.to} rows="10" className="home-input" onChange={(event) => setForm({ ...form, [event.target.name]: event.target.value })} />
                                </div>
                            </>
                        }
                    </div>
                    <button className="btn-submit">Upload</button>
                </form>
            </div>
        </div>
    )
}