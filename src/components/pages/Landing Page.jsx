import { Link } from "react-router-dom";
import shrimp from "./images/shrimp.jpg";

function LandingPage() {

    const bannerStyle = {
        backgroundImage: `url(${shrimp})`,
    };

    const intro = {
        background: "rgba(6, 24, 78, 0.4)",
        color: "white",
        paddingLeft: "20px",
        paddingRight: "20px", 
        paddingTop: "120px",
        paddingBottom: "250px"
    };

    const buttonCont = {
        display: "inline-block",
        padding: "15px"
    };

    const buttonStyle = {
        padding: "10px",
        width: "180px",
        textTransform: "uppercase",
        color: "white",
        fontSize: "17px",
        fontWeight: "bold",
        backgroundColor: "transparent",
        display: "inline-block", 
        margin: "10px",
        border: "1px solid white",
        cursor: "pointer"
    };

    const overHandler =(e)=> {
        e.target.style.backgroundColor = "#01abd6";
        e.target.style.border = "1px solid #01abd6";
    };

    const outHandler =(e)=> {
        e.target.style.backgroundColor = "transparent";
        e.target.style.border = "1px solid white";
    };

    return (
        <>
        <div style={bannerStyle}>
            <div align="center" style={intro}>
                <h1 style={{fontWeight: "lighter"}}>WELCOME TO ICEPLANET COLD STORE</h1>
                <span style={{fontSize: "18px"}}>We are open Monday to Saturday, 8am - 7pm. Thanks for your patronage.</span>
                <br></br>
                <div style={buttonCont}>
                    <Link to="/shop"><button onMouseOver={overHandler} onMouseOut={outHandler} style={buttonStyle}>Go to Shop</button></Link>
                    <Link to="/signup"><button onMouseOver={overHandler} onMouseOut={outHandler} style={buttonStyle}>Create Account</button></Link>
                    <Link to="/login"><button onMouseOver={overHandler} onMouseOut={outHandler} style={buttonStyle}>Login</button></Link>
                </div>
            </div>
        </div>
        </>
    )

}
export default LandingPage;