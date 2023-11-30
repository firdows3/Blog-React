import React from "react"
import "./Styles/About.css"
import Me from "./Images/mine.jpg"
import phone from "./Images/call.png"
import tikTok from "./Images/tiktok.webp"
import instagram from "./Images/insta.png"
import gitHub from "./Images/git.png"

export default function About () {

    return (
        <>
        <div className="about-container">
            <div className="about-top">
                <div>
                    <img src={Me} className="about-image" />
                    <div className="about-contacts">
                        <img src={phone} className="about-contact-icon" />
                        <img src={tikTok} className="about-contact-icon" />
                        <img src={instagram} className="about-contact-icon" />
                        <img src={gitHub} className="about-contact-icon" />
                    </div>
                </div>
                <div>
                    <div className="about-title">About Me</div>
                    <div className="aboutme-description">Hey there, I'm Firdows Bedru, the creator of Dev's Blog. I'm a Software Engineering student with some experience on Front end web development. My journey into the world of coding began when I met someone who knows more about Software engineering, who then showed me the way to this path. At Dev's Blog, my goal is to serve as your guide through the dynamic realm of technology. Through insightful articles, tutorials, and resources, I aim to simplify complex concepts, share practical tips, and keep you updated on the latest trends. Let's embark on a coding adventure together, bridging the gap between ideas and innovative solutions while nurturing a supportive community of developers passionate about honing their craft. Join me in this coding odyssey as we explore, create, and evolve together. Together, let's code a future where possibilities are limitless.</div>
                </div>
            </div>
            <div className="about-bottom">
                <div className="about-title">Purpose of Dev's Blog</div>
                <div>Dev's Blog is a digital haven curated for developers seeking to excel in Web Development. Our mission is to equip developers of all levels, from novices to seasoned professionals, with comprehensive resources and insights that streamline learning, spark creativity, and empower problem-solving skills. Through in-depth tutorials, insightful articles, and practical guides, we strive to demystify complex coding concepts and provide actionable tips that fuel continuous growth. Our goal is to cultivate a vibrant community where knowledge is freely shared, innovative ideas thrive, and curiosity is celebrated. Dev's Blog aims to be your go-to platform for honing skills and staying ahead in the ever-evolving tech landscape. Join us on this quest for knowledge, collaboration, and mastery in coding. Together, let's navigate the intricacies of development, bridge gaps in understanding, and build a supportive community dedicated to fostering excellence in the world of technology.</div>
            </div>
        </div>
        </>
    )
}