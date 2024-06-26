import React from 'react';
import offer_bg from "../Assets/offer_bg.png";
import offer_logo from "../Assets/offer_logo.png";
import offer_bg2 from "../Assets/offer_bg2.png";
import gallery1 from "../Assets/gallery1.png";
import gallery2 from "../Assets/gallery2.png";
import gallery3 from "../Assets/gallery3.png";
import gallery4 from "../Assets/gallery4.png";
import gallery5 from "../Assets/gallery5.png";
import gallery6 from "../Assets/gallery6.png";

const Offer_Section = () => {
    return (
        <div className="w-[300px] sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1500px] xxl:w-[1800px] ">
            <div>
                <div className="bg-black">
                    <img src={offer_bg} className="h-[370px] w-[300px] brightness-[0.5] sm:w-[500px] sm:h-[400px] md:w-[700px] lg:w-screen "></img>

                    <div className="md:flex md:-mt-32 relative">

                    <div className="absolute -mt-40 ml-10 sm:-mt-44 md:flex lg:ml-48 lg:-mt-52 xxl:ml-60">
               
                        <img src={offer_logo} className="w-60 h-48 -mt-5 -ml-2 sm:w-64 sm:h-52  sm:ml-24 sm:mb-7 md:ml-[350px] md:-mt-5 md:w-72 md:h-64 lg:w-80 lg:h-80 xl:w-[350px] xl:h-[350px] xxl:w-[380px]
                         xxl:h-[380px]"
                         data-aos="flip-left"
                         ></img>
                    </div>

                   
                       
                        <div className="relative -mt-40 px-2 sm:px-5 sm:-mt-40 md:w-[450px] lg:w-[500px] xxl:w-[600px] xl:px-7">
                      <p className="text-stone font-serif text-sm mb-1 md:mb-3 md:text-base lg:text-lg xxl:text-lg">Special Offer</p>
                        <h3 className="text-amber text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl lg:mb-3 xxl:text-[60px]">FATHER'S DAY</h3>
                        <span className="text-xs text-stone lg:text-base xxl:text-md">Celebrate Father's Day with love! Enjoy 30% off on all items as a token of appreactation.</span><br></br>
                        <button className="bg-amber text-stone p-2 rounded text-xs mt-2  lg:mt-5 hover:bg-stone hover:border-orange hover:border-1 lg:text-sm hover:text-amber 
                       cursor-pointer">Contact Now</button>
                        </div>
                    </div>
                </div>
            </div>



            <div className="bg-black pt-20 lg:pt-40">
                <div className="px-3 lg:w-[700px]">
                    <p className="font-serif text-amber mb-2 lg:text-lg">Food Gallery </p>
                    <h3 className="text-stone text-xl font-semibold lg:text-3xl lg:mb-2">Our Food Gallery</h3>
                    <span className="text-[10px] text-stone md:text-[12px] lg:text-[14px]">Indelge your senses with a shurtning display of mouthwatering culinary creation in our Food Gallery.Feast your eyes and awaken your cravings!</span>
                </div>

                <div className="grid grid-cols-4 gap-4 mt-5 pb-10 bg-black px-2 lg:w-screen">
                    <div className="col-span-4 md:col-span-2">
                        <img src={gallery1} className="sm:h-[250px] sm:w-screen"></img>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <img src={gallery2} className="md:h-[250px]"></img>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <img src={gallery3} className="h-[95px] sm:h-[163px]
                        md:h-[250px]"></img>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <img src={gallery4} className="h-[105px] sm:h-[179px]
                      md:h-[250px]   "></img>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <img src={gallery5} className="md:h-[250px]"></img>
                    </div>
                    <div className="col-span-4 md:col-span-2">
                        <img src={gallery6} className="sm:h-[250px] sm:w-screen md:h-[250px]"></img>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Offer_Section;