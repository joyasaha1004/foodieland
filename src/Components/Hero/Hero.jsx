import React from 'react'; 
import bg1 from "../Assets/bg1.jpg";
import {useState} from "react"
import Slider from "react-slick";
import food10 from "../Assets/food10.png";
import food13 from "../Assets/food13.png";
import food12 from "../Assets/food12.png";
import plate1 from "../Assets/plate1.png";
import plate2 from "../Assets/plate2.png";
import plate3 from "../Assets/plate3.png";
import chef from "../Assets/chef.png";
import chilli from "../Assets/chilli.png";
import noodle from "../Assets/noodle.png";
import pot_food from "../Assets/pot_food.png";
import spon from "../Assets/spon.png";
import service from "../Assets/service.png";
import booking from "../Assets/booking.png";
import peacefull from "../Assets/peacefull.png";
import leaf from "../Assets/leaf.png";
import restaurant_bg from "../Assets/restaurant_bg.png";
import party from "../Assets/party.png";
import event from "../Assets/event.png";
import checkbox from "../Assets/check-box.svg"

// const PlateList = [
//     {
//         img:plate1
//     },
//     {
//         img:plate2
//     },
//     {
//         img:plate3
//     },
//     {
//         img:food10
//     }
// ]

const Hero = () => {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
  
    const mainSliderSettings = {
      asNavFor: nav2,
      ref: (slider) => setNav1(slider),
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
  
  
    const thumbSliderSettings = {
      asNavFor: nav1,
      ref: (slider) => setNav2(slider),
      slidesToShow: 4,
      slidesToScroll: 1,
      focusOnSelect: true,
      centerMode:false,
      centerPadding: "130px",
      initialSlide: 0,
      dots: false,
      infinite: false,
      arrows: false,
     }
    const images = [plate1, plate2, plate3,food10];
  

    var settings = {
        dots: false,
        arrows: false,
        infinite : true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
       
     } ;
    return (
        <div className="bg-black w-full overflow-x-hidden">
         <div className="">
        
             <div className="relative h-fit bg-hero-pattern bg-cover bg-center pb-7 xl:pb-12 xxl:pb-20
              ">
                  <div className="absolute inset-0 bg-black opacity-50 "></div>
                
           

            <div className="pt-20 sm:pb-8 lg:pb-16 lg:grid lg:grid-cols-3 lg:pt-40 lg:pl-10 lg:gap-7 xl:pt-52">
               
                <Slider {...mainSliderSettings} className="lg:pt-3 xl:-mt-7 xl:-mt-4">
                    {images.map((image,index) =>(
                         <div className="relative  mb-10 place-items-center "
                         data-aos="zoom-in" key={index} >
                         
                               <img src={image} alt={`Slide ${index + 1}`} style={{ width: "" }}  className="relative w-60 xl:w-72"></img>
                          
                         
                           <div className="w-10 h-10 bg-amber rounded-full border border-stone absolute top-2 left-[54%]">
                               <p className="text-xs text-orange text-center">20% Off</p>
                           </div>
                           </div> 

                    ))}

            
                </Slider>
   
                <div className="relative px-2 sm:px-4 lg:col-span-2">
                   <div className="text-stone ">
                       <h3 className="text-3xl font-bold md:text-3xl 
                       leading-snug lg:text-5xl lg:leading-snug xl:text-[50px] xxl:text-[67px]">Have A Delicious Food With Us</h3>
                       <p className="text-sm leading-normal mt-2 lg:text-sm xxl:text-base">A restaurant is a place where we eat food and create good memories with family, friend and other loving person</p>
                   </div>

                   <div className="mt-4 flex  gap-2 relative">
                       <button className="border-orange border-1 text-orange bg-amber text-xs p-2 rounded hover:bg-stone hover:border-orange hover:border-1 lg:text-sm 
                       cursor-pointer xl:text-base">View Our Menu</button>
                       
                       <button className="text-green border-green border p-2 text-xs rounded hover:bg-green hover:text-stone lg:text-sm cursor-pointer xxl:text-base">Reservation</button>
                     
                   </div>
                   </div> 
                     
                   <div className="flex absolute -ml-0  md:-ml-[390px]"> 
                     
                     <Slider {...thumbSliderSettings}>
                     {images.map((image,index)=>{

          <div key={index} className="">
             <img src={image} alt={`Thumbnail ${index + 1}`} className="" />
            </div>
                     })}

                     </Slider>
                   </div> 
                </div>
           

             </div>
             </div> 

             <div className="relative bg-restaurant-pic bg-cover h-fit w-full ">
                   
                    
                     <div className="absolute inset-0 backdrop-contrast-[0.25]"></div>
                
                 <div className="pb-8 pt-4 lg:-ml-5 xl:-top-[440px] xxl:-top-[460px]">
                     <div className="text-center pt-2 relative">
                         <p className="text-sm text-amber sm:text-base lg:text-lg font-serif tracking-widest xl:text-2xl xxl:text-3xl">Table Reservation</p>
                         <span className="text-xl font-semibold text-stone sm:text-2xl lg:text-3xl lg:font-semibold xl:text-4xl ">BOOK YOUR TABLE NOW</span>
                     </div>
                     <div className="justify-items-center w-full relative  text-sm pt-3 sm:pt-0 px-2  lg:text-base xl:text-lg">
                       <div className="md:flex flex-wrap sm:place-content-center sm:gap-2 lg:gap-4">
                    <div>
                        <input type="text" className="w-full h-7 rounded text-center sm:mt-5 mb-5 lg:h-8  xl:h-9 hover:border-2 hover:border-amber xxl:h-10" placeholder="Name"></input>
                    </div>
                     <div className=" flex flex-wrap gap-2 place-content-center relative">
                         <div>
                         <select className=" h-7  rounded lg:h-8 xl:w-24 hover:border-2  xl:h-9 xxl:h-10 hover:border-amber ">
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
                         <select className=" h-7  rounded md:w-20 lg:w-24 lg:h-8 xl:w-28 hover:border-2 hover:border-amber xl:h-9 xxl:h-10 xxl:w-40">
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
                        
                       <div className="w-full md:w-[80%] lg:w-[60%] xxl:w-[50%]">
                         <textarea className="mt-5 w-full rounded h-28 text-center  xl:h-36 hover:border-2  hover:border-amber " placeholder="Special Message"></textarea>
                        </div>
                         
                     <button className="bg-black text-stone rounded mt-2 p-2 text-sm hover:bg-amber sm:mt-4  xl:text-lg ">Conform</button>
                     </div>
                 </div>
             </div>

 

         
        </div>
    );
};

export default Hero;