import React, { useEffect, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';
import axiosInstance from '../../../Axios/axiosInstance';
import config from '../../../Constants/config';
import { useLoader } from '../../../contexts/loadingContext';
import ImageUploader from '../../Utils/ImageUploader/ImageUploader';

export default function KnowledgeSeries() {
    const [images, setImages] = useState(null);
    const [form, setForm] = useState({ content_title: "", content: "", product_title: '' });;
    const [uploadedImages, setUploadedImages] = useState();
    const [loading,setLoading] = useLoader();

    const productSubmission = (event) => {
        event.preventDefault();
        setLoading(true)
        let formData = new FormData();
        formData.append('content_title', form.content_title)
        formData.append('content', form.content)
        formData.append('product_title', form.product_title)
        if(images && images[0]){
            for (let i = 0; i < images.length; i++) {
                formData.append('images', images[i]);
            }
        }
        axiosInstance.put(`/knowledge-series`, formData)
            .then(res => {
                setLoading(false)
                if (res.data.success) {
                    toast.success(res.data.message)
                } else {
                    toast.error(res.data.message)
                }
            }).catch(err => {
                setLoading(false)
                toast.error("Something went wrong with uploading. Try again!");
            })
    }

    const deleteImage = (id) => {
        console.log(id);
        setLoading(true)
        let confirm = window.confirm("Are you sure to delete?")
        if(confirm){
            axiosInstance.delete('/knowledge-series/image/'+id)
                .then(res => {
                    setLoading(false)
                    toast.success(res.data.message)
                    setUploadedImages(prev => prev.filter(item => item.id !== id));
                }).catch(err => {
                    setLoading(false)
                    toast.error("Something went wrong. Try again!")
                })
        }
    }

    useEffect(() => {
        axiosInstance.get(`/knowledge-series`)
            .then(res => {
                console.log(res);
                if(res.data.productDetails && res.data.images){
                    setForm(res.data.productDetails);
                    console.log(res.data);
                    setUploadedImages(res.data.images)
                }
            }).catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <div className="knowledge-series-wrapper home-page-manager">
            <form onSubmit={productSubmission}>
                <h1 className="product-popup-title">Knowledge Series</h1>
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
                    uploadedImages.map((item, index) => (
                        <div className="images-wrap" key={index}>
                            <img src={config.backendURL + item.img} alt="" className="image" />
                            <div className="images-delete-overlay">
                                <AiFillDelete className='delete-icon' onClick={() => deleteImage(item.id)} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
