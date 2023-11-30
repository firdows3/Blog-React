import React, { useState } from "react"
import "./Styles/Header.css"
import { BrowserRouter, Link } from "react-router-dom"
import menu from "./Images/menu.png"

export default function Header () {

    const [active, setActive] = useState(-1)
    const [toggle, setToggle] = useState(false);

    const navBar = [
        {
            link: "/",
            name: "Home"
        },
        {
            link: "blog",
            name: "My Blog"
        },
        {
            link: "about",
            name: "About"
        },
        {
            link: "login",
            name: "LogIn"
        }
    ]

    return (
        <>
        <link href="https://fonts.googleapis.com/css2?family=Domine&family=McLaren&family=Mrs+Sheppards&family=Young+Serif&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"/>
        <div className="blog-header">
            <div className="blog-header-left">Dev's blog</div>
            <div className={ toggle ? "blog-header-right show-header-right" : "blog-header-right"}>
                {
                    navBar.map((item, index) => {
                        return (
                            <Link 
                            className={active === index ? "blog-header-right-each-link active-link" : "blog-header-right-each-link"} 
                            to={`${item.link}`} 
                            onClick={()=>{
                                setActive(index);
                                setToggle(!toggle);
                            }}>{item.name}</Link>
                        )
                    })
                }
            </div>
            <img className="blog-header-right-menu" onClick={() => setToggle(!toggle)} src={menu} />
        </div>
        </>
    )
}