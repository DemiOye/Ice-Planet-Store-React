import { Link } from "react-router-dom";
import prawn from "./images/prawn.jpg";
import breast from "./images/shop/breast.jpeg";
import burgers from "./images/shop/burgers.jpg";

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
        paddingLeft: "7%",
        paddingRight: "7%"
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

    const empty = {
        height: "350px",
        display: "none"
    };

    const notEmpty = {
        display: "grid"
    };

    const cartItem = {
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        padding: "10px",
        marginTop: "30px",
        borderBottom: "1px solid #01abd6"
    };

    const itemSub = {
        width: "70%",
        display: "grid",
        lineHeight: "1.8",
        color: "#1d1d1d"
    };

    const cartImage = {
        width: "10%",
        minWidth: "70px",
        maxHeight: "100px",
        borderRadius: "3px",
        marginRight: "20px"
    };

    const updateCart = {
        padding: "10px",
        paddingRight: "15px",
        paddingLeft: "15px",
        fontSize: "13px",
        fontWeight: "bold",
        letterSpacing: "1px",
        textTransform: "uppercase",
        borderRadius: "3px",
        color: "white",
        backgroundColor: "#01abd6",
        border: "none",
        cursor: "pointer"
    };

    const cartTotal = {
        backgroundColor: "rgba(1, 171, 214, 0.2)",
        color: "#1d1d1d", 
        fontSize: "20px",
        padding: "10px",
        letterSpacing: "1px"
    };

    const deliveryPrefs = {
        marginTop: "30px",
        marginBottom: "30px",
        lineHeight: "2.5"
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

            <div style={empty}>
                <span style={title}>Cart is currently empty. Items you add to your cart will appear here.</span>
                <br></br><br></br>
                <Link to="/shop"><button onMouseOver={overHandler} onMouseOut={outHandler} style={buttonStyle}>Go to Shop</button></Link>
            </div>
            
            <div style={notEmpty}>
                <div style={{}}>
                    <Link to="/shop"><button onMouseOver={overHandler} onMouseOut={outHandler} style={buttonStyle}>Continue Shopping</button></Link>
                </div>
         
                <div style={cartItem}>
                        <img style={cartImage} src={breast} alt="cart item"/>
                        <div style={itemSub}>
                            <span style={{textTransform: "uppercase", fontSize: "18px", color: "#01abd6"}}>Chicken Breast</span>
                            <span style={{fontSize: "16px"}}>&#8358;2800<b style={{fontSize: "15px", color: "darkgrey", fontWeight: "lighter"}}>&nbsp;per kg</b></span>
                            <span style={{fontSize: "17px"}}>Subtotal: <b>&#8358;2800</b></span>
                        </div>
                        <input style={{width: "40px", background: "none", border: "none", fontSize: "17px", marginRight: "20px"}} type="number" value="1"/>
                        <button style={{background: "none", border: "none", fontSize: "25px", color: "red", fontWeight: "bolder", cursor: "pointer"}}>&#10006;</button>
                </div>

                <div style={cartItem}>
                        <img style={cartImage} src={burgers} alt="cart item"/>
                        <div style={itemSub}>
                            <span style={{textTransform: "uppercase", fontSize: "18px", color: "#01abd6"}}>Burgers</span>
                            <span style={{fontSize: "16px"}}>&#8358;1200<b style={{fontSize: "15px", color: "darkgrey", fontWeight: "lighter"}}>&nbsp;per 4 packs</b></span>
                            <span style={{fontSize: "17px"}}>Subtotal: <b>&#8358;1200</b></span>
                        </div>
                        <input style={{width: "40px", background: "none", border: "none", fontSize: "17px", marginRight: "20px"}} type="number" value="1"/>
                        <button style={{background: "none", border: "none", fontSize: "25px", color: "red", fontWeight: "bolder", cursor: "pointer"}}>&#10006;</button>
                </div>

                <div align="right" style={{padding: "10px", marginTop: "5px"}}>
                    <button style={updateCart}>Update Cart</button>
                </div>

                <div style={deliveryPrefs}>
                <span style={{color: "#1d1d1d", fontSize: "23px", marginRight: "20px"}}>Delivery Preferences:</span>
                <br></br>
                <select style={{background: "none", padding: "5px", color: "#01abd6", fontSize: "17px", border: "1px solid #01abd6", width: "25%", minWidth: "150px", marginRight: "20px"}}>
                    <option value="0">Cut</option>
                    <option value="1">Uncut</option>
                </select>
                <select style={{background: "none", padding: "5px", color: "#01abd6", fontSize: "17px", border: "1px solid #01abd6", width: "25%", minWidth: "150px", marginRight: "20px"}}>
                    <option value="0">Pick Up</option>
                    <option value="1">Deliver</option>
                </select>
                <br></br>
                <textarea style={{width: "50%", height: "150px", minWidth: "300px", fontSize: "17px", padding: "8px", marginTop: "30px", border: "1px solid #01abd6"}} placeholder="Please enter additional handling instructions. If none leave blank"></textarea>
                </div>

                <div style={cartTotal}>
                    Cart Total: <span style={{marginLeft: "15%", fontWeight: "bolder"}}>&#8358;4,000.00</span>
                </div>

            </div>

        </div>
        </>
    )

}
export default CartPage;