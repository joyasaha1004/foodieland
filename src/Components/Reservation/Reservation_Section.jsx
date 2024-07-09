import React from 'react';
import reservation_bg from "../Assets/reservation_bg.png";
import reservation1 from "../Assets/reservation1.png";
import booking from "../Assets/booking.png";
import wood_bg from "../Assets/wood_bg.png";
const Reservation_Section = () => {
    return (
        <div className="w-[300px] sm:w-[500px] md:w-[700px] lg:w-[1000px]
        xl:w-[1280px] xxl:w-[1600px] pb-48 bg-black">
            <div>
                <div>
                    <img src={reservation_bg} className="brightness-[0.22] h-[300px] sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1280px] xxl:w-[1600px] md:h-[300px] lg:h-[400px] xl:h-[500px] xxl:h-[520px]"></img>
                    <div className="text-center text-stone relative -mt-52 px-2 sm:px-4 sm:-mt-48 lg:-mt-60 xl:-mt-72 xxl:-mt-[320px]">
                        <h3 className="text-3xl font-serif text-amber md:mb-2 lg:text-4xl xl:text-5xl xxl:text-7xl">Visit Us,Make Your Reservation</h3>
                        <p className="text-xs lg:text-base xl:text-lg xxl:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi ratione expedita, maxime dolores impedit?</p>
                    </div>

                </div>

                <div className="mt-32 relative sm:mt-44 md:mt-48 md:ml-2 lg:flex lg:-ml-44 lg:mt-56 xl:mt-60 xxl:mt-64">
                    <img src={reservation1} className="w-40 h-56 sm:ml-44  relative md:w-52 md:h-64 lg:w-60 lg:h-72 xl:w-72 xl:h-[350px] ml-16 md:ml-60 lg:mt-4 xxl:w-80 xxl:h-[450px]"></img>
                    <div>
                    <div className="text-center px-2 pt-5 lg:ml-16 xl:ml-32">
                        <h3 className="text-amber text-xl mb-2 font-semibold sm:text-2xl lg:text-3xl xl:text-4xl xl:mb-2 xxl:text-5xl xxl:mb-4">Book Your Table Today</h3>
                        <p className="text-stone text-[10px] tracking-widest sm:text-[12px] lg:text-[14px] xxl:text-[16px]">WE ARE HERE TO MAKE YOUR MOOD TASTY AND PEACFULL</p>
                    </div>

                    <div className="pl-5 pt-5 sm:pt-5 md:pl-16 lg:pl-10 xl:pl-32 xxl:pl-44 ">
                       <div className="sm:flex md:gap-3">
                    <div>
                        <input type="text" className="w-60 h-7 rounded text-center text-sm mb-5 ml-2 sm:w-40 md:w-44 lg:w-52 lg:h-8 lg:text-base xl:w-72 xl:h-9 hover:border-2 hover:border-amber xl:text-lg xxl:w-[360px] xxl:h-10" placeholder="Name"></input>
                    </div>
                     <div className="text-sm sm:ml-2 flex md:gap-3 lg:text-base xl:text-lg -ml-2">
                         <div>
                         <select className="w-16 h-7 mr-3 rounded md:w-20 lg:w-20 lg:h-8 xl:w-24 hover:border-2 xxl:w-36 xl:h-9 xxl:h-10 hover:border-amber ">
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
                         <select className="w-16 h-7 mr-3 rounded md:w-20 lg:w-24 lg:h-8 xl:w-28 xl:text-lg hover:border-2 hover:border-amber xl:h-9 xxl:h-10 xxl:w-40">
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
                         <input type="date" placeholder="Time" className="h-7 lg:h-8 rounded hover:border-2 hover:border-amber xl:text-lg xl:h-9 xxl:h-10 "></input>
                         
                         </div>
                         </div>
 </div>
                         <div className="">
                       
                         <textarea className="mt-5  w-64 rounded h-28 text-sm pl-2 sm:w-[440px] sm:ml-2 md:w-[525px] pt-1 lg:text-base lg:w-[590px] xl:w-[715px] xl:h-36 xl:text-lg hover:border-2 hover:border-amber xxl:w-[890px]" placeholder="Special Message"></textarea>
                        
                         </div>
                     <button className="bg-amber  text-stone rounded ml-12 mt-4 p-2 sm:px-10 text-xs hover:bg-stone sm:mt-4 sm:ml-32 md:ml-44 lg:ml-[210px] xl:text-lg xl:ml-[220px] xxl:ml-[290px] hover:text-amber">MAKE YOUR RESERVATION</button>
                     </div>
                 </div> 
               </div>

            </div>
                  <div className="mt-9 lg:mt-12 xl:mt-16">
                      <img src={wood_bg} className="w-[300px] brightness-[0.5] h-[370px] sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1280px] xl:h-[450px] xxl:h-[500px] xxl:w-[1600px]"></img>
            <div className="text-center -mt-[350px] md:-mt-[340px] relative xl:-mt-[390px] xxl:-mt-[430px]">
                <h3 className="text-amber text-xl mb-2 font-semibold sm:text-2xl lg:text-3xl xl:text-4xl xl:mb-2 xxl:text-5xl xxl:mb-4">Or You Can Contact Us</h3>
                <p className="text-stone text-[10px] tracking-widest sm:text-[12px] xl:text-[14px] xxl:text-[16px]">THERE ARE MULTIPLE WAYS TO CONTACT WITH US</p>
            </div>

            <div className="text-stone mt-7 text-center flex px-2 sm:ml-28 md:mt-12 lg:ml-60 xl:ml-[370px] xxl:ml-[500px]">
                <div className="pt-32 pl-8 absolute md:-ml-20 md:pt-12 lg:-ml-36 xl:-ml-44 xxl:pt-24 xxl:-ml-52">
                    <p className="text-xs lg:text-base lg:mb-1 xl:text-lg xxl:text-xl">CALL US AND MAKE YOUR RESERVATION</p>
                    <span className="text-amber text-sm md:text-base lg:text-xl xl:text-2xl xxl:text-3xl">+9995574545</span>
                </div>
                <div className="pl-[90px] md:pl-40">
                    <img src={booking} className="w-28 h-28 relative md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52 xxl:w-64 xxl:h-64"></img>
                </div>
                <div className="pt-44 pl-16 absolute md:pl-72 md:pt-12 lg:pl-80 xl:pl-[340px] xxl:pt-24 xxl:pl-[370px]">
                    <p className="text-xs lg:text-base lg:mb-1 xl:text-lg xxl:text-xl ">OR SEND US AN EMAIL</p>
                    <span className="text-amber text-sm md:text-base lg:text-xl xl:text-2xl xxl:text-3xl">reserve@foodieland.com</span>
                </div>
            </div>
</div>
        </div>
    );
};

export default Reservation_Section;