import { useMediaQuery } from 'react-responsive'
import React from "react";
import { Outlet, Link } from "react-router-dom";
//import logo from "./images/ice.png";
import cards from "./images/cards.png";
import instagram from "./images/instagram.png";
import facebook from "./images/facebook.png";
import linkedin from "./images/linkedin.png";

function Footer() {

    const footerStyle = {
        backgroundColor: "#06184e",
        padding: "20px"
    };

    const sub1 = {
        display: "flex",
        paddingLeft: "30px"
    };

    const sub2 = {
        display: "grid"
    };

    const inlineStyle = {
        verticalAlign: "top",
        marginRight: "100px",
    };

    const inlineStyleSmall = {
        paddingBottom: "40px",
    };

    const socialStyle = {
        textDecoration: "none",
        color: "white",
        marginRight: "50px",
        marginBottom: "20px"
    };

    const copyRight = {
        color: "white",
        textDecoration: "none",
        fontWeight: "bolder"
    };

    const overHandler =(e)=> {
        e.target.style.textDecoration = "underline";
    };

    const outHandler =(e)=> {
        e.target.style.textDecoration = "none";
    };

    const isBigScreen = useMediaQuery({ query: '(min-width: 800px)' });
    const isSmallScreen = useMediaQuery({ query: '(max-width: 799px)' });


    return (
        <>
        <div style={footerStyle}>

            {isBigScreen && <div style={sub1}>
            
            <div style={inlineStyle}><div style={{display: "grid", color: "white", lineHeight: "25px"}}>
                <h4 style={{letterSpacing: "1px"}}>CONTACT</h4>
                <b>Address</b>
                <span>Old Baale's Palace.16 Agungi Ajinran Rd, Lekki</span>
                <b>Email</b>
                <span>info@iceplanet.store | iceplanetstores@gmail.com</span>
                <b>Phone</b>
                <span>08188111333 | 08075210001</span>
            </div></div>

            <div style={inlineStyle}>
                <div style={{marginBottom: "50px"}}>
                    <h4 style={{letterSpacing: "1px", color: "white"}}>SOCIAL MEDIA</h4>
                    <a style={socialStyle} href="https://www.instagram.com/iceplanetstore/"><img style={{width: "27px"}} src={instagram} alt="instagram"/></a>
                    <a style={socialStyle} href="https://www.facebook.com/iceplanetstorelagos"><img style={{width: "27px"}} src={facebook} alt="facebook"/></a>
                    <a style={socialStyle} href="https://www.linkedin.com/company/ice-planet-cold-store"><img style={{width: "27px"}} src={linkedin} alt="linkedin"/></a>
                </div>
                <div>
                    <h4 style={{letterSpacing: "1px", color: "white"}}>PAYMENT OPTIONS</h4>
                    <img src={cards} alt="payments"/>
                </div>
            </div>

            <div style={inlineStyle}><div style={{display: "grid", color: "white", lineHeight: "25px"}}>
                <h4>RESOURCES</h4>
                <Link to="/shop" onMouseOver={overHandler} onMouseOut={outHandler} style={{color: "white", textDecoration: "none"}}>&#62;&nbsp;Shop</Link>
                <Link to="/cart" onMouseOver={overHandler} onMouseOut={outHandler} style={{color: "white", textDecoration: "none"}}>&#62;&nbsp;Cart</Link>
                <Link to="/contact" onMouseOver={overHandler} onMouseOut={outHandler} style={{color: "white", textDecoration: "none"}}>&#62;&nbsp;Contact</Link>
                <Link to="/about" onMouseOver={overHandler} onMouseOut={outHandler} style={{color: "white", textDecoration: "none"}}>&#62;&nbsp;About Us</Link>
            </div></div>
            </div>}

            {isSmallScreen && <div style={sub2}>
            
            <div style={inlineStyleSmall}><div style={{display: "grid", color: "white", lineHeight: "25px"}}>
                <h4 style={{letterSpacing: "1px"}}>CONTACT</h4>
                <b>Address</b>
                <span>Old Baale's Palace.16 Agungi Ajinran Rd, Lekki</span>
                <b>Email</b>
                <span>info@iceplanet.store | iceplanetstores@gmail.com</span>
                <b>Phone</b>
                <span>08188111333 | 08075210001</span>
            </div></div>

            <div style={inlineStyleSmall}>
                <div style={{marginBottom: "20px"}}>
                    <h4 style={{letterSpacing: "1px", color: "white"}}>SOCIAL MEDIA</h4>
                    <a style={socialStyle} href="https://www.instagram.com/iceplanetstore/"><img style={{width: "27px"}} src={instagram} alt="instagram"/></a>
                    <a style={socialStyle} href="https://www.facebook.com/iceplanetstorelagos"><img style={{width: "27px"}} src={facebook} alt="facebook"/></a>
                    <a style={socialStyle} href="https://www.linkedin.com/company/ice-planet-cold-store"><img style={{width: "27px"}} src={linkedin} alt="linkedin"/></a>
                </div>
                <div>
                    <h4 style={{letterSpacing: "1px", color: "white"}}>PAYMENT OPTIONS</h4>
                    <img src={cards} alt="payments"/>
                </div>
            </div>

            <div style={inlineStyleSmall}><div style={{display: "grid", color: "white", lineHeight: "25px"}}>
                <h4>RESOURCES</h4>
                <Link onMouseOver={overHandler} onMouseOut={outHandler} to="/shop" style={{color: "white", textDecoration: "none"}}>&#62;&nbsp;Shop</Link>
                <Link onMouseOver={overHandler} onMouseOut={outHandler} to="/cart" style={{color: "white", textDecoration: "none"}}>&#62;&nbsp;Cart</Link>
                <Link onMouseOver={overHandler} onMouseOut={outHandler} to="/contact" style={{color: "white", textDecoration: "none"}}>&#62;&nbsp;Contact</Link>
                <Link onMouseOver={overHandler} onMouseOut={outHandler} to="/about" style={{color: "white", textDecoration: "none"}}>&#62;&nbsp;About Us</Link>
            </div></div>

            </div>}
            <br></br><br></br>
            <a style={copyRight} href="http://factorialsystems.io/">Copyright &copy; Factorial Systems 2022</a>
        </div>
        <Outlet/>
        </>
    )
}
export default Footer;