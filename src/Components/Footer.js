import React from "react"
import "./Styles/Footer.css"
import instagram from "./Images/insta.png"
import tiktok from "./Images/tiktok.webp"
import github from "./Images/git.png"
import { Link } from "react-router-dom"

export default function Footer (){

    return (
        <>
        <div className="whole-footer-container">
            <div className="footer-top">
                <div className="footer-left">Dev's Blog</div>
                <div className="blog-header-right">
                    <div className="footer-link">Contact Us</div>
                    <div className="footer-link">About Us</div>
                    <div className="footer-link">FAQs</div>
                    <div className="footer-link">Privacy and policy</div>
                </div>
                <div className="footer-right">
                    <img src={github} className="footer-icon" />
                    <img src={tiktok} className="footer-icon" />
                    <img src={instagram} className="footer-icon" />
                </div>
            </div>
            <div className="footer-bottom">&copy;Dev's Blog. All rights reserved.</div>
        </div>
        </>
    )
}