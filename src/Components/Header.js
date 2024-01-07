import React, { useEffect, useState } from "react"
import "./Styles/Header.css"
import { BrowserRouter, Link, useLocation } from "react-router-dom"
import menu from "./Images/menu.png"

export default function Header () {

    const [toggle, setToggle] = useState(false);

    const location = useLocation();
    const [routes, setRoutes] = useState(location.pathname)
    useEffect(()=>{
        if(location.pathname.split('/')[1] === ''){
            setRoutes('/')
        }
        else{
            setRoutes(location.pathname.split('/')[1])

        }
        console.log(routes);
    }, [location.pathname])

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
                        console.log(item.link, routes, (routes.includes(item.link) && item.link !=='/'), item.link === '/' || (routes.includes(item.link) && item.link !=='/'));
                        return (
                            <Link 
                            className={ item.link === routes ? "blog-header-right-each-link active-link" : "blog-header-right-each-link"} 
                            to={`${item.link}`} 
                            onClick={()=>{
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