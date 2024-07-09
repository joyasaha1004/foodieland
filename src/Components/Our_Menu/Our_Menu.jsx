import React from 'react';
import "./Our_Menu.css";
import Slider from "react-slick";
import {useRef,useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import breakfast1 from "../Assets/breakfast1.png";
import breakfast2 from "../Assets/breakfast2.png";
import breakfast3 from "../Assets/breakfast3.png";
import breakfast4 from "../Assets/breakfast4.png";
import breakfast5 from "../Assets/breakfast5.png";
import breakfast6 from "../Assets/breakfast6.png";
import breakfast7 from "../Assets/breakfast7.png";
import breakfast8 from "../Assets/breakfast8.png";
import lunch1 from "../Assets/lunch1.png";
import lunch2 from "../Assets/lunch2.png";
import lunch3 from "../Assets/lunch3.png";
import lunch4 from "../Assets/lunch4.png";
import lunch5 from "../Assets/lunch5.png";
import dinner1 from "../Assets/dinner1.png";
import dinner2 from "../Assets/dinner2.png";
import dinner3 from "../Assets/dinner3.png";
import dinner4 from "../Assets/dinner4.png";
import dinner5 from "../Assets/dinner5.png";
import party1 from "../Assets/party1.png";
import party2 from "../Assets/party2.png";
import party3 from "../Assets/party3.png";
import party4 from "../Assets/party4.png";
import party5 from "../Assets/party5.png";
import party6 from "../Assets/party6.png";
import gallery1 from "../Assets/gallery4.png";
import gallery2 from "../Assets/gallery3.png";


const Our_Menu = () => {
  const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: current => setActiveSlide(current),
    appendDots: dot => (
      <div
      
      >
        <ul >{dot} </ul>
      </div>
    ),
     customPaging: i => (
      
    <div style={{width:"30px",color:"orange",}}></div>
     
       ) 
  };

  const handleListItemClick = index => {
    setActiveSlide(index);
    sliderRef.current.slickGoTo(index);
} ;
 
    return (
        <div className="w-[300px] sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1280px] xxl:w-[1600px] bg-black pt-5 pb-20 sm:-mt-7 md:-mt-60 lg:-mt-48">
         
           
                 <div className="px-2 sm:p-4 lg:px-7 xl:w-[520px] xl:pt-16 xxl:w-[600px]">
                     <p className="font-serif text-lg text-amber lg:text-xl lg:mb-1 xl:text-2xl xxl:text-3xl xl:mb-2">Our Menu</p>
                     <h3 className="text-stone font-semibold text-xl md:text-2xl lg:text-3xl lg:mb-2 xl:text-4xl xxl:text-5xl xl:mb-4">Our Food Menu</h3>
                     <span  className="text-stone text-[11px] md:text-[12px] lg:text-[14px] xl:text-[16px] xxl:text-[18px]">Introducing our tantalizing food menu,filled with exquisite flavours and culinary delights to satisfy every palate</span>
                 </div>

 <div className="text-amber mt-4 px-2 mb-4 sm:px-4 lg:px-7 xl:ml-[460px] xxl:ml-[640px]">
       <ul className="flex text-xs gap-2 flex-wrap lg:text-base xxl:text-lg">
           <li onClick={() => handleListItemClick(0)} className="link">All Menu</li>
           <li onClick={() => handleListItemClick(1)}
           className="link">Breakfast</li>
           <li  onClick={() => handleListItemClick(2)} className="link" >Lunch</li>
           <li  onClick={() => handleListItemClick(3)} className="link">Dinner</li>
           <li  onClick={() => handleListItemClick(4)} className="link">Party</li>
          
       </ul>
      </div>
                 <div className="md:px-1 lg:mt-9  xl:w-[1279px] xxl:w-[1600px]">
                   <Slider {...settings} ref={sliderRef}>

                    <div >
                       <div className="grid grid-cols-2 gap-2 px-2 sm:grid-cols-3 xl:grid-cols-4 xxl:px-4">
                        
                         <img src={breakfast1} className="imglist"></img>
                         <img src={lunch5} className="imglist"></img>
                         <img src={dinner1} className="imglist"></img> 
                         <img src={breakfast4} className="imglist"></img>
                          <img src={dinner5} className=" imglist"></img>
                          <img src={lunch3} className="imglist"></img>
                             
                         <img src={breakfast3} className="imglist"></img>
                         <img src={dinner2} className="imglist"></img>
                       
                   
                     </div>
                     </div>
                   <div>
                       <div className="grid grid-cols-2 gap-2 px-2 sm:grid-cols-3 xl:grid-cols-4 xxl:px-4">
                         <img src={breakfast5} className="imglist"></img>
                         <img src={breakfast2} className="imglist"></img>
                         <img src={breakfast4} className="imglist"></img>
                         <img src={breakfast1} className="imglist"></img>
                         <img src={breakfast3} className="imglist"></img>
                        <img src={gallery1} className="imglist"></img>                        
                         <img src={gallery2} className="imglist"></img>
                         <img src={lunch4} className="imglist"></img>
                       
                    
                     </div> 
                       </div>
                   
                   <div>
                       <div className="grid grid-cols-2 gap-2 px-2 sm:grid-cols-3 xl:grid-cols-4 xxl:px-4">
                         <img src={lunch1} className="imglist"></img>
                         <img src={lunch2} className="imglist"></img>
                         <img src={lunch3} className="imglist"></img>
                         <img src={lunch4} className="imglist"></img>
                         <img src={lunch5} className="imglist"></img>
                        <img src={gallery2} className="imglist"></img>                        
                         <img src={gallery1} className="imglist"></img>
                         <img src={lunch4} className="imglist"></img>
                       
                   </div>
                     </div>

                       <div>
                       <div className="grid grid-cols-2 gap-2 px-2 sm:grid-cols-3 xl:grid-cols-4 xxl:px-4">
                         <img src={dinner1} className="imglist"></img>
                         <img src={dinner2} className="imglist"></img>
                         <img src={dinner3} className="imglist"></img>
                         <img src={dinner4} className="imglist"></img>
                         <img src={dinner5} className="imglist"></img>
                        <img src={lunch2} className="imglist"></img>                        
                         <img src={breakfast3} className="imglist"></img>
                         <img src={gallery1} className="imglist"></img>
                       
                   </div>
                     </div> 

                     <div>
                       <div className="grid grid-cols-2 gap-2 px-2 sm:grid-cols-3 xl:grid-cols-4 xxl:px-4">
                         <img src={party1} className="imglist "></img>
                         <img src={party2} className="imglist"></img>
                         <img src={party3} className="imglist"></img>
                         <img src={party4} className="imglist"></img>
                         <img src={party5} className="imglist"></img>
                        <img src={party6} className="imglist"></img>                        
                         <img src={gallery1} className="imglist"></img>
                         <img src={lunch4} className="imglist"></img>
                       
                   </div>
                     </div> 
                   </Slider>
                 </div>
           
        </div>
    );
};

export default Our_Menu;