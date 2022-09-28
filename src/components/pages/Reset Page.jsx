import logo from "./images/logo.png";
import icon2 from "./images/icon2.png";

function ResetPage() {

    const mainStyle = {
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
        marginBottom: "20px",
        borderRadius: "0.25rem"
    };

    const iconStyle = {
        marginTop: "3px",
        marginLeft: "5px",
        marginRight: "5px",
        width: "32px",
        height: "32px"
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
                            <img style={iconStyle} src={icon2}/><input style={inputStyle} placeholder="Email"/>
                        </div>
                        <input style={{width: "100%", backgroundColor: "#01abd6", borderRadius: "3px", paddingTop: "7px", paddingBottom: "7px", color: "white", fontSize: "17px", border: "none"}} type="submit" value="Reset Password"/>
                    </form>
                </div>
        </div>
        </>
    )
}
export default ResetPage;