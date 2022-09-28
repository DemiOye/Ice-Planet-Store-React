import { Outlet, Link } from "react-router-dom";
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

    const textareaStyle = {
        width: "89%",
        padding: "10px",
        height: "230px",
        letterSpacing: "1px",
        fontFamily: "Arial, san-serrif", 
        border: "none",
        borderTopRightRadius: "0.25rem",
        borderBottomRightRadius: "0.25rem",
        fontSize: "16px"
    };

    const buttonsCont = {
        backgroundColor: "red",
        marginTop: "15px", 
        marginBottom: "50px"
    };

    return (
        <>
        <div align="center" style={signupStyle}>
            <div style={container}>
            <div style={{display: "flex", width: "100%", marginBottom: "20px"}}>
                <div align="left" style={{fontWeight: "lighter", fontSize: "27px", paddingTop: "5px", width: "90%"}}>Create IcePlanet Account</div>
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
                <input style={{width: "100%", backgroundColor: "#01abd6", borderRadius: "3px", paddingTop: "7px", paddingBottom: "7px", color: "white", fontSize: "17px", border: "none", cursor: "pointer"}} type="submit" value="Create Account"/>
                <div style={buttonsCont}>
                    <Link to="/login"><button style={{float: "left", padding: "7px", backgroundColor: "#ffffff", borderRadius: "3px", color: "#01abd6", fontSize: "17px", border: "solid 1px #01abd6", cursor: "pointer"}}>Log In</button></Link>
                    <button style={{float: "right", padding: "7px", backgroundColor: "#ffffff", borderRadius: "3px", color: "#01abd6", fontSize: "17px", border: "solid 1px #01abd6", color: "#01abd6", cursor: "pointer"}}>Resend Verification Email</button>
                </div>
            </form>
            </div>
        </div>
        </>
    )

}
export default SignupPage;