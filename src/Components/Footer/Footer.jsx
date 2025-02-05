import React from 'react';
import "./Footer.css"
import footer from "../Assets/footer.png";
import logo_food from "../Assets/logo_food.png";
import facebook from "../Assets/facebook.png";
import instragram from "../Assets/instragram.png";
import telegram from "../Assets/telegram.png";
import linkdin from "../Assets/linkdin.png"

import { Link } from 'react-router-dom';


const Footer = () => {
    return (
//         <div className="overflow-x-hidden relative">
//             <div className="bg-footer-bg w-full  mt-40">
//             <div className="relative  ">
//                 {/* </div><img src={footer} className="brightness-[0.2] "></img> */}
//                    <div className="absolute  inset-0 bg-black opacity-50 "></div>  

//                      <div className="relative md:mt-16 lg:mt-12">
//                 <div className=" font-sans
//                 flex absolute -mt-16 ">
//                     <img src={logo_food} className="w-16 h-10 lg:w-16 lg:h-12 xl:w-20 xl:h-12 xl:mt-2 xxl:mt-2.5"></img>
//                   <h1 className="font-bold text-md mt-2 -ml-4 lg:text-lg
//                    text-green xl:text-xl xl:mt-4 xxl:text-2xl">Foodie<span className="text-amber">Land</span>
//                    </h1>
//                 </div>

//                 <div className=" md:-mt-3">

//                 <div>
                  
//                    <ul className="text-stone flex -mt-32 text-xs gap-4 px-5  relative sm:ml-20 sm:gap-7 lg:text-base  xl:text-lg xl:gap-10 xl:ml-[300px] xxl:text-xl xxl:gap-12 ">
//                        <li className="cursor-pointer hover:text-amber"><Link to="/foodieland">Home</Link></li>
//                        <li className="cursor-pointer hover:text-amber"><Link to="/offer">Offer</Link></li>
//                        <li className="cursor-pointer hover:text-amber"><Link to="/menu">Menu</Link></li>
//                        <li className="cursor-pointer hover:text-amber"><Link to="/reservation">Reservation</Link></li>
//                        <li className="cursor-pointer hover:text-amber"><Link to="/contact">Contact</Link></li>
//                    </ul>
//                </div> 

//                <div className="relative flex mt-7 px-20 sm:px-48 md:-mt-5 
//                md:-right-32 md:absolute  xxl:right-[0px] ">
//                    <img src={facebook2} className="w-5 h-5 mr-2 xl:w-7 xl:h-7"></img>
//                    <img src={instragram2} className="w-5 h-[22px] xl:w-7 xl:h-[30px]"></img>
//                    <img src={linkedin2} className="w-9 h-[22px] xl:w-12 xl:h-[30px]"></img>
//                    <img src={twitter2} className="w-12 h-8 -mt-1 -ml-3 xl:w-16 xl:h-[48px] xl:-mt-[8px]"></img>
//                    <img src={telegram2} className="w-[22px] h-[20px] mt-0.5 -ml-1 xl:w-[30px] xl:h-[30px] xl:mt-0.5"></img>
//                </div></div>
//                </div>
//  <hr className="relative text-gray mt-5"></hr>

                
//                 <p className="text-[10px] text-center text-stone relative my-1 lg:text-[12px] xl: xl:text-[15px] xxl:text-[17px]
//                  ">Copyright 2024 by Foodieland All Rights Reserved</p>
           
//             </div>
           
//           </div>
//         </div>
         <div className="overflow-x-hidden -mt-4  relative">

             <div className="bg-footer-pic bg-cover  relative h-fit pb-2 w-full">
               
              <div className="absolute inset-0 bg-black opacity-50 "></div>
                 <div className="relative">
                 <div className=" font-sans
                 flex absolute mt-1 ">
                    <img src={logo_food} className="w-16 h-10 lg:w-16 lg:h-12 xl:w-20 xl:h-12 xl:mt-2 xxl:mt-2.5"></img>
                   <h1 className="font-bold text-md mt-2 -ml-4 lg:text-lg
                    text-green xl:text-xl xl:mt-4 xxl:text-2xl">Foodie<span className="text-amber">Land</span>
                    </h1>
                </div> 


                <div>

                    <ul className="nav-list flex flex-wrap px-2 pt-16 text-stone text-xs justify-self-center gap-4 sm:gap-6 sm:px-4 md:text-sm lg:gap-10 lg:text-base xl:gap-12 xxl:gap-16">

            <li className=""><Link to="/foodieland">Home</Link></li>
            <li className=""><Link to="/offer">Offer</Link></li>
            <li className=""><Link to="/menu">Menu</Link></li>
            <li className=""><Link to="/reservation">Reservation</Link></li>
         <li className=""><Link to="/contact">Contact</Link></li>  

                    </ul>
                </div>

                <div className="flex footer-img mt-7 justify-self-center gap-4">

                <img src={facebook} className=""></img>
               <img src={instragram} className=""></img>
             <img src={linkdin} className=""></img>
                    <img src={telegram} className=""></img>
               </div>
                <hr className="mt-4 text-stone"></hr>
                <p className="text-[10px] text-center text-stone relative my-1 lg:text-[12px] xl: xl:text-[15px] xxl:text-[17px]
                  ">Copyright 2024 by Foodieland All Rights Reserved</p>
   
               </div>
                </div>
   </div>
   
                     

                   

    );
};

export default Footer;