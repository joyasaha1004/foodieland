import React from 'react';
import pot_food from "../Assets/pot_food.png";
import spon from "../Assets/spon.png";
import service from "../Assets/service.png";
import booking from "../Assets/booking.png";
import peacefull from "../Assets/peacefull.png";
import leaf from "../Assets/leaf.png";


const Choice_us = () => {
    return (
        <div>

<div className="bg-black pt-20 pb-2 lg:-mt-2">
                 <div className="bg-amber mx-2 px-2 lg:mx-5 sm:w-[480px] md:w-[680px] lg:w-[960px] relative overflow-hidden rounded md:flex xl:mx-7 xl:w-[1225px] xxl:w-[1540px]">
                     <div className="-ml-7 -mt-[13px] sm:-mt-[16px] sm:-ml-8 lg:-mt-[21px] lg:-ml-10 ">
                         <img src={leaf} className="w-44 h-40 sm:w-52 sm:h-48 lg:w-60 lg:h-60 xl:w-68 xl:h-68 xxl:w-72 xxl:h-72 xxl:-ml-0.5 xxl:-mt-1"></img>
                     </div>
                 <div className=" mt-1  relative sm:ml-20 md:mt-40 md:-ml-40 lg:-ml-28 xxl:-ml-10">
                <img src={pot_food} className="w-44 h-40 ml-16 -mt-24 sm:-mt-32 sm:w-52 sm:h-48 relative xl:w-80   md:w-44 md:h-44 lg:w-64 lg:h-72 lg:-ml-2 xxl:w-[380px] xxl:h-80"></img>
                 </div>
                 <div className="-pt-1 pl-5  sm:-pt-4 pb-5 md:pt-4 xl:pl-16">
                     <span className="-ml-2 text-orange lg:font-extrabold text-sm sm:text-base lg:text-xl font-serif xl:text-2xl xxl:text-3xl">Why Us</span>

                     <div className="-ml-10 mt-2 grid grid-cols-2 text-stone sm:mt-1 lg:mt-3  
                     ">
                         <div className="flex w-40 sm:w-52 sm:ml-4 sm:mb-7 lg:w-60 xl:w-72 xxl:w-80"> 
                             
                             <img src={spon} className="w-7 h-6 ml-4 lg:w-10 lg:h-8 xl:w-12 xl:h-10"></img>
                             <div className="leading-4 ">
                                   <p className="font-semibold text-sm sm:mb-0.5 lg:text-xl xl:text-2xl xxl:text-3xl">Good Chefs</p>
                                   <span className="text-[11px] lg:text-sm xl:text-base xxl:text-lg">We have expert chefs.He has knowledge about different kinds of tast and healty food.
                                   </span>
                             </div>
                           
                            
                         </div>
                         <div className=" lg:-mt-1 flex leading-4 sm:w-52 lg:w-72 xl:w-80 xxl:w-[350px]">
                              <img src={service} className="w-7 h-7  ml-4 lg:w-16 lg:h-[50px]"></img>
                              <div>
                                   <p className="font-semibold text-sm sm:mb-0.5 lg:text-xl xl:text-2xl xxl:text-3xl">Good Service</p>
                                   <span className="text-[11px] lg:text-sm xl:text-base xxl:text-lg
                                  ">Customer choice is our first priority.Our all servents are ready to give a good hospitality. </span>
                              </div>
                            
                            
                         </div>
                         <div className=" sm:-mt-4 sm:ml-1 leading-4 flex mt-5 sm:w-52 sm:ml-2 lg:w-60 lg:mt-1 xl:w-72 xxl:w-[350px]" >
                             <img src={booking} className="w-8 h-9 mt-3 ml-4  lg:w-12 lg:h-12 sm:-mt-1 lg:ml-5"></img>
                             <div className="ml-0.5">
                                  <p className="text-sm font-semibold sm:mb-0.5 lg:text-xl xl:text-2xl xxl:text-3xl">Online Booking</p>
                                  <span className="text-[11px] lg:text-sm xl:text-base xxl:text-lg
                                  ">Any time you can reserve our table and enjoy your day</span>
                             </div>
                            
                             

                         </div>
                         <div className="sm:-mt-4 md:-mt-2 leading-4 flex mt-5 sm:w-52 lg:w-72 lg:ml-2 lg:mt-1 xl:w-80 xxl:w-[380px]">
                              <img src={peacefull} className="w-7 h-6 mt-2 ml-5 lg:w-12 lg:h-10 lg:-mt-0.5 sm:-mt-1"></img>
                              <div>
                                   <p className="font-semibold text-sm sm:mb-0.5 lg:text-xl xl:text-2xl xxl:text-3xl">Peaceful Environment</p>
                                   <span className="text-[11px] lg:text-sm xl:text-base xxl:text-lg
                                  ">Our restaurant environment give you a mental peace in urban life.</span>
                              </div>
                            
                            
                         </div>
                     </div>
                 </div>

             </div></div>    
            
        </div>
    );
};

export default Choice_us;