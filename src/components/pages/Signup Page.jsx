import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import icon5 from "./images/icon5.png";

function SignupPage() {

    const signupStyle = {
        paddingTop: "40px",
        paddingBottom: "40px"
    };

    const container = {
        width: "70%",
        minWidth: "320px",
        padding: "20px",
        paddingTop: "30px",
        paddingBottom: "30px",
        border: "none"
    };

    const inputDiv = {
        display: "flex",
        alignContent: "center",
        justifyContennt: "center",
        border: "1px solid #ced4da",
        backgroundColor: "#e9ecef",
        maringTop: "17px",
        marginBottom: "17px",
    };

    const inputStyle = {
        width: "95%",
        padding: "10px",
        fontSize: "16px",
        letterSpacing: "1px",
        border: "none",
        fontWeight: "lighter"
    };

    const iconStyle = {
        marginTop: "3px",
        marginLeft: "5px",
        marginRight: "5px",
        width: "32px",
        height: "32px"
    };

    const textareaStyle = {
        width: "95%",
        padding: "10px",
        height: "230px",
        letterSpacing: "1px",
        fontFamily: "Arial, san-serrif", 
        border: "none",
        fontSize: "16px"
    };

    const buttonsCont = {
        marginTop: "30px", 
        marginBottom: "50px"
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

    const linkOver =(e)=> {
        e.target.style.textDecoration = "underline";
    };

    const linkOut =(e)=> {
        e.target.style.textDecoration = "none";
    };

    return (
        <>
        <div align="center" style={signupStyle}>
            <div style={container}>
            <div style={{display: "flex", width: "100%", marginBottom: "20px"}}>
                <div align="left" style={{fontWeight: "lighter", fontSize: "27px", paddingTop: "5px", width: "90%"}}>Sign Up</div>
                <img style={{width: "65px"}} src={logo} alt="logo"></img>
            </div>
            <form>
                <div style={inputDiv}>
                <img style={iconStyle} src={icon1} alt="icon"/><input style={inputStyle} placeholder="Full Name"/>
                </div>
                <div style={inputDiv}>
                <img style={iconStyle} src={icon2} alt="icon"/><input style={inputStyle} placeholder="Email"/>
                </div>
                <div style={inputDiv}>
                <img style={iconStyle} src={icon3} alt="icon"/><input style={inputStyle} placeholder="Phone Number"/>
                </div>
                <div style={inputDiv}>
                <img style={iconStyle} src={icon4} alt="icon"/><input style={inputStyle} type="password" placeholder="Password"/>
                </div>
                <div style={inputDiv}>
                <img style={iconStyle} src={icon4} alt="icon"/><input style={inputStyle} placeholder="Confirm Password"/>
                </div>
                <div style={inputDiv}>
                <img style={iconStyle} src={icon5} alt="icon"/><textarea style={textareaStyle} placeholder="Address (Your adress is needed for delivery)"></textarea>
                </div>
                <input onMouseOver={overHandler} onMouseOut={outHandler} style={{width: "50%", minWidth: "200px", background: "none", paddingTop: "7px", paddingBottom: "7px", color: "#01abd6", fontSize: "14px", fontWeight: "bold", border: "1px solid #01abd6", cursor: "pointer", float: "left"}} type="submit" value="CREATE ACCOUNT"/>
                <br></br>
                <div align="left" style={buttonsCont}>
                    <Link onMouseOver={linkOver} onMouseOut={linkOut} style={{color: "#01abd6", fontSize: "16px", letterSpacing: "1px", textDecoration: "none", marginRight: "25px"}} to="/login">Login</Link>
                    <button onMouseOver={linkOver} onMouseOut={linkOut} style={{background: "none", border: "none", color: "#01abd6", letterSpacing: "1px", fontSize: "16px"}}>Resend Verification Email</button>
                </div>
            </form>
            </div>
        </div>
        </>
    )

}
export default SignupPage;