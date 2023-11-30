import React, { useState } from "react"
import profile from "../Images/profile.png"
import comment from "../Images/comment.png"
import like from "../Images/like.png"
import "../Styles/Blog.css"
import { Link } from "react-router-dom"

export default function Blog ({ blogPostArray, setBlogPostArray}) {


    return (
        <>
        <div className="whole-blog-container">
            <div className="blog-container">
                {
                    blogPostArray.map(postInfo => {
                        return (
                            <>
                            <div>
                                <Box key={postInfo.id}  {...postInfo}/>
                            </div>
                            </>
                        )
                    })
                }
            </div>
            <div className="blog-right-container">
                <div className="blog-user-profile-container">
                    <img src={profile} className="blog-user-profile-picture-container" />
                    <div>User Name</div>  
                </div>          
                <div className="blog-right-bottom">
                    <Link to="addBlog"><button className="blog-button">Add blog</button></Link>
                </div>
            </div>
        </div>
        </>
    )
}

function Box ({...postInfo}) {

    const { id, postImage, postDescription, postTitle, isBold, isCenter, isUnderlined, isItalic } = postInfo

    return (
        <>
        <div className="each-blog-post-container">
            <img src={postImage} className="blog-post-image each-blog-post-image" />
            <div className="blog-post-description">
                <Link to={`${id}`}><div className="blog-post-title">{postTitle}</div></Link>
                <div
                  style={{
                    fontWeight: isBold ? "bold" : "normal",
                    fontStyle: isItalic ? "italic" : "normal",
                    textDecoration: isUnderlined ? "underline" : "none",
                    textAlign: isCenter ? "center" : "left"
                  }}
                >{postDescription}</div>
            </div>
        </div>
        </>
    )
}