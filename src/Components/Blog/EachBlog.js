import React, { useState } from "react"
import { useParams } from "react-router-dom"
import "../Styles/Blog.css"

export default function EachBlog ({ blogPostArray, setBlogPostarray }){

    const { id } = useParams()
    console.log(blogPostArray[0].id);

    const [isEditing, setIsEditing] = useState(false)
    
    const eachBlogPost = blogPostArray.filter(item => item.id == id)
    console.log(eachBlogPost[0]);
    const [editDescription, setEditDescription] = useState(eachBlogPost[0].postDescription);
    const [editTitle, setEditTitle] = useState(eachBlogPost[0].postTitle) 

    const handleTitleChange = (event) => {
        event.preventDefault();
        setEditTitle(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        event.preventDefault();
        setEditDescription(event.target.value);
    }

    const handleSubmit = () => {
        const edited = blogPostArray.map(item => {
            if(item.id === eachBlogPost[0].id){
                return {...item, postTitle: editTitle, postDescription: editDescription}
            }
            else return item
        })
        console.log(edited);
        setBlogPostarray(edited);
        setIsEditing(false)
    }

    return(
        <>
        <div className="each-blog-whole-container">
            <div className="each-blog-container">
                <img className="each-blog-post-picture" src={eachBlogPost[0].postImage} />
                <div className="blog-post-descritpion">
                    <div className="blog-post-title each-blog-title">{eachBlogPost[0].postTitle}</div>
                    <div>{eachBlogPost[0].postDescription}</div>
                </div>
            </div>
            <div className="each-blog-comments">
                <div className="each-blog-comments-header">Comments</div>
            </div>
        <div onClick={()=> setIsEditing(true)} className="each-blog-edit-button">Edit</div>
        </div>
        {
            isEditing ? 
            <>
            <div className="each-blog-edit-inputs">
                <input className="each-blog-edit-input" placeholder="Edit title" value={editTitle} onChange={handleTitleChange}/>
                <textarea className="each-blog-edit-input edit-description" placeholder="Edit description" value={editDescription} onChange={handleDescriptionChange} />
                <div className="each-blog-edit-button" onClick={handleSubmit}>Done</div>
            </div>
            </>:
            <></>
        }
        </>
    )
}