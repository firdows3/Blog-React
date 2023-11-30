import React, { useState } from "react"
import profile from "../Images/profile.png"


export default function LatestBlog() {

    const latestBlogArray = [
        {
            id: 1,
            latestBlogDescription: "The concept of time travel has long been a fascinating and popular topic in science fiction.",
            userName: "Ahlam Khalid",
            userProfilePicture: profile,
            url: "https://jxnblk.com/blog/"
        },
        {
            id: 2,
            latestBlogDescription: "While time travel remains purely theoretical and has not been proven to be possible, it continues.",
            userName: "Naif Ibrahim",
            userProfilePicture: profile,
            url: "https://ryangjchandler.co.uk/articles"
        },
        {
            id: 3,
            latestBlogDescription: "One of the most famous theories related to time travel is Albert Einstein's theory of general relativity. ",
            userName: "Robenus Bedru",
            userProfilePicture: profile,
            url: "https://flaviocopes.com/"
        },
        {
            id: 4,
            latestBlogDescription: "According to this theory, time dilation occurs when an object is moving at a very high speed or in a strong. ",
            userName: "Khelil Tofiq",
            userProfilePicture: profile,
            url: "https://albertwalicki.com/blog"
        },
        {
            id: 5,
            latestBlogDescription: "While this concept has been observed in experiments with high-speed particles and atomic clocks, it has not yet led to.",
            userName: "Abraham ylma",
            userProfilePicture: profile,
            url: "https://amanhimself.dev/blog/"

        },
    ]

    return (
        <>
        <div className="whole-latest-blog-container">
        <div className="latest-blog-header">Latest Blogs</div>
            {
                latestBlogArray.map(latestBlog => {
                    return <Box key={latestBlog.id} {...latestBlog} />
                })
            }
        </div>
        </>
    )
}

function Box ({...latestBlog}) {

    const { url, latestBlogDescription, userName, userProfilePicture} = latestBlog;
    const [expanded, setExpanded] =useState(false)

    return (
        <>
        <div className="each-latest-blog-container">
            <div>{expanded ? latestBlogDescription : `${latestBlogDescription.slice(0, 80)}...`}</div> 
            <div className="latest-blog-user-profile">
                <img src={userProfilePicture} className="latest-blog-user-profile-picture" />
                <div className="latest-blog-user-name">{userName}</div>
            </div>
            {latestBlogDescription.length >= 80 ? <div onClick={() => setExpanded(!expanded)}>
                {expanded?<div className="see-more-button">See less</div>:<div className="see-more-button">See More</div>}
            </div>:<></>}
        </div>
        </>
    )
}