import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import icon2 from "./images/icon2.png";
import icon4 from "./images/icon4.png";

function LoginPage() {

    const loginStyle = {
        paddingTop: "70px",
        paddingBottom: "180px"
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
        <div align="center" style={loginStyle}>
            <div style={container}>
                <div style={{display: "flex", width: "100%", marginBottom: "20px"}}>
                    <div align="left" style={{fontWeight: "lighter", fontSize: "27px", paddingTop: "5px", width: "90%"}}>Login</div>
                    <img style={{width: "65px"}} src={logo} alt="logo"/>
                </div>
                <div style={{borderBottom: "0.5px solid rgba(0,0,0,0.1)", marginBottom: "20px"}}></div>
                <form>
                    <div style={inputDiv}>
                        <img style={iconStyle} src={icon2} alt="icon"/><input style={inputStyle} placeholder="Email"/>
                    </div>
                    <div style={inputDiv}>
                        <img style={iconStyle} src={icon4} alt="icon"/><input style={inputStyle} type="password" placeholder="Password"/>
                    </div>
                    <input onMouseOver={overHandler} onMouseOut={outHandler} style={{width: "50%", minWidth: "200px", background: "none", paddingTop: "7px", paddingBottom: "7px", color: "#01abd6", fontSize: "14px", fontWeight: "bold", border: "1px solid #01abd6", cursor: "pointer", float: "left"}} type="submit" value="LOGIN"/>
                </form>
                <br></br>
                <div align="left" style={buttonsCont}>
                    <Link onMouseOver={linkOver} onMouseOut={linkOut} style={{color: "#01abd6", fontSize: "16px", letterSpacing: "1px", textDecoration: "none", marginRight: "25px"}} to="/signup">Sign Up</Link>
                    <Link onMouseOver={linkOver} onMouseOut={linkOut} style={{color: "#01abd6", fontSize: "16px", letterSpacing: "1px", textDecoration: "none"}} to="/reset">Forgot Password?</Link>
                </div>
            </div>
        </div>
        </>
    )

}
export default LoginPage;