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
        <div className="bg-black overflow-x-hidden">
            <div className="flex w-3/4 pt-3 drop-shadow-xl h-[55px] xl:h-[70px]">
             <div className="-ml-2 -mt-1 font-sans xxl:ml-7 flex ">
                    <img src={logo_food} className="w-16 h-10 lg:w-16 lg:h-12 xl:w-20 xl:h-12 xl:mt-2 xxl:mt-2.5"></img>
                  <h1 className="font-bold text-md mt-2 -ml-4 lg:text-lg
                   text-green xl:text-xl xl:mt-4 xxl:text-2xl">Foodie<span className="text-amber">Land</span></h1>
                </div>

               <div className="">
                   <ul className="text-stone nav-list flex  opacity-0  lg:opacity-100 lg:text-base lg:ml-80 lg:gap-8 lg:mt-1 xl:mt-3 xl:ml-[480px]
                   xl:text-lg xl:gap-10 xxl:ml-[670px] xxl:text-xl xxl:gap-12">
                       <li><Link to="/foodieland">Home</Link></li>
                       <li><Link to="/offer">Offer</Link></li>
                       <li><Link to="/menu">Menu</Link></li>
                       <li><Link to="/reservation">Reservation</Link></li>
                       <li><Link to="/contact">Contact</Link></li>
                   </ul>
               </div>
              
                
                
                <button onClick={toggleMenu} className="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6 ml-64 mt-1 sm:ml-[430px] md:ml-[650px] lg:ml-[900px] lg:hidden">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
</svg>
    
                </button>
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