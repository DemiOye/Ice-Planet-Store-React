import logo from "./images/logo.png";
import icon2 from "./images/icon2.png";

function ResetPage() {

    const mainStyle = {
        paddingTop: "70px",
        paddingBottom: "180px"
    };

    const container = {
        width: "70%",
        minWidth: "320px",
        padding: "20px",
        paddingTop: "30px",
        paddingBottom: "30px"
    };

    const inputDiv = {
        display: "flex",
        alignContent: "center",
        justifyContennt: "center",
        border: "1px solid #ced4da",
        backgroundColor: "#e9ecef",
        maringTop: "10px",
        marginBottom: "20px"
    };

    const iconStyle = {
        marginTop: "3px",
        marginLeft: "5px",
        marginRight: "5px",
        width: "32px",
        height: "32px"
    };

    const inputStyle = {
        width: "95%",
        padding: "10px",
        fontSize: "16px",
        letterSpacing: "1px",
        border: "none",
        fontWeight: "lighter"
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
        <div align="center" style={mainStyle}>
                <div style={container}>
                    <div style={{display: "flex", width: "100%", marginBottom: "20px"}}>
                        <div align="left" style={{fontWeight: "lighter", fontSize: "27px", paddingTop: "5px", width: "90%"}}>Reset Password</div>
                        <img style={{width: "65px"}} src={logo} alt="logo"/>
                    </div>
                    <div style={{borderBottom: "0.5px solid rgba(0,0,0,0.1)", marginBottom: "20px"}}></div>
                    <form>
                        <div style={inputDiv}>
                            <img style={iconStyle} src={icon2} alt="icon"/><input style={inputStyle} placeholder="Email"/>
                        </div>
                        <input onMouseOver={overHandler} onMouseOut={outHandler} style={{width: "50%", minWidth: "200px", background: "none", paddingTop: "7px", paddingBottom: "7px", color: "#01abd6", fontSize: "14px", fontWeight: "bold", border: "1px solid #01abd6", cursor: "pointer", float: "left"}} type="submit" value="RESET PASSWORD"/>
                    </form>
                </div>
        </div>
        </>
    )
}
export default ResetPage;