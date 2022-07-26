import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import AdminPageManager from '../../../../APIServices/AdminPageManager'
import axiosInstance from '../../../../Axios/axiosInstance'
import { useLoader } from '../../../../contexts/loadingContext'
import ImageUploader from '../../../Utils/ImageUploader/ImageUploader'
import PrimaryTable from '../../../Utils/PrimaryTable/PrimaryTable'

let tableHeader = {
    section1: ['SiNo','Title','Description','Delete'],
    section2: ['SiNo','Item','Discount','Price','Discount Price','Delete'],
    section3: ['SiNo','Discount','Delete']
}

export default function SpecialOfferManager() {
    const { section } = useParams()
    const [sec1Image,setSec1Image] = useState(null)
    const [firstSection,setFirstSection] = useState({title:'',content:''});
    const [sectionData,setSectionData] = useState([])
    const [sec2Image,setSec2Image] = useState(null);
    const [secondSection,setSecondSection] = useState({title:'',discount:'',price: ''})
    const [discount,setDiscount] = useState(0);
    const [sec3Image,setSec3Image] = useState(null)
    const [loading,setLoading] = useLoader()

    useEffect(() => {
        AdminPageManager.getSectionItems('specialoffers',2)
            .then(data => {
                setSectionData(data)
            })
    },[section])
    
    // const handleFirstForm = async (event) => {
    //     event.preventDefault();
    //     setLoading(true)
    //     if(sec1Image){
    //         let isUpload = await AdminPageManager.uploadForm('specialoffers',1,{...firstSection,img:sec1Image})
    //         setFirstSection({title:'',content:''})
    //         setSec1Image(null)
    //     }else{
    //         toast.error("Image is required!");
    //     }
    //     setLoading(false)
    // }

    const handleSecondForm = (event) => {
        event.preventDefault();
        setLoading(true)
        if(sec2Image){
            AdminPageManager.uploadForm('specialoffers',2,{...secondSection,img: sec2Image})
            setSecondSection({title:'',discount:''})
            setSec2Image(null)
        }else{
            toast.error("Image is required!")
        }
        setLoading(false)
    }

    // const handleThirdForm = (event) => {
    //     event.preventDefault();
    //     setLoading(true)
    //     if(sec3Image){
    //         AdminPageManager.uploadForm('specialoffers',section,{discount: discount,img: sec3Image})
    //         setDiscount('')
    //         setSec3Image(null)
    //     }else{
    //         toast.error("Image is required!")
    //     }
    //     setLoading(false)
    // }

    const deleteTableRow = async(id) => {
        setLoading(true)
        await AdminPageManager.deleteItem('specialoffers',2,id)
        setLoading(false)
    }

    return (
        <section className="home-page-manager">
            {
                // section == 1 ?
                //     <>
                //         <form className="home-page-form" onSubmit={handleFirstForm}>
                //             <div className="two-columns-wrapper">
                //                 <div className="input-wrapper">
                //                     <label htmlFor="">Title</label>
                //                     <input type="text" name='title' className='home-input' required onChange={(e) => setFirstSection({...firstSection,[e.target.name]:e.target.value})}/>
                //                 </div>
                //                 <div className="input-wrapper">
                //                     <label htmlFor="">Description</label>
                //                     <textarea name="content" className='home-input' id="" cols="30" required rows="10" onChange={(e) => setFirstSection({...firstSection,[e.target.name]:e.target.value})}></textarea>
                //                 </div>
                //                 <div className="input-wrapper">
                //                     <label htmlFor="">Image</label>
                //                     <ImageUploader name="SPECIAL_OFFER_CAROUSEL" passImage={setSec1Image} isFileAvailable={sec1Image ? true: false} />
                //                 </div>
                //             </div>
                //             <button className="btn-submit">Upload</button>
                //         </form>
                //         <div className="table-wrapper">
                //             <PrimaryTable tableHeader={tableHeader.section1} tableBody={sectionData} deleteCol={true} deleteRow={deleteTableRow} />
                //         </div>
                //     </>
                //     : section == 2 ?
                    <>
                        <form className="home-page-form" onSubmit={handleSecondForm}>
                            <div className="two-columns-wrapper">
                                <div className="input-wrapper">
                                    <label htmlFor="">Item</label>
                                    <input type="text" name='title' className='home-input' required onChange={(e) => setSecondSection({...secondSection,[e.target.name]: e.target.value})}/>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="">Discount</label>
                                    <input type="number" name="discount" required onChange={(e) => setSecondSection({...secondSection,[e.target.name]: e.target.value})} className='home-input' id="" />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="">Price</label>
                                    <input type="number" name="price" required onChange={(e) => setSecondSection({...secondSection,[e.target.name]: e.target.value})} className='home-input' id="" />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="">Image</label>
                                    <ImageUploader name="SECOND_CAROUSEL_IMAGE"  passImage={setSec2Image} isFileAvailable={sec2Image? true: false} />
                                </div>
                            </div>
                            <button className="btn-submit">Upload</button>
                        </form>
                        <div className="table-wrapper">
                            <PrimaryTable tableHeader={tableHeader.section2} tableBody={sectionData} deleteCol={true} deleteRow={deleteTableRow} />
                        </div>
                    </>
                    // : section == 3 ?
                    // <>
                    //     <form className="home-page-form" onSubmit={handleThirdForm}>
                    //         <div className="two-columns-wrapper">
                    //             <div className="input-wrapper">
                    //                 <label htmlFor="">Discount</label>
                    //                 <input type="number" name="discount" required onChange={(e) => setDiscount(e.target.value) } className='home-input' id="" />
                    //             </div>
                    //             <div className="input-wrapper">
                    //                 <label htmlFor="">Image</label>
                    //                 <ImageUploader name="THIRD_CAROUSEL_IMAGE"  passImage={setSec3Image} isFileAvailable={sec3Image? true: false} />
                    //             </div>
                    //         </div>
                    //         <button className="btn-submit">Upload</button>
                    //     </form>
                    //     <div className="table-wrapper">
                    //         <PrimaryTable tableHeader={tableHeader.section3} tableBody={sectionData} deleteCol={true} deleteRow={deleteTableRow}/>
                    //     </div>
                    // </>
                    // : null
            }
        </section>
    )
}
