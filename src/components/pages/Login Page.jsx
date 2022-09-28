import { Outlet, Link } from "react-router-dom";
import logo from "./images/logo.png";
import icon2 from "./images/icon2.png";
import icon4 from "./images/icon4.png";

function LoginPage() {

    const loginStyle = {
        paddingTop: "70px",
        paddingBottom: "180px"
    };

    const container = {
        width: "34%",
        minWidth: "350px",
        padding: "20px",
        paddingTop: "30px",
        paddingBottom: "30px",
        border: "solid 1px rgba(0,0,0,0.125)",
        borderRadius: "0.25rem"
    };

    const inputDiv = {
        display: "flex",
        alignContent: "center",
        justifyContennt: "center",
        border: "1px solid #ced4da",
        backgroundColor: "#e9ecef",
        maringTop: "10px",
        marginBottom: "10px",
        borderRadius: "0.25rem"
    };

    const inputStyle = {
        width: "88%",
        padding: "10px",
        fontSize: "16px",
        letterSpacing: "1px",
        border: "none",
        fontWeight: "lighter", 
        borderTopRightRadius: "0.25rem",
        borderBottomRightRadius: "0.25rem"
    };

    const iconStyle = {
        marginTop: "3px",
        marginLeft: "5px",
        marginRight: "5px",
        width: "32px",
        height: "32px"
    };

    const buttonsCont = {
        backgroundColor: "red",
        marginTop: "15px", 
        marginBottom: "50px"
    };

    return (
        <>
        <div align="center" style={loginStyle}>
            <div style={container}>
                <div style={{display: "flex", width: "100%", marginBottom: "20px"}}>
                    <div align="left" style={{fontWeight: "lighter", fontSize: "27px", paddingTop: "5px", width: "90%"}}>Sign Into Your Account</div>
                    <img style={{width: "65px"}} src={logo} alt="logo"/>
                </div>
                <div style={{borderBottom: "0.5px solid rgba(0,0,0,0.1)", marginBottom: "20px"}}></div>
                <form>
                    <div style={inputDiv}>
                        <img style={iconStyle} src={icon2}/><input style={inputStyle} placeholder="Email"/>
                    </div>
                    <div style={inputDiv}>
                        <img style={iconStyle} src={icon4}/><input style={inputStyle} type="password" placeholder="Password"/>
                    </div>
                    <input style={{width: "100%", backgroundColor: "#01abd6", borderRadius: "3px", paddingTop: "7px", paddingBottom: "7px", color: "white", fontSize: "17px", border: "none", cursor: "pointer"}} type="submit" value="Login"/>
                </form>
                <div style={buttonsCont}>
                    <Link to="/reset"><button style={{float: "left", padding: "7px", backgroundColor: "#ffffff", borderRadius: "3px", color: "#01abd6", fontSize: "17px", border: "solid 1px #01abd6", cursor: "pointer"}}>Forgot Password</button></Link>
                    <Link to="/signup"><button style={{float: "right", padding: "7px", backgroundColor: "#ffffff", borderRadius: "3px", color: "#01abd6", fontSize: "17px", border: "solid 1px #01abd6", cursor: "pointer"}}>Sign Up</button></Link>
                </div>
            </div>
        </div>
        </>
    )

}
export default LoginPage;