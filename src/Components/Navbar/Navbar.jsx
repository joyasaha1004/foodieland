import React from 'react';
import "./Navbar.css"


import logo_food from "../Assets/logo_food.png";

import {useState} from "react";

import {Link} from "react-router-dom";


const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = ()=>{
        setMenuOpen(!isMenuOpen)
        Other.current.classList.add("hidden")
    }
    console.log(isMenuOpen)
  
    return (
        <div className="bg-black overflow-x-hidden w-full max-w-screen-2xl mx-auto px-2">
           
              
                
             
            <div className="grid grid-cols-2 xl:justify-around relative -left-3 flex mt-1  h-12 xl:h-16  xl:-left-1">
            
               
                <div className="flex font-sans ">
                    <img src={logo_food} className="h-[44px] xl:mt-1 "></img>
                    <h1 className="font-bold text-md mt-2 -ml-4 lg:text-lg
                   text-green xl:text-2xl ">Foodie<span className="text-amber">Land</span></h1>
                </div>

                <div className="text-center hidden xl:block relative ">
                   <ul className=" nav-list lg:text-base flex  text-stone gap-x-12 lg:mt-3 xl:mt-3 
                   xl:text-lg xl:font-semibold ">
                       <li><Link to="/foodieland">Home</Link></li>
                       <li><Link to="/offer">Offer</Link></li>
                       <li><Link to="/menu">Menu</Link></li>
                       <li><Link to="/reservation">Reservation</Link></li>
                       <li><Link to="/contact">Contact</Link></li>
                   </ul>
               </div>

               <div className="py-0.5 relative justify-self-end">
             
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" onClick={toggleMenu} className="size-6  mt-1 xl:hidden">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
   </svg>
   
                   </div>  
                </div>

            {isMenuOpen?(
                <ul className="font-semibold phone-nav  mt-5 text-center text-stone">
                   <li className=""><Link to="/foodieland">Home</Link></li>
                  <li className=""><Link to="/offer">Offer</Link></li>

                  <li className=""><Link to="/menu">Menu</Link></li> 
                 <li className=""><Link to="/reservation">Reservation</Link></li>
                   <li className=""><Link to="/contact">Contact</Link></li>
                        
                </ul>
            ):null

            }
        </div>
    );
};

export default Navbar;