import React from "react"
import profile from "../Images/profile.png"
import comment from "../Images/comment.png"
import like from "../Images/like.png"
import reactImage from "../Images/react.png"
import JS from "../Images/js.png"
import cSharp from "../Images/c#.png"
import node from "../Images/node.png"



export default function BlogPost () {

    const blogPostArray = [
        {
            id: 1,
            postTitle: "C#",
            postImage: cSharp,
            postDescription: "The concept of time travel has long been a fascinating and popular topic in science fiction. The idea of being able to travel backward or forward in time, to witness historical events or explore the future, has captured the imagination of people for centuries.",
            userName: "Aman Ahmed",
            userProfilePicture: profile,
            url: "https://amanhimself.dev/blog/"
        },
        {
            id: 2,
            postTitle: "JS",
            postImage: JS,
            postDescription: "While time travel remains purely theoretical and has not been proven to be possible, it continues to be a source of endless speculation and creative exploration.",
            userName: "Khedija Ymer",
            userProfilePicture: profile,
            url: "https://albertwalicki.com/blog"
        },
        {
            id: 3,
            postTitle: "ReactJs",
            postImage: reactImage,
            postDescription: "One of the most famous theories related to time travel is Albert Einstein's theory of general relativity, which suggests that time is relative and can be affected by gravity and speed. ",
            userName: "Naol Tolosa",
            userProfilePicture: profile,
            url: "https://flaviocopes.com/"
        },
        {
            id: 4,
            postTitle: "NodeJs",
            postImage: node,
            postDescription: "According to this theory, time dilation occurs when an object is moving at a very high speed or in a strong gravitational field, causing time to pass differently for the moving object compared to a stationary observer. ",
            userName: "Aisha Khedir",
            userProfilePicture: profile,
            url: "https://ryangjchandler.co.uk/articles"
        },
        {
            id: 5,
            postTitle: "JavaScript Overview",
            postImage: JS,
            postDescription: "While this concept has been observed in experiments with high-speed particles and atomic clocks, it has not yet led to the development of a practical time machine.",
            userName: "Kebede Mekonen",
            userProfilePicture: profile,
            url: "https://jxnblk.com/blog/"
        },
    ]

    return (
        <>
        <div className="whole-blog-post-container">
            {
                blogPostArray.map(postInfo => {
                    return (
                        <>
                        <div className="blog-post-like-comment-container">
                            <Box key={postInfo.id}  {...postInfo}/>
                            <input className="blog-comment" placeholder="Add a comment here..." />
                            <div ></div>
                        </div>
                        </>
                    )
                })
            }
        </div>
        </>
    )
}

function Box ({...postInfo}) {

    const { id, url, postImage, postDescription, userName, userProfilePicture, postTitle } = postInfo

    return (
        <>
        <div className="each-blog-post-container">
            <img src={postImage} className="blog-post-image" />
            <div>
                <a href={url} className="blog-post-link">
                <div className="blog-user-profile">
                    <img src={userProfilePicture} className="blog-user-profile-picture" />
                    <div className="blog-user-name">{userName}</div>
                </div>
                </a>

                <div className="blog-post-title">{postTitle}</div>
                <div>{postDescription}</div>
            </div>
        </div>
        </>
    )
}