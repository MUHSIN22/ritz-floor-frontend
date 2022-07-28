import React, { useState } from 'react'
import ImageUploader from '../../../Utils/ImageUploader/ImageUploader'
import './ProductPopup.css'
import { AiFillCloseCircle, AiFillDelete } from 'react-icons/ai'
import axiosInstance from '../../../../Axios/axiosInstance';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import config from '../../../../Constants/config';

export default function ProductPopup({ productId, setProductPopup }) {
    const [images, setImages] = useState(null);
    const [form, setForm] = useState({ content_title: "", content: "", product_title: '' });;
    const [uploadedImages, setUploadedImages] = useState();

    const productSubmission = (event) => {
        event.preventDefault();
        let formData = new FormData();
        formData.append('content_title', form.content_title)
        formData.append('content', form.content)
        formData.append('product_title', form.product_title)
        for (let i = 0; i < images.length; i++) {
            formData.append('images', images[i]);
        }
        axiosInstance.put(`/product-page/${productId}`, formData)
            .then(res => {
                if (res.data.success) {
                    toast.success(res.data.message)
                    setProductPopup(false);
                } else {
                    toast.error(res.data.message)
                }
            }).catch(err => {
                toast.error("Something went wrong with uploading. Try again!");
            })
    }

    const deleteImage = (id) => {
        console.log(id);
        let confirm = window.confirm("Are you sure to delete?")
        if(confirm){
            axiosInstance.delete('/product-page/image/'+id)
                .then(res => {
                    toast.success(res.data.message)
                    setUploadedImages(prev => prev.filter(item => item.id !== id));
                }).catch(err => {
                    toast.error("Something went wrong. Try again!")
                })
        }
    }

    useEffect(() => {
        axiosInstance.get(`/product-page/${productId}`)
            .then(res => {
                console.log(res);
                if(res.data.productDetails && res.data.images){
                    setForm(res.data.productDetails);
                    setUploadedImages(res.data.images)
                }
            }).catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div className="product-popup-container">
            <div className="popup-page-form">
                <form onSubmit={productSubmission}>
                    <h1 className="product-popup-title">Add Product</h1>
                    <AiFillCloseCircle className='close-icon' onClick={() => setProductPopup(false)} />
                    <div className="two-columns-wrapper">
                        <div className="input-wrapper">
                            <label htmlFor="">Content Title</label>
                            <input type="text" name='content_title' value={form.content_title} className="home-input" onChange={(event) => setForm({ ...form, [event.target.name]: event.target.value })} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="">Content</label>
                            <textarea name="content" id="" cols="30" value={form.content} rows="10" className="home-input" onChange={(event) => setForm({ ...form, [event.target.name]: event.target.value })}></textarea>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="">Proudcts Title</label>
                            <input type="text" name='product_title' value={form.product_title} className="home-input" onChange={(event) => setForm({ ...form, [event.target.name]: event.target.value })} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="">Images</label>
                            <ImageUploader type={"multiple"} passImage={setImages} />
                        </div>
                    </div>
                    <button className="btn-submit">Upload</button>
                </form>
                <div className="images-container">
                    {
                        uploadedImages && uploadedImages[0] &&
                        uploadedImages.map((item,index) => (
                            <div className="images-wrap" key={index}>
                                <img src={config.backendURL+item.img} alt="" className="image" />
                                <div className="images-delete-overlay">
                                    <AiFillDelete className='delete-icon' onClick={() => deleteImage(item.id)}/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
