import React, { useState } from "react";
import location from "./images/location.png";
import phone from "./images/phone.png";
import atemail from "./images/atemail.png";
//import contact from "./images/contact.jpg";
import fish from "./images/fish.jpg";

function ContactPage() {

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phonenum, setPhonenum] = useState('');
    const [message, setMessage] = useState('');

    function changeFullname (e) {
        setFullname(e.target.value)
    }

    function changeEmail (e) {
        setEmail(e.target.value)
    }

    function changePhonenum (e) {
        setPhonenum(e.target.value)
    }

    function changeMessage (e) {
        setMessage(e.target.value)
    }

    function sendMessage (e) {

    }

    const bannerStyle = {
        backgroundImage: `url(${fish})`,
        backgroundSize: "cover"
    };

    const innerBanner = {
        textTransform: "uppercase",
        letterSpacing: "1px", 
        color: "white", 
        padding: "50px",
        background: "rgba(6, 24, 78, 0.5)"
    };

    const contactStyle = {
        padding: "70px",
        paddingLeft: "7%",
        paddingRight: "7%"
    };

    const inputStyle = {
        marginTop: "15px",
        marginBottom: "15px",
        padding: "7px",
        fontSize: "16px",
        letterSpacing: "1px",
        border: "0.7px solid #d3d3d3",
        color: "#313131"
    };

    const textareaStyle = {
        marginTop: "15px",
        marginBottom: "30px",
        padding: "7px",
        fontSize: "16px",
        fontFamily: "Arial, san-serrif",
        letterSpacing: "1px",
        height: "100px",
        border: "0.7px solid #d3d3d3",
        color: "#313131"
    };

    const buttonStyle = {
        background: "none",
        width: "40%",
        minWidth: "200px",
        padding: "10px",
        color: "rgb(1, 171, 214)",
        border: "1px solid rgb(1, 171, 214)",
        fontSize: "14px",
        fontWeight: "bold",
        letterSpacing: "1px",
        cursor: "pointer"
    };

    const icons = {
        display: "inline-block",
        paddingTop: "40px",
        paddingBottom: "40px",
        fontWeight: "lighter",
        letterSpacing: "1px",
        paddingRight: "11%"
    };

    const containerStyle = {
        width: "80%",
        minWidth: "320px"
    };

    const overHandler =(e)=> {
        e.target.style.backgroundColor = "#01abd6";
        e.target.style.border = "1px solid #01abd6";
        e.target.style.color = "white";
    };

    const outHandler =(e)=> {
        e.target.style.backgroundColor = "transparent";
        e.target.style.border = "1px solid #01abd6";
        e.target.style.color = "#01abd6";
    };


    return (
        <>
        <div style={bannerStyle}>
            <div style={innerBanner}>
            <span style={{fontSize: "30px", fontWeight: "lighter"}}>Contact Us</span>
            </div>
        </div>
        <div style={contactStyle}>
                <div style={containerStyle}>
                    <span style={{color: "#3d3d3d", fontSize: "17px"}}>Please fill the form below to send us a message. We will respond soon as possible.</span>
                    <br></br><br></br>
                    <form style={{display: "grid"}} onSubmit={sendMessage}>
                        <input style={inputStyle} type="text" value={fullname} onChange={changeFullname} placeholder="Name"></input>
                        <input style={inputStyle} type="text" value={email} onChange={changeEmail} placeholder="Email"></input>
                        <input style={inputStyle} type="text" value={phonenum} onChange={changePhonenum}  placeholder="Phone Number"></input>
                        <textarea style={textareaStyle} value={message} onChange={changeMessage} placeholder="Message"></textarea>
                        <button onMouseOver={overHandler} onMouseOut={outHandler} style={buttonStyle} type="submit">SUBMIT</button>
                    </form>
                </div>
            
            <div style={{display: "inline-block", width: "100%", marginTop: "25px", marginBottom: "25px"}}>
                <div style={icons}>
                    <div style={{display: "flex"}}>
                    <img style={{width: "60px", marginRight: "15px"}} src={location} alt="location"></img>
                    <div style={{display: "grid"}}>
                    <b>Address</b>
                    <span>Old Baale's Palace.</span>
                    <span>16 Agungi Ajinran Rd, Lekki</span>
                    </div></div>
                </div>
                <div style={icons}>
                    <div style={{display: "flex"}}>
                    <img style={{width: "60px", marginRight: "15px"}} src={phone} alt="phone"></img>
                    <div style={{display: "grid"}}>
                    <b>Phone</b>
                    <span>08188111333</span>
                    <span>08075210001</span>
                    </div></div>
                </div>
                <div style={icons}>
                    <div style={{display: "flex"}}>
                    <img style={{width: "60px", marginRight: "15px"}} src={atemail} alt="email"></img>
                    <div style={{display: "grid"}}>
                    <b>Email</b>
                    <span>info@iceplanet.store</span>
                    <span>iceplanetstores@gmail.com</span>
                    </div></div>
                </div>
            </div>
            <div align="center">
                <iframe style={{borderRadius: "5px"}} title="Address" width="100%" height="450" id="gmap_canvas" src="https://maps.google.com/maps?q=16%20Agungi%20Ajinran%20Rd,%20Lekki&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
        </div>
        </>
    )

}
export default ContactPage;