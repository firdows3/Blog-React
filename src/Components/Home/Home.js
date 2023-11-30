import React from "react"
import BlogPost from "./BlogPost"
import LatestBlog from "./LatestBlog"
import "../Styles/Home.css"
import logo from "../Images/logo.webp"

export default function (){

    return (
        <>
        <div className="blog-home-container">
            <BlogPost />
            <LatestBlog />
        </div>
        </>
    )
}