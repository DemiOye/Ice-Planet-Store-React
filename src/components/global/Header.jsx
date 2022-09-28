//import {useRef} from 'react';
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "./images/ice.png";
import cart from "./images/cart.png";

function Header() {

    const navStyle = {
        display: "flex",
        padding: "15px",
        paddingLeft: "5%",
        backgroundColor: "#06184e",
        //alignContent: "center",
        //justifyContent: "center"
    };

    const linkStyle = {
        textDecoration: "none",
        opacity: "0.8",
        color: "#f1f1f1",
        font: "Arial, San-Seriff",
        fontSize: "17px",
        marginLeft: "10px",
        marginRight: "10px"
    };

    const cartLink = {
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        textDecoration: "none",
        opacity: "0.8",
        color: "#f1f1f1",
        font: "Arial, San-Seriff",
        fontSize: "17px",
        marginLeft: "7px",
        marginRight: "7px"
    };

    const logoStyle = {
        width: "80px",
    };

    const userLogin = {
        opacity: "0.8",
        fontWeight: "bold",
        letterSpacing: "1px",
        color: "#f1f1f1",
        fontSize: "17px",
        marginLeft: "7px",
        marginRight: "7px",
        textDecoration: "none"
    };

    const cartImage = {
        width: "22px",
        marginLeft: "3px",
        marginRight: "3px"
    };

    const cartCounter = {
        backgroundColor: "red",
        color: "white",
        fontSize: "15px",
        paddingLeft: "4px",
        paddingRight: "4px", 
        borderRadius: "3px"
    };

    const icePlanet = {
        opacity: "0.8",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        background: "none",
        border: "none",
        color: "white",
        marginLeft: "3px",
        fontSize: "17px",
        marginRight: "3px",
        cursor: "pointer",
    };

    const dropdownStyle = {
        position: "absolute",
        zIndex: "1",
        backgroundColor: "white",
        display: "grid",
        width: "100px",
        padding: "12px",
        lineHeight: "2.0",
        borderRadius: "5px",
        left: "75%",
        top: "70%",
    };

    const dropdownLink = {
        textDecoration: "none",
        opacity: "0.8",
        color: "#1d1d1d",
        font: "Arial, San-Seriff",
        fontSize: "17px",
        marginLeft: "10px",
        marginRight: "10px"
    };
 
    const overHandler =(e)=> {
        e.target.style.opacity = "1.0"
    };
    
      const outHandler =(e)=> {
        e.target.style.opacity = "0.8"
    };

    //const ref = useRef(null);

    const [dropdown, setDropdown] = useState(false);

    const handleDropdown = () => {
        setDropdown(!dropdown)
    };

    return (
        <>
        <nav style={navStyle}>
            <div style={{paddingRight: "50%"}}>
            <Link to="/"><img style={logoStyle} src={logo} alt="logo"/></Link>
            </div>
            <ul style={{display: "flex", listStyle: "none", position: "relative"}}>
                <li><Link style={linkStyle} onMouseOver={overHandler} onMouseOut={outHandler} to="/">Home</Link></li>
                <li><Link style={linkStyle} onMouseOver={overHandler} onMouseOut={outHandler} to="/shop">Shop</Link></li>
                <li><Link style={cartLink} onMouseOver={overHandler} onMouseOut={outHandler} to="/cart">Cart<img style={cartImage} src={cart} alt="cart"/><b style={cartCounter}>0</b></Link></li>
                <li><button style={icePlanet} onMouseOver={overHandler} onMouseOut={outHandler} onClick={handleDropdown}>Ice Planet<b style={{paddingTop: "5px", marginLeft: "3px"}}>&#129171;</b></button></li>
                <li>
                    {dropdown?<div style={dropdownStyle}>
                    <Link style={dropdownLink} onMouseOver={overHandler} onMouseOut={outHandler} to="/contact">Contact</Link>
                    <Link style={dropdownLink} onMouseOver={overHandler} onMouseOut={outHandler} to="/about">About Us</Link>
                    </div>:null}
                </li>
            </ul>
            <ul style={{display: "flex", listStyle: "none", float: "right"}}>
                <li><Link style={userLogin} onMouseOver={overHandler} onMouseOut={outHandler} to="/signup">Sign up</Link></li>
                <li style={{color: "#f1f1f1"}}>|</li>
                <li><Link style={userLogin} onMouseOver={overHandler} onMouseOut={outHandler} to="/login">Login</Link></li>
            </ul>
            <ul style={{display: "none", listStyle: "none"}}>
                <li><Link to="/user">Profile</Link></li>
                <li><button>Dropdown</button></li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}
export default Header;