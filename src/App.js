import React from "react";
import Landing from "./components/Landing";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import Header from "./components/global/Header";
import User from "./components/UserProfile";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import About from "./components/About";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Reset from "./components/Reset";

function App() {
  
  return (
  <Routes>
    <Route path="/" element={<Header/>}/>
    <Route index element={<Landing/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/user" element={<User/>}/>
    <Route path="/reset" element={<Reset/>}/>
  </Routes>
  );

}
export default App;
