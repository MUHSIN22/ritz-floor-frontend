import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageUploader from '../../../Utils/ImageUploader/ImageUploader'
import PrimaryTable from '../../../Utils/PrimaryTable/PrimaryTable'
import './HomePageManager.css'
import aboutImage from '../../../asset/laminate-m-380x254.jpg';
import axiosInstance from '../../../../Axios/axiosInstance'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import config from '../../../../Constants/config'
import AdminPageManager from '../../../../APIServices/AdminPageManager'

let tableHeader = ["SiNo", "Title", "Delete Item"]

const testimonials = {
  tableHeader: ['SiNo', 'Name', 'Testimonial', 'Delete'],
  tableBody: [
    {
      sino: 1,
      name: "Muhsin",
      testimonials: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illum excepturi ratione impedit, ipsam maiores quae totam sunt aperiam iste!",
      delete: 'delete'
    },
    {
      sino: 2,
      name: "Muhsin",
      testimonials: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illum excepturi ratione impedit, ipsam maiores quae totam sunt aperiam iste!",
      delete: 'delete'
    },
    {
      sino: 3,
      name: "Muhsin",
      testimonials: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illum excepturi ratione impedit, ipsam maiores quae totam sunt aperiam iste!",
      delete: 'delete'
    },
    {
      sino: 4,
      name: "Muhsin",
      testimonials: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illum excepturi ratione impedit, ipsam maiores quae totam sunt aperiam iste!",
      delete: 'delete'
    },
    {
      sino: 5,
      name: "Muhsin",
      testimonials: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illum excepturi ratione impedit, ipsam maiores quae totam sunt aperiam iste!",
      delete: 'delete'
    },
  ]
}

export default function HomePageManager() {
  const { section } = useParams();
  const [sec1Image, setSec1Image] = useState(null)
  const [firstSection, setFirstSection] = useState({
    title: null
  })
  const [firstSectionData, setFirstSectionData] = useState([])
  const [sec2Image, setSec2Image] = useState(null);
  const [secondSection, setSecondSection] = useState({
    title: '',
    content: '',
  })
  const [secondSectionData, setSecondSectionData] = useState(null)
  const [thirdSection,setThirdSection] = useState({name:'',content:''});
  const [sec3Image,setSec3Image] = useState(null);
  const [thirdSectionData,setThirdSectionData] = useState([])


  useEffect(() => {
    if (section == 1) {
      getFirstSection();
    }else if (section == 2){
      getSecondSection();
    }else if(section == 3){
      AdminPageManager.getSectionItems('homepage',3)
        .then(res => {
          setThirdSectionData(res)
        })
    }
  }, [section])

  const handleFirstSectionSubmission = (event) => {
    event.preventDefault()
    if (firstSection.title && sec1Image) {
      let formData = new FormData();
      formData.append('title', firstSection.title);
      formData.append('img', sec1Image);
      axiosInstance.post('/crousels/homepage/section-1', formData)
        .then(res => {
          console.log(res);
          if (res.data.success) {
            toast.success("Uploaded successfully")
            setSec1Image(null)
            setFirstSection({ title: '' })
          } else {
            toast.error("Something went wrong!")
          }
        }).catch(err => {
          toast.error("Something went wrong!")
        })
      }
  }

  const getFirstSection = () => {
    axiosInstance.get('/crousels/get-content/homepage/section-1')
      .then(res => {
        setFirstSectionData(res.data.items)
      }).catch(err => {
        toast.error("Something went wrong with fetching!")
      })
  }

  const deleteSection1 = (id, index) => {
    let isConfirmed = window.confirm("Are you sure to delete?");
    if (isConfirmed) {
      axiosInstance.delete('/crousels/delete-content/homepage/section-1/' + id)
        .then(res => {
          if (res.data.success) {
            toast.success("Item deleted successfully")
            window.location.reload()
          } else {
            toast.error("Something went wrong")
          }
        }).catch(err => {
          toast.error("Something went wrong")
        })
    }
  }

  const handleSecondSection = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append('title', secondSection.title);
    formData.append('content', secondSection.content)
    formData.append('img', sec2Image);
    if (sec2Image) {
      axiosInstance.put(`/crousels/update-content/homepage/section-2/1`, formData)
        .then(res => {
          if (res.data.success) {
            toast.success("Updated successfully!");
            setSecondSection({ title: '', content: '' })
            setSec2Image(null)
            window.location.reload();
          } else {
            toast.error("Something went wrong!");
          }
        }).catch(err => {
          toast.error("Something went wrong!")
        })
    } else {
      toast.error("Please add a image!")
    }
  }

  const getSecondSection = () => {
    axiosInstance.get('/crousels/get-content/homepage/section-2')
      .then(res => {
        console.log(res);
        setSecondSectionData(res.data.items[0])
      }).catch(err => {
        toast.error("Something went wrong with fetching!")
      })
  }

  const handleThirdSection = (event) => {
    event.preventDefault();
    AdminPageManager.uploadForm('homepage',3,{...thirdSection,img: sec3Image});
  }

  const deleteItems = (id) => {
    AdminPageManager.deleteItem('homepage',3,id);
  }

  return (
    <section className="home-page-manager">
      {
        section == 1 ?
          <>
            <form className="home-page-form" onSubmit={handleFirstSectionSubmission}>
              <div className="two-columns-wrapper">
                <div className="input-wrapper">
                  <label htmlFor="">Title</label>
                  <input type="text" name='name' value={firstSection.title} className='home-input' required onChange={(event) => setFirstSection({ title: event.target.value })} />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="">Image</label>
                  <ImageUploader name="HOME_IMAGE_1" passImage={setSec1Image} isFileAvailable={sec1Image ? true : false} />
                </div>
              </div>
              <button className="btn-submit">Upload</button>
            </form>
            <div className="table-wrapper">
              <PrimaryTable tableHeader={tableHeader} tableBody={firstSectionData} deleteCol={true} deleteRow={deleteSection1} />
            </div>
          </>
          : (section == 2) ?
            <>
              <form className="home-page-form" onSubmit={handleSecondSection}>
                <div className="two-columns-wrapper">
                  <div className="input-wrapper">
                    <label htmlFor="">Title</label>
                    <input
                      type="text"
                      name='title'
                      className='home-input'
                      value={secondSection.title}
                      required
                      onChange={(event) => setSecondSection({ ...secondSection, [event.target.name]: event.target.value })}
                    />
                  </div>
                  <div className="input-wrapper">
                    <label htmlFor="">About</label>
                    <textarea
                      name="content"
                      className='home-input'
                      cols="30"
                      rows="10"
                      required
                      value={secondSection.content}
                      onChange={(event) => setSecondSection({ ...secondSection, [event.target.name]: event.target.value })}
                    ></textarea>
                  </div>
                  <div className="input-wrapper">
                    <label htmlFor="">Image</label>
                    <ImageUploader name="HOME_IMAGE_2" passImage={setSec2Image} isFileAvailable={sec2Image ? true : false} />
                  </div>
                </div>
                <button className="btn-submit">Upload</button>
              </form>
              {
                secondSectionData &&
                <div className="content-preview-wrapper">
                  <div className="left-section">
                    <h1>{secondSectionData.title}</h1>
                    <p className="section-para">
                      {secondSectionData.content}
                    </p>
                  </div>
                  <div className="right-section">
                    <img src={config.backendURL+secondSectionData.img} className="about-image" alt="" />
                  </div>
                </div>
              }
            </>
            : (section == 3) ?
              <>
                <form className="home-page-form" onSubmit={handleThirdSection}>
                  <div className="two-columns-wrapper">
                    <div className="input-wrapper">
                      <label htmlFor="">Name</label>
                      <input type="text" name='name' required className='home-input' onChange={e=> setThirdSection({...thirdSection,[e.target.name]: e.target.value})}/>
                    </div>
                    <div className="input-wrapper">
                      <label htmlFor="">Testimonial</label>
                      <textarea name="content" required className='home-input' id="" cols="30" rows="10" onChange={e=> setThirdSection({...thirdSection,[e.target.name]: e.target.value})}></textarea>
                    </div>
                    <div className="input-wrapper">
                      <label htmlFor="">Profile</label>
                      <ImageUploader name="HOME_CAROUSEL" passImage={setSec3Image} isFileAvailable={sec3Image ? true : false}/>
                    </div>
                  </div>
                  <button className="btn-submit">Upload</button>
                </form>
                <div className="table-wrapper">
                  <PrimaryTable tableBody={thirdSectionData} tableHeader={testimonials.tableHeader}  deleteCol={true} deleteRow={deleteItems}/>
                </div>
              </>
              : null
      }
    </section>
  )
}
