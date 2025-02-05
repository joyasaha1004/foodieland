import React from "react";
import Navbar from "../src/Components/Navbar/Navbar"
import Home from "../src/Components/Pages/Home";
import {Route, Routes} from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../src/Components/Footer/Footer";
import Offer from './Components/Pages/Offer';
import Contact from './Components/Pages/Contact';
import Menu from './Components/Pages/Menu';
import Reservation from './Components/Pages/Reservation';

function App() {

  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();

  },[]);

  
  return (
    <>
    <Navbar/>
     <Routes>
    <Route path="/foodieland" element={<Home/>}/>
     <Route path="/" element={<Home/>}/>
    <Route path="/offer" element={<Offer/>}/>
    {/*<Route path="/menu" element={<Menu/>}/> */}
   
    {/* <Route path="/reservation" element={<Reservation/>}/>
    <Route path="/contact" element={<Contact/>}/> */}
  
     </Routes>
  
  <Footer/>
    </>
  )
}

export default App
