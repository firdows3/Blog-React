import React, { useEffect, useState } from "react"
import imageIcon from "./Images/image.png"
import Picker from 'emoji-picker-react'
import { useNavigate } from "react-router-dom"

export default function AddBlog({ blogPostArray, setBlogPostArray, italic, setItalic, bold, setBold, center, setCenter, underline, setUnderline}){

    const [image, setImage] = useState(null)
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [active, setActive] = useState([])
    const [visiblePicker, setVisiblePicker] = useState(false);
    const [currentEmoji, setCurrentEmoji] = useState('')
    const navigate = useNavigate();
    
    const addImage = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]))
    }

    const addDescription = (event) => {
        event.preventDefault();
        const { value } = event.target;
        setDescription(value)
    }

    const addTitle = (event) => {
        const { value } = event.target;
        setTitle(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setBlogPostArray([{id: Math.floor(Math.random() * 1000), postDescription: description, postImage: image, postTitle: title, isBold: bold, isItalic: italic, isUnderlined: underline, isCenter: center}, ...blogPostArray])
        setDescription('')
        navigate(-1)
    }

    const toggleActive = (iconId) => {
        let updatedIcons;
    
        if (active.includes(iconId)) {
          updatedIcons = active.filter((id) => id !== iconId);
        } else {
          updatedIcons = [...active, iconId];
        }
    
        setActive(updatedIcons);
      };

      const onEmojiClick = (event, emojiObject) => {
        setCurrentEmoji(event.emoji)
        setVisiblePicker(false)
    }
    
    useEffect(()=>{
        console.log(currentEmoji);
          setDescription(prevDescription => prevDescription + currentEmoji)
      }, [currentEmoji])

    return (
        <>
        <div className="add-blog-container">
            {image == null || image == '' ? <></>:<img src={image} className="add-image-visualization" />}          
            <form onSubmit={handleSubmit} className="blog-add-form">
                <div>
                    <label className="blog-add-picture"><img src={imageIcon} className="add-image-icon" />Add picture
                        <input type="file" className="add-blog-input" onChange={addImage} />
                    </label>
                </div>
                <div className="add-image-feature-icons">
                    <h4 className={active.includes(1)? "add-image-each-feature active-icon" : "add-image-each-feature"} 
                    onClick={() => {
                        setBold(!bold)
                        toggleActive(1)
                    }}>B</h4>
                    <h4 className={active.includes(2)? "add-image-each-feature active-icon" : "add-image-each-feature"} 
                    onClick={() => {
                        setItalic(!italic)
                        toggleActive(2)
                    }}>I</h4>
                    <h4 className={active.includes(3)? "add-image-each-feature active-icon" : "add-image-each-feature"} 
                    onClick={() => {
                        setUnderline(!underline)
                        toggleActive(3)
                    }}>U</h4>
                    <h4 className={active.includes(4)? "add-image-each-feature active-icon" : "add-image-each-feature"} 
                    onClick={() => {
                        setCenter(!center)
                        toggleActive(4)
                    }}>C</h4>
                </div>
                <input className="add-blog-input-title" placeholder="Add title" onChange={addTitle} />
                <div className="add-blog-description-emoji">
                    <textarea type="text" className="add-blog-input-description" placeholder="Add Text" value={description} onChange={addDescription} />
                    <div onClick={()=>setVisiblePicker(!visiblePicker)} className='emoji-picker'>&#128522;</div>
                {
                    visiblePicker?<div>
                        <Picker onEmojiClick={onEmojiClick}/>
                    </div>:<></>
                }
                </div>
                <div className="add-blog-buttons">
                    <button className="blog-button" type="submit">Add</button>
                </div>
            </form>
        </div>
        </>
    )
}