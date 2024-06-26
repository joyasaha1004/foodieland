import React from 'react';
import footer from "../Assets/footer.png";
import logo_food from "../Assets/logo_food.png";
import facebook2 from "../Assets/facebook2.png";
import instragram2 from "../Assets/instragram2.png";
import telegram2 from "../Assets/telegram2.png";
import twitter2 from "../Assets/twitter2.png";
import linkedin2 from "../Assets/linkedin2.png"

import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="w-[300px] sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1500px] xxl:w-[1800px]">
            <div className="relative">
                <img src={footer} className="brightness-[0.2] h-[200px] md:h-[150px] lg:h-[160px] sm:w-[500px] w-[300px] md:w-[700px] lg:w-[1000px] xl:w-[1500px] xxl:w-[1800px]"></img>
                     

                     <div className=" md:mt-16 lg:mt-12">
                <div className=" font-sans
                flex absolute -mt-16">
                    <img src={logo_food} className="w-16 h-10 lg:w-16 lg:h-12"></img>
                  <h1 className="font-bold text-md mt-2 -ml-4 lg:text-lg
                   text-green">Foodie<span className="text-amber">Land</span>
                   </h1>
                </div>

                <div className=" md:-mt-3">

                <div>
                  
                   <ul className="text-stone flex -mt-32 text-xs gap-4 px-5  relative sm:ml-20 sm:gap-7 lg:text-base">
                       <li className="cursor-pointer hover:text-amber"><Link to="/foodieland">Home</Link></li>
                       <li className="cursor-pointer hover:text-amber"><Link to="/offer">Offer</Link></li>
                       <li className="cursor-pointer hover:text-amber"><Link to="/menu">Menu</Link></li>
                       <li className="cursor-pointer hover:text-amber"><Link to="/reservation">Reservation</Link></li>
                       <li className="cursor-pointer hover:text-amber"><Link to="/contact">Contact</Link></li>
                   </ul>
               </div> 

               <div className="relative flex mt-7 px-20 sm:px-48 md:-mt-5 
               md:-right-32 md:absolute xl:right-[350px] xxl:right-[600px]">
                   <img src={facebook2} className="w-5 h-5 mr-2"></img>
                   <img src={instragram2} className="w-5 h-[22px]"></img>
                   <img src={linkedin2} className="w-9 h-[22px]"></img>
                   <img src={twitter2} className="w-12 h-8 -mt-1 -ml-3"></img>
                   <img src={telegram2} className="w-[22px] h-[20px] mt-0.5 -ml-1"></img>
               </div></div>
               </div>
 <hr className="relative text-gray mt-5"></hr>

                
                <p className="text-[10px] text-center text-stone relative my-1 lg:text-[12px] xl:-ml-[480px] xxl:-ml-[700px]
                 ">Copyright 2024 by Foodieland All Rights Reserved</p>
           
            </div>
           
          
        </div>
    );
};

export default Footer;