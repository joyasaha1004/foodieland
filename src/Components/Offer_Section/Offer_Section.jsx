import React from 'react';
import "./Offer_Section.css"
import offer_logo from "../Assets/offer_logo.png";

import gallery1 from "../Assets/gallery1.png";
import gallery2 from "../Assets/gallery2.png";
import gallery3 from "../Assets/gallery3.png";
import gallery4 from "../Assets/gallery4.png";
import gallery5 from "../Assets/gallery5.png";
import gallery6 from "../Assets/gallery6.png";

const Offer_Section = () => {
    return (
        <div className="w-full overflow-x-hidden bg-black relative max-w-screen-2xl mx-auto">
            <div>
                <div className=" relative bg-offer-pic bg-cover bg-center w-full h-fit pb-6 xl:pb-10">
                    
         <div className="absolute inset-0 bg-black opacity-50 "></div>
                    <div className="md:flex relative lg:gap-10 md:pl-10 lg:pl-20 xl:pl-20 xl:pt-10 ">

                    <div className=" pt-20 flex justify-center">
               
                        <img src={offer_logo} className="w-60 h-48 -mt-5 -ml-2 sm:w-72 sm:h-52   sm:mb-7 md:-mt-5 md:w-96 md:h-72 lg:w-96 lg:h-80 xl:w-[370px] xl:h-[370px]"
                         data-aos="flip-left"
                         ></img>
                    </div>

                   
                       
                        <div className="relative  px-2 sm:px-5 sm:-mt-10 md:mt-24">
                      <p className="text-stone font-serif text-lg mb-1 md:mb-3 md:text-base lg:text-lg xl:text-2xl ">Special Offer</p>
                        <h3 className="text-amber text-2xl font-semibold sm:text-3xl md:text-4 lg:text-4xl lg:mb-3 xl:text-5xl ">FATHER'S DAY</h3>
                        <span className="text-xs text-stone lg:text-base xl:text-md ">Celebrate Father's Day with love! Enjoy 30% off on all items as a token of appreactation.</span><br></br>
                        <button className="bg-amber text-stone p-2 rounded text-xs mt-2  lg:mt-5 hover:bg-stone xl:text-base hover:border-orange hover:border-1 lg:text-sm hover:text-amber 
                       cursor-pointer">Contact Now</button>
                        </div>
                    </div>
                </div>
            </div>



            <div className="px-2 pt-20 md:px-6 lg:pt-40">
                <div className=" ">
                    <p className="font-serif text-lg text-amber mb-2 lg:text-lg xl:text-2xl ">Food Gallery </p>
                    <h3 className="text-stone text-xl font-semibold lg:text-3xl lg:mb-2 xl:text-4xl ">Our Food Gallery</h3>
                    <span className="text-xs text-stone lg:text-base xl:text-md ">Indelge your senses with a shurtning display of mouthwatering culinary creation in our Food Gallery.Feast your eyes and awaken your cravings!</span>
                </div>

                <div className="grid grid-cols-4 gap-4 mt-5 pb-10 bg-black lg:mt-9">
                    <div className="col-span-4 md:col-span-2 grid-col-2">
                        <img src={gallery1} className=""></img>
                    </div>
                    <div className="col-span-2 md:col-span-1 grid1">
                        <img src={gallery2} className=""></img>
                    </div>
                    <div className="col-span-2 md:col-span-1 grid1">
                        <img src={gallery3} className=""></img>
                    </div>
                    <div className="col-span-2 md:col-span-1 grid1">
                        <img src={gallery4} className=""></img>
                    </div>
                    <div className="col-span-2 md:col-span-1 grid1">
                        <img src={gallery5} className=""></img>
                    </div>
                    <div className="col-span-4 md:col-span-2 grid-col-2">
                        <img src={gallery6} className=""></img>
                    </div>
                    
                </div>
            </div> 
        </div>
    );
};

export default Offer_Section;