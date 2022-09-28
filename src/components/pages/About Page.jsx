import { Outlet, Link } from "react-router-dom";
import about from "./images/about.jpg";
import a1 from "./images/a1.png";
import a2 from "./images/a2.png";
import a3 from "./images/a3.png"

function AboutPage() {

    const aboutStyle = {
        padding: "30px",
        paddingRight: "7%",
        paddingLeft: "7%"
    };

    const mainContainer = {
        display: "flex",
        alignContent: "center",
        justifyContent: "center"
    };

    const subContainer1 = {
        marginLeft: "16px",
        marginRight: "16px"
    };

    const subContainer2 = {
        marginLeft: "16px",
        marginRight: "16px",
        marginTop: "60px"
    };

    const buttonStyle = {
        backgroundColor: "#01abd6",
        width: "100%",
        paddingTop: "10px",
        paddingBottom: "10px",
        border: "none",
        borderRadius: "5px",
        color: "white",
        textDecoration: "none",
        cursor: "pointer",
        letterSpacing: "1px",
        fontSize: "16px"
    };

    return (
        <>
        <div style={aboutStyle}> 
            <div style={{marginBottom: "35px"}} align="center">
                <span style={{backgroundColor: "#e7f1fd", borderRadius: "20px", padding: "7px", paddingLeft: "25px", paddingRight: "25px", color: "#106eea", fontSize: "15px", textTransform: "uppercase", fontWeight: "700"}}>About</span>
                <h2 style={{fontSize: "35px", fontWeight: "lighter", margin: "15px"}}>Find Out More<b style={{color: "#106eea", marginLeft: "10px"}}>About Us</b></h2>
                <span style={{fontSize: "20px"}}>At IcePlanet our watchword is Quality.</span>
            </div>
            <div style={mainContainer}>
                <div style={subContainer1}>
                    <img src={about} alt="About"/>
                </div>
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
                <Link to="/contact"><button style={buttonStyle}>Contact Us</button></Link>
                </div>
            </div>
        </div>
        </>
    )

}
export default AboutPage;