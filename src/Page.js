import React, { useEffect } from 'react';
import Granim from "granim"; 
import Logo from "./logo.png"
import "./Page.css"

const Page = () => {
    useEffect(() => {
        document.title = "ElpeeCo"
    },[])
    useEffect(() => {
        new Granim({
            element: "#logo-canvas",
            direction: "diagonal",
            opacity: [0.5, 0.5],
            states: {
                "default-state": {
                    gradients: [
                        ["#5CD7F2", "#194693"],
                        ["#184ABC", "#4BB2F2"],
                        ["#2156B2", "#152238"],
                    ],
                    transitionSpeed: 3000, 
                }
            }
        })
    },[])
    
    return (
        <div className="bloc-logo">
            <a href="mailto:elpeeco@elpee.co.in?subject=Website Redirect" className="cta">
                <div className="contact">
                    <h2>Get in Touch!</h2>
                </div>
            </a>
            <div className="logo-mask">
                <div className="content">
                    <img src={Logo} className="elpeeco" alt="" width="40%" />
                    <h1>Coming Soon.</h1>
                    <h2>Our Website is currently Under Construction!</h2>
                </div>
            </div>
            <canvas id="logo-canvas"/>
            
        </div>
    )
}
export default Page;

