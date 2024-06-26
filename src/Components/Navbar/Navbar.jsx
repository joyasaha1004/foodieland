import React from 'react';

import logo from "../Assets/logo.jpg";
import logo_food from "../Assets/logo_food.png";
import img from "../Assets/img.png";
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
        <div className="w-[300px] bg-black sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1500px] xxl-[1800px]">
            <div className="flex pt-3 drop-shadow-xl h-[55px]">
             <div className=" -mt-1 font-sans
                flex 
               ">
                    <img src={logo_food} className="w-16 h-10 lg:w-16 lg:h-12"></img>
                  <h1 className="font-bold text-md mt-2 -ml-4 lg:text-lg
                   text-green">Foodie<span className="text-amber">Land</span></h1>
                </div>

               <div>
                   <ul className="text-stone flex opacity-0 lg:opacity-100 lg:text-base lg:ml-60 lg:gap-8 lg:mt-1">
                       <li className="cursor-pointer hover:text-amber"><Link to="/foodieland">Home</Link></li>
                       <li className="cursor-pointer hover:text-amber"><Link to="/offer">Offer</Link></li>
                       <li className="cursor-pointer hover:text-amber"><Link to="/menu">Menu</Link></li>
                       <li className="cursor-pointer hover:text-amber"><Link to="/reservation">Reservation</Link></li>
                       <li className="cursor-pointer hover:text-amber"><Link to="/contact">Contact</Link></li>
                   </ul>
               </div>
              
                
                
                <button onClick={toggleMenu} className="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6 ml-64 mt-1 sm:ml-[430px] md:ml-[650px] lg:ml-[900px] lg:hidden">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
</svg>
    
                </button>
            </div>

            {isMenuOpen?(
                <ul className="font-semibold mt-5 text-center text-stone ">
                   <li className="cursor-pointer mb-2 hover:text-amber"><Link to="/foodieland">Home</Link></li>
                        <li className="cursor-pointer mb-2 hover:text-amber"><Link to="/offer">Offer</Link></li>
                        <li className="cursor-pointer mb-2 hover:text-amber"><Link to="/menu">Menu</Link></li> 
                        <li className="cursor-pointer mb-2 hover:text-amber"><Link to="/reservation">Reservation</Link></li>
                        <li className="cursor-pointer pb-2 hover:text-amber"><Link to="/contact">Contact</Link></li>
                </ul>
            ):null

            }
        </div>
    );
};

export default Navbar;