import React, { useRef, useState } from "react";
import veggies from "./images/veggies.jpg";
import breast from "./images/shop/breast.jpeg";
import burgers from "./images/shop/burgers.jpg";
import calamari from "./images/shop/calamari.jpeg";
import chickenCut from "./images/shop/chicken-cut.jpg";
import chickenGizzard from "./images/shop/chicken-gizzard.jpg";
import chickenLap from "./images/shop/chicken-lap.jpg";
import chickenSausage from "./images/shop/chicken-sausage.jpeg";
import chickenWing from "./images/shop/chicken-wing.jpg";
import croaker from "./images/shop/croaker.jpeg";
import frenchFries from "./images/shop/french-fries.jpg";
import fryerLap from "./images/shop/fryer-lap.jpeg";
import hake from "./images/shop/hake.jpeg";
import hardLap from "./images/shop/hard-lap.jpeg";
import kote from "./images/shop/kote.jpeg";
import mincedMeat from "./images/shop/minced-meat.jpeg";
import oroboLap from "./images/shop/orobo-lap.jpeg";
import panla from "./images/shop/panla.jpeg";
import shrimps from "./images/shop/shrimps.jpg";
import snail from "./images/shop/snail.jpeg";
import tilapia from "./images/shop/tilapia.jpg";
import titus from "./images/shop/titus.jpg";
import turkeyGizzard from "./images/shop/turkey-gizzard.png";
import turkeyWing from "./images/shop/turkey-wing.jpeg";

function ShopPage() {

    const bannerStyle = {
        backgroundImage: `url(${veggies})`,
        backgroundSize: "cover"
    };

    const innerBanner = {
        textTransform: "uppercase",
        letterSpacing: "1px", 
        color: "white", 
        padding: "50px",
        background: "rgba(6, 24, 78, 0.5)"
    };
    
    const shopStyle = {
        paddingTop: "40px",
        marginLeft: "5%",
        marginRight: "5%",
        paddingBottom: "60px"
    };

    const sortStyle = {
        background: "transparent",
        border: "1px solid #01abd6",
        padding: "7px",
        width: "170px",
        letterSpacing: "1px",
        fontSize: "12px",
        fontWeight: "bold",
        color: "#01abd6",
        textTransform: "uppercase",
        float: "right"
    };

    const shopCont = {
        display: "inline-block",
        marginTop: "30px"
    };

    const shopItem = {
        display: "inline-block",
        margin: "17px",
        marginLeft: "1.35%",
        marginRight: "1.35%",
        //boxShadow: "0 3px 6px 2px rgba(1, 171, 214, 0.5)"
        border: "solid 1px rgb(1 ,171 , 214)",
        paddingBottom: "20px"
    };

    const addToCart = {
        textTransform: "uppercase",
        backgroundColor: "#06184e",
        padding: "7px",
        color: "white",
        fontWeight: "bold",
        border: "none",
        cursor: "pointer",
        paddingLeft: "10px",
        paddingRight: "10px",
        position: "absolute",
        //left: "0",
        bottom: "20%"
    };

    const itemTitle = {
        textTransform: "uppercase",
        color: "rgb(1 ,171 , 214)",
        fontSize: "22px",
        fontWeight: "light",
        marginLeft: "10px",
    };

    const priceStyle = {
        letterSpacing: "1px",
        marginLeft: "10px",
        fontWeight: "bold",
        fontSize: "20px",
        marginRight: "5px"
    };

    const kgStyle = {
        fontWeight: "light",
        color: "darkgrey",
        fontSize: "14px"
    };

    const overHandler =(e)=> {
        e.target.style.backgroundColor = "#01abd6";
    };

    const outHandler =(e)=> {
        e.target.style.backgroundColor = "#06184e";
    };

    const ref = useRef(null);

    return (
        <>
        <div style={bannerStyle}>
            <div style={innerBanner}>
            <span style={{fontSize: "30px", fontWeight: "lighter"}}>Shop</span>
            </div>
        </div>
        <div style={shopStyle}>
            <span style={{color: "#1d1d1d", fontSize: "23px", letterSpacing: "1px"}}>Our Products</span>
            <select style={sortStyle}>
                <option value="0">All Items</option>
                <option value="1">Chicken</option>
                <option value="2">Turkey</option>
                <option value="3">Fish</option>
                <option value="4">Meat</option>
                <option value="5">Others</option>
            </select>
            <br></br>
            <div align="center" style={shopCont}>
                <div align="left" style={shopItem}>
                    <div style={{backgroundImage: `url(${breast})`, backgroundSize: "cover", width: "250px", height: "200px", position: "relative"}}>
                    <button onMouseOver={overHandler} onMouseOut={outHandler} style={addToCart}>Add to Cart</button>
                    </div><br></br>
                    <span style={itemTitle}>Chicken Breast</span><br></br>
                    <span style={priceStyle}>&#8358;2800<b style={kgStyle}>&nbsp;Per kg</b></span>
                    <div style={{display: "flex", padding: "10px"}}>
                        <input style={{fontSize: "14px", border: "solid 1px rgb(1 ,171 , 214)", padding: "5px", paddingLeft: "10px", width: "50px"}} ref={ref} defaultValue="1" type="number"/>
                        <select style={{fontSize: "14px", marginLeft: "10px", border: "none", background: "none"}}><option value="0">pack</option><option value="1">carton</option></select>
                    </div>
                </div>

                <div align="left" style={shopItem}>
                    <div style={{backgroundImage: `url(${burgers})`, backgroundSize: "cover", width: "250px", height: "200px", position: "relative"}}>
                    <button onMouseOver={overHandler} onMouseOut={outHandler} style={addToCart}>Add to Cart</button>
                    </div><br></br>
                    <span style={itemTitle}>Burger</span><br></br>
                    <span style={priceStyle}>&#8358;1200<b style={kgStyle}>&nbsp;Per 4 packs</b></span>
                    <div style={{display: "flex", padding: "10px"}}>
                        <input style={{fontSize: "14px", border: "solid 1px rgb(1 ,171 , 214)", padding: "5px", paddingLeft: "10px", width: "50px"}} ref={ref} defaultValue="1" type="number"/>
                        <select style={{fontSize: "14px", marginLeft: "10px", border: "none", background: "none"}}><option value="0">pack(4)</option></select>
                    </div>
                </div>

                <div align="left" style={shopItem}>
                    <div style={{backgroundImage: `url(${calamari})`, backgroundSize: "cover", width: "250px", height: "200px", position: "relative"}}>
                    <button onMouseOver={overHandler} onMouseOut={outHandler} style={addToCart}>Add to Cart</button>
                    </div><br></br>
                    <span style={itemTitle}>Calamari</span><br></br>
                    <span style={priceStyle}>&#8358;4000<b style={kgStyle}>&nbsp;Per pack</b></span>
                    <div style={{display: "flex", padding: "10px"}}>
                        <input style={{fontSize: "14px", border: "solid 1px rgb(1 ,171 , 214)", padding: "5px", paddingLeft: "10px", width: "50px"}} ref={ref} defaultValue="1" type="number"/>
                        <select style={{fontSize: "14px", marginLeft: "10px", border: "none", background: "none"}}><option value="0">pack</option></select>
                    </div>
                </div>

                <div align="left" style={shopItem}>
                    <div style={{backgroundImage: `url(${chickenCut})`, backgroundSize: "cover", width: "250px", height: "200px", position: "relative"}}>
                    <button onMouseOver={overHandler} onMouseOut={outHandler} style={addToCart}>Add to Cart</button>
                    </div><br></br>
                    <span style={itemTitle}>Fryer Cut</span><br></br>
                    <span style={priceStyle}>&#8358;2200<b style={kgStyle}>&nbsp;Per kg</b></span>
                    <div style={{display: "flex", padding: "10px"}}>
                        <input style={{fontSize: "14px", border: "solid 1px rgb(1 ,171 , 214)", padding: "5px", paddingLeft: "10px", width: "50px"}} ref={ref} defaultValue="1" type="number"/>
                        <select style={{fontSize: "14px", marginLeft: "10px", border: "none", background: "none"}}><option value="0">kg</option><option value="1">carton</option></select>
                    </div>
                </div>

                <div align="left" style={shopItem}>
                    <div style={{backgroundImage: `url(${chickenGizzard})`, backgroundSize: "cover", width: "250px", height: "200px", position: "relative"}}>
                    <button onMouseOver={overHandler} onMouseOut={outHandler} style={addToCart}>Add to Cart</button>
                    </div><br></br>
                    <span style={itemTitle}>Chicken Gizzard</span><br></br>
                    <span style={priceStyle}>&#8358;2300<b style={kgStyle}>&nbsp;Per kg</b></span>
                    <div style={{display: "flex", padding: "10px"}}>
                        <input style={{fontSize: "14px", border: "solid 1px rgb(1 ,171 , 214)", padding: "5px", paddingLeft: "10px", width: "50px"}} ref={ref} defaultValue="1" type="number"/>
                        <select style={{fontSize: "14px", marginLeft: "10px", border: "none", background: "none"}}><option value="0">kg</option><option value="1">carton</option></select>
                    </div>
                </div>

                <div align="left" style={shopItem}>
                    <div style={{backgroundImage: `url(${chickenLap})`, backgroundSize: "cover", width: "250px", height: "200px", position: "relative"}}>
                    <button onMouseOver={overHandler} onMouseOut={outHandler} style={addToCart}>Add to Cart</button>
                    </div><br></br>
                    <span style={itemTitle}>Chicken Breast</span><br></br>
                    <span style={priceStyle}>&#8358;2800<b style={kgStyle}>&nbsp;Per kg</b></span>
                    <div style={{display: "flex", padding: "10px"}}>
                        <input style={{fontSize: "14px", border: "solid 1px rgb(1 ,171 , 214)", padding: "5px", paddingLeft: "10px", width: "50px"}} ref={ref} defaultValue="1" type="number"/>
                        <select style={{fontSize: "14px", marginLeft: "10px", border: "none", background: "none"}}><option value="0">kg</option><option value="1">carton</option></select>
                    </div>
                </div>

                <div align="left" style={shopItem}>
                    <div style={{backgroundImage: `url(${chickenSausage})`, backgroundSize: "cover", width: "250px", height: "200px", position: "relative"}}>
                    <button onMouseOver={overHandler} onMouseOut={outHandler} style={addToCart}>Add to Cart</button>
                    </div><br></br>
                    <span style={itemTitle}>Chicken Sausage</span><br></br>
                    <span style={priceStyle}>&#8358;900<b style={kgStyle}>&nbsp;Per pack</b></span>
                    <div style={{display: "flex", padding: "10px"}}>
                        <input style={{fontSize: "14px", border: "solid 1px rgb(1 ,171 , 214)", padding: "5px", paddingLeft: "10px", width: "50px"}} ref={ref} defaultValue="1" type="number"/>
                        <select style={{fontSize: "14px", marginLeft: "10px", border: "none", background: "none"}}><option value="0">pack</option></select>
                    </div>
                </div>

                <div align="left" style={shopItem}>
                    <div style={{backgroundImage: `url(${chickenWing})`, backgroundSize: "cover", width: "250px", height: "200px", position: "relative"}}>
                    <button onMouseOver={overHandler} onMouseOut={outHandler} style={addToCart}>Add to Cart</button>
                    </div><br></br>
                    <span style={itemTitle}>Hard - Wings</span><br></br>
                    <span style={priceStyle}>&#8358;2600<b style={kgStyle}>&nbsp;Per kg</b></span>
                    <div style={{display: "flex", padding: "10px"}}>
                        <input style={{fontSize: "14px", border: "solid 1px rgb(1 ,171 , 214)", padding: "5px", paddingLeft: "10px", width: "50px"}} ref={ref} defaultValue="1" type="number"/>
                        <select style={{fontSize: "14px", marginLeft: "10px", border: "none", background: "none"}}><option value="0">kg</option><option value="1">carton</option></select>
                    </div>
                </div>

                <div align="left" style={shopItem}>
                    <div style={{backgroundImage: `url(${croaker})`, backgroundSize: "cover", width: "250px", height: "200px", position: "relative"}}>
                    <button onMouseOver={overHandler} onMouseOut={outHandler} style={addToCart}>Add to Cart</button>
                    </div><br></br>
                    <span style={itemTitle}>Croaker</span><br></br>
                    <span style={priceStyle}>&#8358;2500<b style={kgStyle}>&nbsp;Per kg</b></span>
                    <div style={{display: "flex", padding: "10px"}}>
                        <input style={{fontSize: "14px", border: "solid 1px rgb(1 ,171 , 214)", padding: "5px", paddingLeft: "10px", width: "50px"}} ref={ref} defaultValue="1" type="number"/>
                        <select style={{fontSize: "14px", marginLeft: "10px", border: "none", background: "none"}}><option value="0">kg</option><option value="1">carton</option></select>
                    </div>
                </div>

                <div align="left" style={shopItem}>
                    <div style={{backgroundImage: `url(${frenchFries})`, backgroundSize: "cover", width: "250px", height: "200px", position: "relative"}}>
                    <button onMouseOver={overHandler} onMouseOut={outHandler} style={addToCart}>Add to Cart</button>
                    </div><br></br>
                    <span style={itemTitle}>Chips</span><br></br>
                    <span style={priceStyle}>&#8358;1700<b style={kgStyle}>&nbsp;Per pack(1kg)</b></span>
                    <div style={{display: "flex", padding: "10px"}}>
                        <input style={{fontSize: "14px", border: "solid 1px rgb(1 ,171 , 214)", padding: "5px", paddingLeft: "10px", width: "50px"}} ref={ref} defaultValue="1" type="number"/>
                        <select style={{fontSize: "14px", marginLeft: "10px", border: "none", background: "none"}}>
                            <option value="0">Pack 1kg</option>
                            <option value="1">Pack 2.5kg</option>
                            <option value="2">Carton(4 packs)</option>
                            <option value="3">Carton(10 packs)</option>
                            </select>
                    </div>
                </div>

                <div align="left" style={shopItem}>
                    <div style={{backgroundImage: `url(${fryerLap})`, backgroundSize: "cover", width: "250px", height: "200px", position: "relative"}}>
                    <button onMouseOver={overHandler} onMouseOut={outHandler} style={addToCart}>Add to Cart</button>
                    </div><br></br>
                    <span style={itemTitle}>Fryer Lap</span><br></br>
                    <span style={priceStyle}>&#8358;2300<b style={kgStyle}>&nbsp;Per kg</b></span>
                    <div style={{display: "flex", padding: "10px"}}>
                        <input style={{fontSize: "14px", border: "solid 1px rgb(1 ,171 , 214)", padding: "5px", paddingLeft: "10px", width: "50px"}} ref={ref} defaultValue="1" type="number"/>
                        <select style={{fontSize: "14px", marginLeft: "10px", border: "none", background: "none"}}><option value="0">kg</option><option value="1">carton</option></select>
                    </div>
                </div>

                <div align="left" style={shopItem}>
                    <div style={{backgroundImage: `url(${hake})`, backgroundSize: "cover", width: "250px", height: "200px", position: "relative"}}>
                    <button onMouseOver={overHandler} onMouseOut={outHandler} style={addToCart}>Add to Cart</button>
                    </div><br></br>
                    <span style={itemTitle}>Hake</span><br></br>
                    <span style={priceStyle}>&#8358;2000<b style={kgStyle}>&nbsp;Per kg</b></span>
                    <div style={{display: "flex", padding: "10px"}}>
                        <input style={{fontSize: "14px", border: "solid 1px rgb(1 ,171 , 214)", padding: "5px", paddingLeft: "10px", width: "50px"}} ref={ref} defaultValue="1" type="number"/>
                        <select style={{fontSize: "14px", marginLeft: "10px", border: "none", background: "none"}}><option value="0">kg</option><option value="1">carton</option></select>
                    </div>
                </div>

                <div align="left" style={shopItem}>
                    <div style={{backgroundImage: `url(${hardLap})`, backgroundSize: "cover", width: "250px", height: "200px", position: "relative"}}>
                    <button onMouseOver={overHandler} onMouseOut={outHandler} style={addToCart}>Add to Cart</button>
                    </div><br></br>
                    <span style={itemTitle}>Hard Chicken Lap</span><br></br>
                    <span style={priceStyle}>&#8358;2200<b style={kgStyle}>&nbsp;Per kg</b></span>
                    <div style={{display: "flex", padding: "10px"}}>
                        <input style={{fontSize: "14px", border: "solid 1px rgb(1 ,171 , 214)", padding: "5px", paddingLeft: "10px", width: "50px"}} ref={ref} defaultValue="1" type="number"/>
                        <select style={{fontSize: "14px", marginLeft: "10px", border: "none", background: "none"}}><option value="0">kg</option><option value="1">carton</option></select>
                    </div>
                </div>

                <div align="left" style={shopItem}>
                    <div style={{backgroundImage: `url(${kote})`, backgroundSize: "cover", width: "250px", height: "200px", position: "relative"}}>
                    <button onMouseOver={overHandler} onMouseOut={outHandler} style={addToCart}>Add to Cart</button>
                    </div><br></br>
                    <span style={itemTitle}>Kote</span><br></br>
                    <span style={priceStyle}>&#8358;1400<b style={kgStyle}>&nbsp;Per kg</b></span>
                    <div style={{display: "flex", padding: "10px"}}>
                        <input style={{fontSize: "14px", border: "solid 1px rgb(1 ,171 , 214)", padding: "5px", paddingLeft: "10px", width: "50px"}} ref={ref} defaultValue="1" type="number"/>
                        <select style={{fontSize: "14px", marginLeft: "10px", border: "none", background: "none"}}><option value="0">kg</option><option value="1">carton</option></select>
                    </div>
                </div>

                <div align="left" style={shopItem}>
                    <div style={{backgroundImage: `url(${mincedMeat})`, backgroundSize: "cover", width: "250px", height: "200px", position: "relative"}}>
                    <button onMouseOver={overHandler} onMouseOut={outHandler} style={addToCart}>Add to Cart</button>
                    </div><br></br>
                    <span style={itemTitle}>Minced Meat</span><br></br>
                    <span style={priceStyle}>&#8358;4000<b style={kgStyle}>&nbsp;Per pack</b></span>
                    <div style={{display: "flex", padding: "10px"}}>
                        <input style={{fontSize: "14px", border: "solid 1px rgb(1 ,171 , 214)", padding: "5px", paddingLeft: "10px", width: "50px"}} ref={ref} defaultValue="1" type="number"/>
                        <select style={{fontSize: "14px", marginLeft: "10px", border: "none", background: "none"}}><option value="0">pack</option></select>
                    </div>
                </div>

                <div align="left" style={shopItem}>
                    <div style={{backgroundImage: `url(${oroboLap})`, backgroundSize: "cover", width: "250px", height: "200px", position: "relative"}}>
                    <button onMouseOver={overHandler} onMouseOut={outHandler} style={addToCart}>Add to Cart</button>
                    </div><br></br>
                    <span style={itemTitle}>Orobo Lap(Chicken)</span><br></br>
                    <span style={priceStyle}>&#8358;2200<b style={kgStyle}>&nbsp;Per kg</b></span>
                    <div style={{display: "flex", padding: "10px"}}>
                        <input style={{fontSize: "14px", border: "solid 1px rgb(1 ,171 , 214)", padding: "5px", paddingLeft: "10px", width: "50px"}} ref={ref} defaultValue="1" type="number"/>
                        <select style={{fontSize: "14px", marginLeft: "10px", border: "none", background: "none"}}><option value="0">kg</option><option value="1">carton</option></select>
                    </div>
                </div>

                <div align="left" style={shopItem}>
                    <div style={{backgroundImage: `url(${panla})`, backgroundSize: "cover", width: "250px", height: "200px", position: "relative"}}>
                    <button onMouseOver={overHandler} onMouseOut={outHandler} style={addToCart}>Add to Cart</button>
                    </div><br></br>
                    <span style={itemTitle}>Panla</span><br></br>
                    <span style={priceStyle}>&#8358;2200<b style={kgStyle}>&nbsp;Per kg</b></span>
                    <div style={{display: "flex", padding: "10px"}}>
                        <input style={{fontSize: "14px", border: "solid 1px rgb(1 ,171 , 214)", padding: "5px", paddingLeft: "10px", width: "50px"}} ref={ref} defaultValue="1" type="number"/>
                        <select style={{fontSize: "14px", marginLeft: "10px", border: "none", background: "none"}}><option value="0">kg</option><option value="1">carton</option></select>
                    </div>
                </div>

                <div align="left" style={shopItem}>
                    <div style={{backgroundImage: `url(${shrimps})`, backgroundSize: "cover", width: "250px", height: "200px", position: "relative"}}>
                    <button onMouseOver={overHandler} onMouseOut={outHandler} style={addToCart}>Add to Cart</button>
                    </div><br></br>
                    <span style={itemTitle}>Shrimps</span><br></br>
                    <span style={priceStyle}>&#8358;1100<b style={kgStyle}>&nbsp;Per 200g</b></span>
                    <div style={{display: "flex", padding: "10px"}}>
                        <input style={{fontSize: "14px", border: "solid 1px rgb(1 ,171 , 214)", padding: "5px", paddingLeft: "10px", width: "50px"}} ref={ref} defaultValue="1" type="number"/>
                        <select style={{fontSize: "14px", marginLeft: "10px", border: "none", background: "none"}}><option value="0">kg</option><option value="1">carton</option></select>
                    </div>
                </div>

                <div align="left" style={shopItem}>
                    <div style={{backgroundImage: `url(${snail})`, backgroundSize: "cover", width: "250px", height: "200px", position: "relative"}}>
                    <button onMouseOver={overHandler} onMouseOut={outHandler} style={addToCart}>Add to Cart</button>
                    </div><br></br>
                    <span style={itemTitle}>Fresh Snail</span><br></br>
                    <span style={priceStyle}>&#8358;4000<b style={kgStyle}>&nbsp;Per 4 packs</b></span>
                    <div style={{display: "flex", padding: "10px"}}>
                        <input style={{fontSize: "14px", border: "solid 1px rgb(1 ,171 , 214)", padding: "5px", paddingLeft: "10px", width: "50px"}} ref={ref} defaultValue="1" type="number"/>
                        <select style={{fontSize: "14px", marginLeft: "10px", border: "none", background: "none"}}><option value="0">pack(4)</option></select>
                    </div>
                </div>

                <div align="left" style={shopItem}>
                    <div style={{backgroundImage: `url(${tilapia})`, backgroundSize: "cover", width: "250px", height: "200px", position: "relative"}}>
                    <button onMouseOver={overHandler} onMouseOut={outHandler} style={addToCart}>Add to Cart</button>
                    </div><br></br>
                    <span style={itemTitle}>Tilapia</span><br></br>
                    <span style={priceStyle}>&#8358;2000<b style={kgStyle}>&nbsp;Per kg</b></span>
                    <div style={{display: "flex", padding: "10px"}}>
                        <input style={{fontSize: "14px", border: "solid 1px rgb(1 ,171 , 214)", padding: "5px", paddingLeft: "10px", width: "50px"}} ref={ref} defaultValue="1" type="number"/>
                        <select style={{fontSize: "14px", marginLeft: "10px", border: "none", background: "none"}}><option value="0">kg</option><option value="1">carton</option></select>
                    </div>
                </div>

                <div align="left" style={shopItem}>
                    <div style={{backgroundImage: `url(${titus})`, backgroundSize: "cover", width: "250px", height: "200px", position: "relative"}}>
                    <button onMouseOver={overHandler} onMouseOut={outHandler} style={addToCart}>Add to Cart</button>
                    </div><br></br>
                    <span style={itemTitle}>Titus</span><br></br>
                    <span style={priceStyle}>&#8358;2200<b style={kgStyle}>&nbsp;Per kg</b></span>
                    <div style={{display: "flex", padding: "10px"}}>
                        <input style={{fontSize: "14px", border: "solid 1px rgb(1 ,171 , 214)", padding: "5px", paddingLeft: "10px", width: "50px"}} ref={ref} defaultValue="1" type="number"/>
                        <select style={{fontSize: "14px", marginLeft: "10px", border: "none", background: "none"}}><option value="0">kg</option><option value="1">carton</option></select>
                    </div>
                </div>

                <div align="left" style={shopItem}>
                    <div style={{backgroundImage: `url(${turkeyGizzard})`, backgroundSize: "cover", width: "250px", height: "200px", position: "relative"}}>
                    <button onMouseOver={overHandler} onMouseOut={outHandler} style={addToCart}>Add to Cart</button>
                    </div><br></br>
                    <span style={itemTitle}>Turkey Gizzard</span><br></br>
                    <span style={priceStyle}>&#8358;3200<b style={kgStyle}>&nbsp;Per kg</b></span>
                    <div style={{display: "flex", padding: "10px"}}>
                        <input style={{fontSize: "14px", border: "solid 1px rgb(1 ,171 , 214)", padding: "5px", paddingLeft: "10px", width: "50px"}} ref={ref} defaultValue="1" type="number"/>
                        <select style={{fontSize: "14px", marginLeft: "10px", border: "none", background: "none"}}><option value="0">kg</option><option value="1">carton</option></select>
                    </div>
                </div>

                <div align="left" style={shopItem}>
                    <div style={{backgroundImage: `url(${turkeyWing})`, backgroundSize: "cover", width: "250px", height: "200px", position: "relative"}}>
                    <button onMouseOver={overHandler} onMouseOut={outHandler} style={addToCart}>Add to Cart</button>
                    </div><br></br>
                    <span style={itemTitle}>Turkey Wings</span><br></br>
                    <span style={priceStyle}>&#8358;3400<b style={kgStyle}>&nbsp;Per kg</b></span>
                    <div style={{display: "flex", padding: "10px"}}>
                        <input style={{fontSize: "14px", border: "solid 1px rgb(1 ,171 , 214)", padding: "5px", paddingLeft: "10px", width: "50px"}} ref={ref} defaultValue="1" type="number"/>
                        <select style={{fontSize: "14px", marginLeft: "10px", border: "none", background: "none"}}><option value="0">kg</option><option value="1">carton</option></select>
                    </div>
                </div>
        </div>
        </div>
        </>
    )

}
export default ShopPage;