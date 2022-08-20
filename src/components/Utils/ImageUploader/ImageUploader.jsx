import React, { useState } from 'react'
import { useEffect } from 'react'
import imageUploaderIcon from '../../asset/image-uploader.png'
import './ImageUploader.css'

export default function ImageUploader({ name, passImage, isFileAvailable, type, value }) {
    const [file, setFile] = useState(null)
    const [url, setUrl] = useState(null)
    const [text, setText] = useState(null)

    useEffect(() => {
        if (!isFileAvailable) {
            setUrl(null)
            setFile(null)
            passImage && passImage(null)
        }
    }, [isFileAvailable])

    const dragOver = (event) => {
        event.preventDefault()
        event.target.classList.add("image-uploader-drag")
        console.log(event);
    }

    const dragLeave = (event) => {
        event.preventDefault();
        event.target.classList.remove("image-uploader-drag")
    }

    const dropHandler = (event) => {
        event.preventDefault()
        event.target.classList.remove("image-uploader-drag")
        setFile(event.dataTransfer.files[0])
        setUrl(URL.createObjectURL(event.dataTransfer.files[0]))
        passImage(event.dataTransfer.files[0])
    }

    const inputChangeHandler = (event) => {
        event.preventDefault()
        event.target.classList.remove("image-uploader-drag")
        if (type === "multiple") {
            setFile(event.target.files);
            passImage(event.target.files)
            setText(event.target.files.length + " images added.")
        } else {
            setFile(event.target.files[0])
            setUrl(URL.createObjectURL(event.target.files[0]))
            passImage(event.target.files[0])
        }
    }

    const editFile = (event) => {
        event.preventDefault();
        let input = document.createElement('input');
        input.setAttribute('type','file')
        input.click()
        input.addEventListener('change',(event) => {
            setFile(event.target.files[0])
            setUrl(URL.createObjectURL(event.target.files[0]))
            passImage(event.target.files[0])
        })
    }
    return (
        <div className="upload-wrapper">
            <label htmlFor={name} className="image-uploader" onDragOver={dragOver} onDragLeave={dragLeave} onDrop={dropHandler}>
                {
                    (url || value) ?
                        <img src={url? url :(typeof value === "string")? value: URL.createObjectURL(value)} className="file-preview" alt="" />
                        : text ?
                            <span>{text}</span>
                            :
                            <>
                                <span>
                                    <img src={imageUploaderIcon} className="image-uploader-icon" alt="" />
                                    Drag and Drop or Browse File
                                </span>
                                <input type="file" name={name} id={name} multiple={type === "multiple" ? true : false} className="image-input" onChange={inputChangeHandler} />
                            </>
                }
            </label>
            {
                (url || text || value)&&
                <button onClick={editFile} className="edit-btn">Edit</button>
            }
        </div>
    )
}
