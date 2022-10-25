//import {useRef} from 'react';
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import logo from "./images/ice.png";
import bars from "./images/bars.png";
import cart from "./images/cart.png";

function Header() {

    const navStyle = {
        display: "flex",
        paddingLeft: "3%",
        backgroundColor: "#06184e",
        //alignContent: "center",
        //justifyContent: "center"
    };

    const linkStyle = {
        textDecoration: "none",
        color: "#f1f1f1",
        fontSize: "14px",
        letterSpacing: "1px",
        paddingTop: "30px",
        paddingLeft: "7px",
        paddingRight: "7px",
        marginLeft: "3px",
        marginRight: "3px"
    };

    const cartLink = {
        textDecoration: "none",
        color: "#f1f1f1",
        fontSize: "14px",
        letterSpacing: "1px",
        paddingTop: "30px",
        paddingLeft: "7px",
        paddingRight: "7px",
        marginLeft: "3px",
        marginRight: "3px"
    };

    const logoStyle = {
        width: "80px",
        padding: "10px"
    };

    const userLogin = {
        fontWeight: "bold",
        color: "#f1f1f1",
        fontSize: "14px",
        letterSpacing: "1px",
        paddingTop: "30px",
        paddingLeft: "7px",
        paddingRight: "7px",
        marginLeft: "3px",
        marginRight: "3px",
        textDecoration: "none"
    };

    /* const cartImage = {
        background: "transparent",
        width: "20px",
        height: "20px",
        marginLeft: "3px",
        marginRight: "3px"
    };

    const cartCounter = {
        background: "transparent",
        color: "red",
        fontSize: "15px",
        paddingLeft: "2px",
        paddingRight: "2px"
    }; */

    const icePlanet = {
        display: "flex",
        background: "none",
        border: "none",
        color: "#f1f1f1",
        paddingTop: "31px",
        marginLeft: "3px",
        fontSize: "14px",
        letterSpacing: "1px",
        marginRight: "3px",
        cursor: "pointer",
    };

    const menuStyle = {
        display: "flex",
        background: "none",
        border: "none",
        color: "#f1f1f1",
        paddingTop: "31px",
        marginLeft: "12px",
        paddingLeft: "7px",
        paddingRight: "7px",
        fontSize: "14px",
        letterSpacing: "1px",
        marginRight: "12px",
        cursor: "pointer",
    };

    const dropdownStyle = {
        width: "120px",
        position: "absolute",
        zIndex: "1",
        backgroundColor: "white",
        display: "grid",
        lineHeight: "2.0",
        right: "0",
        top: "70%",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.4)"
    };

    const dropdownLink = {
        textDecoration: "none",
        color: "#1d1d1d",
        font: "Arial, San-Seriff",
        fontSize: "14px",
        letterSpacing: "1px",
        padding: "7px",
    };

    const dropdownLinkBold = {
        textDecoration: "none",
        color: "#1d1d1d",
        font: "Arial, San-Seriff",
        fontSize: "14px",
        letterSpacing: "1px",
        fontWeight: "bold",
        padding: "7px",
    };
 
    const overHandler =(e)=> {
        e.target.style.backgroundColor = "rgb(1, 171, 214)";
        e.target.style.color = "white";
    };
    
    const outHandler =(e)=> {
        e.target.style.backgroundColor = "#06184e";
        e.target.style.color = "white";
    };

    const overHandlerDp =(e)=> {
        e.target.style.backgroundColor = "rgb(1, 171, 214)";
        e.target.style.color = "white";
    };

    const outHandlerDp =(e)=> {
        e.target.style.backgroundColor = "white";
        e.target.style.color = "#06184e";
    };

    const isBigScreen = useMediaQuery({ query: '(min-width: 1100px)' });
    const isSmallScreen = useMediaQuery({ query: '(max-width: 1099px)' });

    //const ref = useRef(null);

    const [dropdown, setDropdown] = useState(false);
    const [menu, setMenu] = useState(false);

    const handleDropdown = () => {
        setDropdown(!dropdown)
    };

    const menuDropdown = () => {
        setMenu(!menu)
    };

    return (
        <>
        <nav style={navStyle}>
            <div style={{paddingRight: ""}}>
            <Link to="/"><img style={logoStyle} src={logo} alt="logo"/></Link>
            </div>

            {isBigScreen && 
            <><div style={{display: "flex", position: "relative", paddingLeft: "45%"}}>
                <Link style={linkStyle} onMouseOver={overHandler} onMouseOut={outHandler} to="/">HOME</Link>
                <Link style={linkStyle} onMouseOver={overHandler} onMouseOut={outHandler} to="/shop">SHOP</Link>
                <Link style={cartLink} onMouseOver={overHandler} onMouseOut={outHandler} to="/cart">CART</Link>
                <button style={icePlanet} onMouseOver={overHandler} onMouseOut={outHandler} onClick={handleDropdown}>ICE&nbsp;PLANET&nbsp;&#11167;</button>
                    {dropdown?<div align="center" style={dropdownStyle}>
                    <Link style={dropdownLink} onMouseOver={overHandlerDp} onMouseOut={outHandlerDp} to="/contact">CONTACT</Link>
                    <Link style={dropdownLink} onMouseOver={overHandlerDp} onMouseOut={outHandlerDp} to="/about">ABOUT US</Link>
                    </div>:null}
            </div>
            <div style={{display: "flex", listStyle: "none", float: "right", marginLeft: "50px"}}>
                <Link style={userLogin} onMouseOver={overHandler} onMouseOut={outHandler} to="/signup">SIGN&nbsp;UP</Link>
                <span style={{color: "#f1f1f1", paddingTop: "27px"}}>|</span>
                <Link style={userLogin} onMouseOver={overHandler} onMouseOut={outHandler} to="/login">LOGIN</Link>
            </div>
            </>}

            {isSmallScreen &&
            <><div style={{width: "80%"}}></div><div style={{display: "flex", position: "relative"}}>
                <button style={menuStyle} onMouseOver={overHandler} onMouseOut={outHandler} onClick={menuDropdown}>MENU&nbsp;&#11167;</button>
                {menu?<div align="center" style={dropdownStyle}>
                <Link style={dropdownLink} onMouseOver={overHandlerDp} onMouseOut={outHandlerDp} to="/home">HOME</Link>
                <Link style={dropdownLink} onMouseOver={overHandlerDp} onMouseOut={outHandlerDp} to="/shop">SHOP</Link>
                <Link style={dropdownLink} onMouseOver={overHandlerDp} onMouseOut={outHandlerDp} to="/cart">CART</Link>
                <Link style={dropdownLink} onMouseOver={overHandlerDp} onMouseOut={outHandlerDp} to="/about">ABOUT US</Link>
                <Link style={dropdownLink} onMouseOver={overHandlerDp} onMouseOut={outHandlerDp} to="/contact">CONTACT</Link>
                <hr style={{width: "90%", height: "1px"}}></hr>
                <Link style={dropdownLinkBold} onMouseOver={overHandlerDp} onMouseOut={outHandlerDp} to="/signup">SIGN UP</Link>
                <Link style={dropdownLinkBold} onMouseOver={overHandlerDp} onMouseOut={outHandlerDp} to="/login">LOGIN</Link>
                </div>:null}
            </div></>}

            <ul style={{display: "none", listStyle: "none"}}>
                <li><Link to="/user">PROFILE</Link></li>
                <li><button>Dropdown</button></li>
            </ul>

        </nav>
        <Outlet/>
        </>
    )
}
export default Header;