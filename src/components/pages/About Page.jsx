import { Link } from "react-router-dom";
import a1 from "./images/a1.png";
import a2 from "./images/a2.png";
import a3 from "./images/a3.png";
import fries from "./images/fries.jpg";

function AboutPage() {

    const bannerStyle = {
        backgroundImage: `url(${fries})`,
        backgroundSize: "cover",
    };

    const innerBanner = {
        textTransform: "uppercase",
        letterSpacing: "1px", 
        color: "white", 
        padding: "50px",
        background: "rgba(6, 24, 78, 0.5)"
    };

    const aboutStyle = {
        padding: "30px",
        paddingRight: "5%",
        paddingLeft: "5%"
    };

    const subContainer2 = {
        marginLeft: "16px",
        marginRight: "16px",
        marginTop: "70px",
        marginBottom: "70px"
    };

    const buttonStyle = {
        backgroundColor: "transparent",
        border: "1px solid #01abd6",
        fontWeight: "bold",
        width: "50%",
        minWidth: "250px",
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
            <span style={{fontSize: "30px", fontWeight: "lighter"}}>About Us</span>
            </div>
        </div>
        <div style={aboutStyle}>

                <div style={subContainer2}>
                <span style={{fontSize: "28px"}}>We take Online Orders and deliver to your doorstep</span>
                <div style={{display: "flex", color: "#555555", paddingTop: "30px", paddingBottom: "30px"}}>
                    <img style={{width: "65px", height: "65px", borderRadius: "50%", marginRight: "20px", boxShadow: "0 6px 15px rgba(16, 110, 234, 0.2)"}} src={a1} alt="a1"/>
                    <div style={{display: "grid"}}><span style={{fontSize: "18px"}}>Quality Produce</span>
                    Our Quality Assurance ensures that only the best produce are procured and processed for our Customers 
                    </div>
                </div>
                <div style={{display: "flex", color: "#555555", paddingTop: "30px", paddingBottom: "30px"}}>
                    <img style={{width: "65px", height: "65px", borderRadius: "50%", marginRight: "20px", boxShadow: "0 6px 15px rgba(16, 110, 234, 0.2)"}} src={a2} alt="a2"/>
                    <div style={{display: "grid"}}><span style={{fontSize: "18px"}}>Online Purchase & Delivery</span>
                    We have recently invested in our IT, Logistics & Supply Chain capabilities to ensure we are able to deliver your online purchases to your doorstep  
                    </div>
                </div>
                <div style={{display: "flex", color: "#555555", paddingTop: "30px", paddingBottom: "30px"}}>
                    <img style={{width: "65px", height: "65px", borderRadius: "50%", marginRight: "20px", boxShadow: "0 6px 15px rgba(16, 110, 234, 0.2)"}} src={a3} alt="a3"/>
                    <div style={{display: "grid"}}><span style={{fontSize: "18px"}}>WholeSale and Corporate Distribution</span>
                    We have recently ramped up our storage and channel capacity to cater for wholesale corporate customers  
                    </div>
                </div>
                <p style={{fontSize: "17px", color: "#555555"}}>At IcePlanet we are particular to provide high quality frozen foods such as Chicken, Turkey, Fish, Burger,
                   Sausages etc, we source for the highest grade and on occasions we partner with the respective farmers to
                   ensure we get the quality that our customers deserve.</p>
                <p style={{fontSize: "17px", color: "#555555"}}>
                   Additionally, we also specialize in Online Orders and Home Deliveries through our website and robust distribution
                   network, we also do wholesale supply and distribution for our corporate clients.</p>
                <div style={{marginTop: "50px"}} align="center">
                   <Link to="/contact"><button onMouseOver={overHandler} onMouseOut={outHandler} style={buttonStyle}>CONTACT US</button></Link>
                </div>
                </div>
      
        </div>
        </>
    )

}
export default AboutPage;