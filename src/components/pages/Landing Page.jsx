import { Outlet, Link } from "react-router-dom";
import shrimp from "./images/shrimp.jpg";

function LandingPage() {

    const bannerStyle = {
        backgroundImage: `url(${shrimp})`,
    };

    const intro = {
        background: "rgba(0,0,0,0.4)",
        color: "white",
        paddingLeft: "15px",
        paddingRight: "15px", 
        paddingTop: "150px",
        paddingBottom: "250px"
    };

    const buttonCont = {
        display: "inline-block",
        padding: "15px"
    };

    const buttonStyle = {
        padding: "10px",
        width: "150px",
        color: "white",
        fontSize: "17px",
        backgroundColor: "#01abd6",
        display: "inline-block", 
        margin: "10px",
        border: "none",
        borderRadius: "3px",
        cursor: "pointer"
    };

    return (
        <>
        <div style={bannerStyle}>
            <div align="center" style={intro}>
                <h1>Welcome to Ice Planet Cold Store</h1>
                <span style={{fontSize: "18px"}}>We are open Monday to Saturday, 8am - 7pm. Thanks for your patronage.</span>
                <br></br>
                <div style={buttonCont}>
                    <Link to="/shop"><button style={buttonStyle}>Go to Shop</button></Link>
                    <Link to="/signup"><button style={buttonStyle}>Create Account</button></Link>
                    <Link to="/login"><button style={buttonStyle}>Login</button></Link>
                </div>
            </div>
        </div>
        </>
    )

}
export default LandingPage;