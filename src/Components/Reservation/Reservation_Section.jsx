import React from 'react';
 import reservation1 from "../Assets/reservation1.png";
 import booking from "../Assets/booking.png";

const Reservation_Section = () => {
    return (
        <div className="overflow-x-hidden  w-full bg-black pb-40 max-w-screen-2xl mx-auto">
            <div>
                <div className="relative bg-reservation-bg w-full bg-cover bg-center h-fit pt-40 pb-24 sm:pb-28 md:pb-36 lg:pb-44 xl:pb-72">

                <div className="absolute inset-0 bg-black opacity-50 "></div>
                  
                    <div className="text-center text-stone relative -mt-10 px-2 sm:px-4 lg:mt-3 xl:mt-20">
                    <h3 className="text-3xl font-serif text-amber mb-2 md:mb-2 lg:text-4xl xl:text-5xl ">Visit Us,Make Your Reservation</h3>
                        <p className="text-xs lg:text-base xl:text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi ratione expedita, maxime dolores impedit?</p>
                    </div>

                </div>
                 

                 <div className="">
                 <div className="mt-20 relative justify-items-center md:mt-24 lg:grid grid-cols-3  lg:mt-28 xl:mt-32 ">
                    <img src={reservation1} className="w-40 h-56  relative md:w-52 md:h-64 lg:w-60 lg:h-80 xl:w-72 xl:h-[390px] lg:mt-4 "></img>
                    <div className="col-span-2">
                    <div className="text-center px-2 pt-5 ">
                        <h3 className="text-amber text-xl mb-2 font-semibold sm:text-2xl lg:text-3xl xl:text-4xl xl:mb-2 ">Book Your Table Today</h3>
                        <p className="text-stone text-[10px] tracking-widest sm:text-[12px] lg:text-[14px] ">WE ARE HERE TO MAKE YOUR MOOD TASTY AND PEACFULL</p>
                    </div>

                    <div className="justify-items-center w-full relative  text-sm pt-3 sm:pt-0 px-2  lg:text-base xl:text-lg">
                       <div className="md:flex flex-wrap sm:place-content-center sm:gap-2 lg:gap-4">
                    <div>
                        <input type="text" className="w-full h-7 rounded text-center sm:mt-5 mb-5 lg:h-8 xl:h-9 hover:border-2 hover:border-amber" placeholder="Name"></input>
                    </div>
                     <div className=" flex flex-wrap gap-2 place-content-center relative">
                         <div>
                         <select className=" h-7  rounded lg:h-8 xl:w-24 hover:border-2  xl:h-9 hover:border-amber ">
                             <option >Child</option>
                             <option value="1">1</option>
                             <option value="2">2</option>
                             <option value="3">3</option>
                             <option value="4">4</option>
                             <option value="5">5</option>
                             <option value="6">6</option>
                             <option value="7">7</option>
                             <option value="8">8</option>
                             <option value="9">9</option>

                         </select>
                           </div>
                           <div>
                         <select className=" h-7  rounded md:w-20 lg:w-24 lg:h-8 xl:w-28 hover:border-2 hover:border-amber xl:h-9 ">
                             <option >Person</option>
                             <option value="1">1</option>
                             <option value="2">2</option>
                             <option value="3">3</option>
                             <option value="4">4</option>
                             <option value="5">5</option>
                             <option value="6">6</option>
                             <option value="7">7</option>
                             <option value="8">8</option>
                             <option value="9">9</option>
                             <option value="10">10</option>
                             <option value="12">12</option>
                             <option value="13">13</option>
                             <option value="14">14</option>
                             <option value="15">15</option>
                            
                         </select>
</div>
                          <div>
                         <input type="date" placeholder="Time" className="h-7 lg:h-8 rounded hover:border-2 hover:border-amber xl:text-lg xl:h-9 "></input>
                         
                         </div>
                         </div>
 </div>
                         <div className="w-full md:w-[100%] lg:w-[80%] ">
                       
                         <textarea className="mt-5 w-full rounded h-28 text-center  xl:h-36 hover:border-2  hover:border-amber " placeholder="Special Message"></textarea>
                        
                         </div>
                     <button className="bg-amber text-stone rounded mt-4 p-2 text-sm hover:bg-amber sm:mt-4  xl:text-lg ">MAKE YOUR RESERVATION</button>
                     </div>
                 </div> 
               </div>

            </div></div>
                   <div className="mt-9 relative bg-wood-bg w-full h-fit pb-10 lg:mt-20 xl:mt-16">
                     
            <div className="text-center pt-7">
                <h3 className="text-amber text-xl mb-2 font-semibold sm:text-2xl lg:text-3xl xl:text-4xl xl:mb-2 ">Or You Can Contact Us</h3>
                <p className="text-stone text-[10px] tracking-widest sm:text-[12px] xl:text-[14px] ">THERE ARE MULTIPLE WAYS TO CONTACT WITH US</p>
            </div>
<div className="relative justify-self-center mt-10 sm:mt-12">
                    <img src={booking} className="w-28 h-28 relative md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52 "></img>
                </div>
            <div className="text-stone mt-7 px-2 relative place-content-center text-center  flex-wrap gap-2 sm:justify-between md:flex md:mt-10 md:px-4 lg:px-6 xl:px-10">
                <div className="">
                    <p className="text-xs lg:text-base md:mb-1 xl:text-lg ">CALL US AND MAKE YOUR RESERVATION</p>
                    <span className="text-amber text-sm md:text-base lg:text-xl xl:text-2xl ">+9995574545</span>
                </div>
                
                <div className="">
                    <p className="text-xs lg:text-base md:mb-1 xl:text-lg ">OR SEND US AN EMAIL</p>
                    <span className="text-amber text-sm md:text-base lg:text-xl xl:text-2xl ">reserve@foodieland.com</span>
                </div>
            </div> 
</div> 
         </div>
    );
};

export default Reservation_Section;