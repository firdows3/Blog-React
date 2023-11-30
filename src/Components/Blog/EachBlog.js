import React from "react"
import { useParams } from "react-router-dom"
import "../Styles/Blog.css"

export default function EachBlog ({ blogPostArray }){

    const { id } = useParams()
    console.log(blogPostArray[0].id);
    
    const eachBlogPost = blogPostArray.filter(item => item.id == id)
    console.log(eachBlogPost[0]);

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
        </div>
        </>
    )
}