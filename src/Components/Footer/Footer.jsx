import React from 'react';
import "./Footer.css";
import logo_food from "../Assets/logo_food.png";
import facebook from "../Assets/facebook.png";
import instragram from "../Assets/instragram.png";
import telegram from "../Assets/telegram.png";
import linkdin from "../Assets/linkdin.png"

import { Link } from 'react-router-dom';


const Footer = () => {
    return (

             
         <div className="overflow-x-hidden -mt-4 max-w-screen-2xl mx-auto relative">

             <div className="bg-footer-pic bg-cover  relative h-fit pb-2 w-full">
               
              <div className="absolute inset-0 bg-black opacity-50 "></div>
                 <div className="relative">
                 <div className=" font-sans
                 flex absolute mt-1 ">
                    <img src={logo_food} className="w-16 h-10 lg:w-16 lg:h-12 xl:w-20 xl:h-12 xl:mt-2 "></img>
                   <h1 className="font-bold text-md mt-2 -ml-4 lg:text-lg
                    text-green xl:text-xl xl:mt-4 ">Foodie<span className="text-amber">Land</span>
                    </h1>
                </div> 


                <div>

                    <ul className="nav-list flex flex-wrap px-2 pt-16 text-stone text-xs justify-center gap-4 sm:gap-6 sm:px-4 md:text-sm lg:gap-10 lg:text-base xl:gap-12 ">

            <li className=""><Link to="/foodieland">Home</Link></li>
            <li className=""><Link to="/offer">Offer</Link></li>
            <li className=""><Link to="/menu">Menu</Link></li>
            <li className=""><Link to="/reservation">Reservation</Link></li>
         <li className=""><Link to="/contact">Contact</Link></li>  

                    </ul>
                </div>

                <div className="flex footer-img mt-7 justify-center gap-4">

                <img src={facebook} className=""></img>
               <img src={instragram} className=""></img>
             <img src={linkdin} className=""></img>
                    <img src={telegram} className=""></img>
               </div>
                <hr className="mt-4 text-stone"></hr>
                <p className="text-[10px] text-center text-stone relative my-1 lg:text-[12px] xl: xl:text-[15px] 
                  ">Copyright 2024 by Foodieland All Rights Reserved</p>
   
               </div>
                </div>
   </div>
   
                     

                   

    );
};

export default Footer;