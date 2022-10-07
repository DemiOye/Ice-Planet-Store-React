import { Link } from "react-router-dom";
import prawn from "./images/prawn.jpg";


function CartPage() {

    const bannerStyle = {
        backgroundImage: `url(${prawn})`,
        backgroundSize: "cover"
    };

    const innerBanner = {
        textTransform: "uppercase",
        letterSpacing: "1px", 
        color: "white", 
        padding: "50px",
        background: "rgba(6, 24, 78, 0.5)"
    };

    const cartStyle = {
        padding: "40px",
        paddingLeft: "5%",
        paddingRight: "5%"
    };

    const title = {
        color: "#1d1d1d",
        fontSize: "27px",
        letterSpacing: "1px",
        fontWeight: "lighter"
    };

    const buttonStyle = {
        backgroundColor: "transparent",
        width: "200px",
        textTransform: "uppercase",
        border: "1px solid #01abd6",
        fontWeight: "bold",
        paddingTop: "10px",
        paddingBottom: "10px",
        color: "#01abd6",
        textDecoration: "none",
        cursor: "pointer",
        letterSpacing: "1px",
        fontSize: "14px"
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
            <span style={{fontSize: "30px", fontWeight: "lighter"}}>Cart</span>
            </div>
        </div>
        <div style={cartStyle}>
            <div style={{height: "320px"}}>
                <span style={title}>Cart is currently empty. Items you add to your cart will appear here.</span>
                <br></br><br></br>
                <Link to="/shop"><button onMouseOver={overHandler} onMouseOut={outHandler} style={buttonStyle}>Go to Shop</button></Link>
            </div>
            
            <div>

            </div>
        </div>
        </>
    )

}
export default CartPage;