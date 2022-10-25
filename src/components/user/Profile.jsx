import { useState } from 'react';
import shrimp from "./shrimp.jpg";

function Profile() {

    const [accountDetailsCont, setAccountDetailsCont] = useState(true);
    const [pendingOrdersCont, setPendingOrdersCont] = useState(false);
    const [orderHistoryCont, setOrderHistoryCont] = useState(false);
    const [billingInfoCont, setBillingInfoCont] = useState(false);
    const [closeAccountCont, setCloseAccountCont] = useState(false);
    const [editAccountDetailsCont, setEditAccountDetailsCont] = useState(false);
    const [updateBillingInfoCont, setUpdateBillingInfo] = useState(false);

    const accountDetailsBtnClick =()=> {
        setAccountDetailsCont(true);
        setPendingOrdersCont(false);
        setOrderHistoryCont(false);
        setBillingInfoCont(false);
        setCloseAccountCont(false);
        setEditAccountDetailsCont(false);
        setUpdateBillingInfo(false);
    };

    const pendingOrdersBtnClick =()=> {
        setAccountDetailsCont(false);
        setPendingOrdersCont(true);
        setOrderHistoryCont(false);
        setBillingInfoCont(false);
        setCloseAccountCont(false);
        setEditAccountDetailsCont(false);
        setUpdateBillingInfo(false);
    };

    const orderHistoryBtnClick =()=> {
        setAccountDetailsCont(false);
        setPendingOrdersCont(false);
        setOrderHistoryCont(true);
        setBillingInfoCont(false);
        setCloseAccountCont(false);
        setEditAccountDetailsCont(false);
        setUpdateBillingInfo(false);
    };

    const billingInfoBtnClick =()=> {
        setAccountDetailsCont(false);
        setPendingOrdersCont(false);
        setOrderHistoryCont(false);
        setBillingInfoCont(true);
        setCloseAccountCont(false);
        setEditAccountDetailsCont(false);
        setUpdateBillingInfo(false);
    };

    const closeAccountBtnClick =()=> {
        setAccountDetailsCont(false);
        setPendingOrdersCont(false);
        setOrderHistoryCont(false);
        setBillingInfoCont(false);
        setCloseAccountCont(true);
        setEditAccountDetailsCont(false);
        setUpdateBillingInfo(false);
    };

    const editAccountDetailsBtnClick =()=> {
        setAccountDetailsCont(false);
        setPendingOrdersCont(false);
        setOrderHistoryCont(false);
        setBillingInfoCont(false);
        setCloseAccountCont(false);
        setEditAccountDetailsCont(true);
        setUpdateBillingInfo(false);
    };

    const saveAccountDetailsBtnClick =()=> {
        setAccountDetailsCont(true);
        setPendingOrdersCont(false);
        setOrderHistoryCont(false);
        setBillingInfoCont(false);
        setCloseAccountCont(false);
        setEditAccountDetailsCont(false);
        setUpdateBillingInfo(false);
    };

    const updateBillingInfoClick =()=> {
        setAccountDetailsCont(false);
        setPendingOrdersCont(false);
        setOrderHistoryCont(false);
        setBillingInfoCont(false);
        setCloseAccountCont(false);
        setEditAccountDetailsCont(false);
        setUpdateBillingInfo(true);
    };

    const saveBillingInfoClick =()=> {
        setAccountDetailsCont(false);
        setPendingOrdersCont(false);
        setOrderHistoryCont(false);
        setBillingInfoCont(true);
        setCloseAccountCont(false);
        setEditAccountDetailsCont(false);
        setUpdateBillingInfo(false);
    };


    const bannerStyle = {
        backgroundImage: `url(${shrimp})`,
        backgroundSize: "cover"
    };

    const innerBanner = {
        textTransform: "uppercase",
        letterSpacing: "1px", 
        color: "white", 
        padding: "50px",
        background: "rgba(6, 24, 78, 0.5)"
    };

    const profileCont = {
        display: "flex",
        padding: "15px",
        //border: "1px solid #01abd6",
        backgroundColor: "rgba(1, 171, 214, 0.2)",
        borderRadius: "5px",
        paddingTop: "50px",
        paddingBottom: "70px",
        paddingLeft: "7%",
        paddingRight: "7%"
    };

    const profileMenu = {
        display: "grid",
        marginRight: "15px",
        borderRadius: "3px",
        backgroundColor: "white",
        minWidth: "180px",
        boxShadow: "0 2px 4px 2px rgba(0,0,0,0.2)",
        marginBottom: "170px"
    };

    const menuButton = {
        background: "none",
        fontSize: "16px",
        letterSpacing: "1px",
        color: "#01abd6",
        padding: "10px",
        paddingLeft: "20px",
        cursor: "pointer",
        border: "none",
        height: "60px",
        //width: "160px",
        textAlign: "left"
    };

    const accountDetails = {
        display: accountDetailsCont ? "grid" : "none",
        padding: "20px",
        width: "80%",
        borderRadius: "3px",
        backgroundColor: "white",
        boxShadow: "0 2px 4px 2px rgba(0,0,0,0.2)"
    };

    const editDetails = {
        display: editAccountDetailsCont ? "grid" : "none",
        padding: "20px",
        width: "80%",
        borderRadius: "3px",
        backgroundColor: "white",
        boxShadow: "0 2px 4px 2px rgba(0,0,0,0.2)"
    };

    const pendingOrders = {
        display: pendingOrdersCont ? "grid" : "none",
        padding: "20px",
        width: "80%",
        height: "500px",
        maxHeight: "500px",
        overflowY: "auto",
        borderRadius: "3px",
        backgroundColor: "white",
        boxShadow: "0 2px 4px 2px rgba(0,0,0,0.2)"
    };

    const orderHistory = {
        display: orderHistoryCont ? "grid" : "none",
        padding: "20px",
        width: "80%",
        height: "500px",
        maxHeight: "500px",
        overflowY: "auto",
        borderRadius: "3px",
        backgroundColor: "white",
        boxShadow: "0 2px 4px 2px rgba(0,0,0,0.2)"
    };

    const billingInfo = {
        display: billingInfoCont ? "grid" : "none",
        padding: "20px",
        width: "80%",
        borderRadius: "3px",
        backgroundColor: "white",
        boxShadow: "0 2px 4px 2px rgba(0,0,0,0.2)"
    };

    const updateBillingInfo = {
        display: updateBillingInfoCont ? "grid" : "none",
        padding: "20px",
        width: "80%",
        borderRadius: "3px",
        backgroundColor: "white",
        boxShadow: "0 2px 4px 2px rgba(0,0,0,0.2)"
    };

    const closeAccount = {
        display: closeAccountCont ? "grid" : "none",
        padding: "20px",
        width: "80%",
        borderRadius: "3px",
        backgroundColor: "white",
        boxShadow: "0 2px 4px 2px rgba(0,0,0,0.2)"
    };

    const label = {
        color: "darkgrey",
        fontSize: "20px",
        fontWeight: "lighter",
        letterSpacing: "1px",
        marginBottom: "15px"
    };

    const profileDetail = {
        color: "#1d1d1d",
        letterSpacing: "1px",
        fontSize: "17px"
    };

    const editProfileBtn = {
        backgroundColor: "transparent",
        width: "200px",
        height: "40px",
        textTransform: "uppercase",
        border: "1px solid #01abd6",
        marginTop: "15px",
        fontWeight: "bold",
        //paddingTop: "10px",
        //paddingBottom: "10px",
        color: "#01abd6",
        textDecoration: "none",
        cursor: "pointer",
        letterSpacing: "1px",
        fontSize: "14px"
    };

    const inputStyle = {
        border: "1px solid #01abd6",
        marginBottom: "20px",
        padding: "5px",
        borderRadius: "3px",
        letterSpacing: "1px",
        fontSize: "16px"
    };


    return (
        <>
            <div style={bannerStyle}>
                <div style={innerBanner}>
                <span style={{fontSize: "30px", fontWeight: "lighter"}}>Profile</span>
                </div>
            </div>

            <div style={profileCont}>
                <div style={profileMenu}>
                    <button style={menuButton} onClick={accountDetailsBtnClick}>Account Details</button>
                    <button style={menuButton} onClick={pendingOrdersBtnClick}>Pending Orders</button>
                    <button style={menuButton} onClick={orderHistoryBtnClick}>Order History</button>
                    <button style={menuButton} onClick={billingInfoBtnClick}>Billing Info</button>
                    <button style={menuButton} onClick={closeAccountBtnClick}>Close Account</button>
                    <button style={menuButton} >Logout</button>
                </div>
                <div style={accountDetails}>
                    <div style={{fontSize: "29px", color: "#01abd6", fontWeight: "lighter", marginBottom: "15px", borderBottom: "solid 1px #d3d3d3"}}>Account Details</div>
                    <label style={label}>Full Name</label>
                    <span style={profileDetail}>Demilade Michael Oyeyele</span>
                    <label style={label}>Email</label>
                    <span style={profileDetail}>demi.oyeyele@gmail.com</span>
                    <label style={label}>Phone Number</label>
                    <span style={profileDetail}>08104424670</span>
                    <label style={label}>Address</label>
                    <span style={profileDetail}>1a, Close G, Hillview Zone, Ogudu GRA</span>
                    <button style={editProfileBtn} onClick={editAccountDetailsBtnClick}>Edit</button>
                </div>
                <div style={editDetails}>
                    <div style={{fontSize: "29px", color: "#01abd6", fontWeight: "lighter", marginBottom: "15px", borderBottom: "solid 1px #d3d3d3"}}>Edit Details</div>
                    <label style={label}>Full Name</label>
                    <input style={inputStyle} value="Demilade Michael Oyeyele"/>
                    <label style={label}>Email</label>
                    <input style={inputStyle} value="demi.oyeyele@gmail.com"/>
                    <label style={label}>Phone Number</label>
                    <input style={inputStyle} value="08104424670"/>
                    <label style={label}>Address</label>
                    <input style={inputStyle} value="1a, Close G, Hillview Zone, Ogudu GRA"/>
                    <button style={editProfileBtn} onClick={saveAccountDetailsBtnClick}>Save</button>
                </div>
                <div style={pendingOrders}>
                    <div style={{fontSize: "29px", color: "#01abd6", fontWeight: "lighter", marginBottom: "15px", borderBottom: "solid 1px #d3d3d3"}}>Pending Orders</div>
                    <label style={label}>23/10/2022</label>
                    <div style={{padding: "10px", borderRadius: "3px", background: "rgba(211, 211, 211, 0.2)", marginBottom: "30px"}}>
                    <span style={profileDetail}><b style={{textTransform: "uppercase", color: "#01abd6"}}>Items</b><br></br>
                    Chicken Breast: 1kg &#8358;2800<br></br>
                    Burgers: 4 packs &#8358;1200<br></br>
                    Delivery Preferences: Uncut / Pickup<br></br> 
                    <b>Total: &#8358;4000</b></span>
                    </div>
                    <label style={label}>23/10/2022</label>
                    <div style={{padding: "10px", borderRadius: "3px", background: "rgba(211, 211, 211, 0.2)", marginBottom: "30px"}}>
                    <span style={profileDetail}><b style={{textTransform: "uppercase", color: "#01abd6"}}>Items</b><br></br>
                    Chicken Breast: 1kg &#8358;2800<br></br>
                    Burgers: 4 packs &#8358;1200<br></br>
                    Delivery Preferences: Uncut / Pickup<br></br> 
                    <b>Total: &#8358;4000</b></span>
                    </div> 
                </div>
                <div style={orderHistory}>
                    <div style={{fontSize: "29px", color: "#01abd6", fontWeight: "lighter", marginBottom: "15px", borderBottom: "solid 1px #d3d3d3"}}>Order History</div>
                    <label style={label}>23/10/2022</label>
                    <div style={{padding: "10px", borderRadius: "3px", background: "rgba(211, 211, 211, 0.2)", marginBottom: "30px"}}>
                    <span style={profileDetail}><b style={{textTransform: "uppercase", color: "#01abd6"}}>Items</b><br></br>
                    Chicken Breast: 1kg &#8358;2800<br></br>
                    Burgers: 4 packs &#8358;1200<br></br>
                    Delivery Preferences: Uncut / Pickup<br></br> 
                    <b>Total: &#8358;4000</b></span>
                    </div>
                    <label style={label}>23/10/2022</label>
                    <div style={{padding: "10px", borderRadius: "3px", background: "rgba(211, 211, 211, 0.2)", marginBottom: "30px"}}>
                    <span style={profileDetail}><b style={{textTransform: "uppercase", color: "#01abd6"}}>Items</b><br></br>
                    Chicken Breast: 1kg &#8358;2800<br></br>
                    Burgers: 4 packs &#8358;1200<br></br>
                    Delivery Preferences: Uncut / Pickup<br></br> 
                    <b>Total: &#8358;4000</b></span>
                    </div>
                    <label style={label}>23/10/2022</label>
                    <div style={{padding: "10px", borderRadius: "3px", background: "rgba(211, 211, 211, 0.2)", marginBottom: "30px"}}>
                    <span style={profileDetail}><b style={{textTransform: "uppercase", color: "#01abd6"}}>Items</b><br></br>
                    Chicken Breast: 1kg &#8358;2800<br></br>
                    Burgers: 4 packs &#8358;1200<br></br>
                    Delivery Preferences: Uncut / Pickup<br></br> 
                    <b>Total: &#8358;4000</b></span>
                    </div>
                    <label style={label}>23/10/2022</label>
                    <div style={{padding: "10px", borderRadius: "3px", background: "rgba(211, 211, 211, 0.2)", marginBottom: "30px"}}>
                    <span style={profileDetail}><b style={{textTransform: "uppercase", color: "#01abd6"}}>Items</b><br></br>
                    Chicken Breast: 1kg &#8358;2800<br></br>
                    Burgers: 4 packs &#8358;1200<br></br>
                    Delivery Preferences: Uncut / Pickup<br></br> 
                    <b>Total: &#8358;4000</b></span>
                    </div>  
                </div>
                <div style={billingInfo}>
                    <div style={{fontSize: "29px", color: "#01abd6", fontWeight: "lighter", marginBottom: "15px", borderBottom: "solid 1px #d3d3d3"}}>Billing Info</div>
                    <label style={label}>Full Name</label>
                    <span style={profileDetail}>Demilade Michael Oyeyele</span>
                    <label style={label}>Email</label>
                    <span style={profileDetail}>demi.oyeyele@gmail.com</span>
                    <label style={label}>Phone Number</label>
                    <span style={profileDetail}>08104424670</span>
                    <label style={label}>Address</label>
                    <span style={profileDetail}>1a, Close G, Hillview Zone, Ogudu GRA</span>
                    <button style={editProfileBtn} onClick={updateBillingInfoClick}>Update</button>
                </div>
                <div style={updateBillingInfo}>
                    <div style={{fontSize: "29px", color: "#01abd6", fontWeight: "lighter", marginBottom: "15px", borderBottom: "solid 1px #d3d3d3"}}>Update Billing Info</div>
                    <label style={label}>Full Name</label>
                    <span style={profileDetail}>Demilade Michael Oyeyele</span>
                    <label style={label}>Email</label>
                    <span style={profileDetail}>demi.oyeyele@gmail.com</span>
                    <label style={label}>Phone Number</label>
                    <span style={profileDetail}>08104424670</span>
                    <label style={label}>Address</label>
                    <span style={profileDetail}>1a, Close G, Hillview Zone, Ogudu GRA</span>
                    <button style={editProfileBtn} onClick={saveBillingInfoClick}>Save</button>
                </div>
                <div style={closeAccount}>
                    <div style={{fontSize: "29px", color: "#01abd6", fontWeight: "lighter", marginBottom: "15px", borderBottom: "solid 1px #d3d3d3"}}>Close Account</div>
                    <label style={label}>Full Name</label>
                    <span style={profileDetail}>Demilade Michael Oyeyele</span>
                    <label style={label}>Email</label>
                    <span style={profileDetail}>demi.oyeyele@gmail.com</span>
                    <label style={label}>Phone Number</label>
                    <span style={profileDetail}>08104424670</span>
                    <label style={label}>Address</label>
                    <span style={profileDetail}>1a, Close G, Hillview Zone, Ogudu GRA</span>
                    <button style={editProfileBtn}>Edit</button>
                </div>
            </div>


        </>
    )
}
export default Profile;