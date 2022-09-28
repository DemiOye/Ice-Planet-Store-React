import logo from "./images/ice.png";
import instagram from "./images/instagram.png";
import facebook from "./images/facebook.png";
import linkedin from "./images/linkedin.png";

function Footer() {

    const footerStyle = {
        display: "flex",
        backgroundColor: "#06184e",
        padding: "15px"
    };

    const sub = {
        display: "grid",
        marginRight: "65%",
        paddingLeft: "10px",
        paddingTop: "30px"
    };

    const socialCont = {
        display: "inline-block",
        listStyle: "none"
    };

    const socialStyle = {
        display: "inline-block",
        textDecoration: "none",
        color: "white",
        marginRight: "50px",
        marginBottom: "20px"
    };

    const copyRight = {
        color: "white",
        marginTop: "20px",
        textDecoration: "none",
        fontWeight: "bolder"
    };

    return (
        <>
        <div style={footerStyle}>
            <div style={sub}>
            <div style={socialCont}>
                <a style={socialStyle} href="https://www.instagram.com/iceplanetstore/"><img style={{width: "27px"}} src={instagram} alt="instagram"/></a>
                <a style={socialStyle} href="https://www.facebook.com/iceplanetstorelagos"><img style={{width: "27px"}} src={facebook} alt="facebook"/></a>
                <a style={socialStyle} href="https://www.linkedin.com/company/ice-planet-cold-store"><img style={{width: "27px"}} src={linkedin} alt="linkedin"/></a>
            </div>
            <a style={copyRight} href="http://factorialsystems.io/">Copyright &copy; Factorial Systems 2022</a>
            </div>
            <img style={{width: "150px"}} src={logo} alt="logo"/>
        </div>
        </>
    )
}
export default Footer;