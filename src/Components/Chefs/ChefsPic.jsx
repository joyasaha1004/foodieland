import React from 'react';
import {useRef} from "react";
import chef_bg from "../Assets/chefs_bg.png";
import Slider from "react-slick";
import chef1 from "../Assets/chef1.png";
import chef2 from "../Assets/chef2.png";
 import chef3 from "../Assets/chef3.png";
import chef4 from "../Assets/chef4.png";
import chef5 from "../Assets/chef5.png";
 import chef6 from "../Assets/chef6.png";
 import chef_icon from "../Assets/chef_icon.png";
 import facebook from "../Assets/facebook.png";
 import instragram from "../Assets/instragram.png";
 import telegram from "../Assets/telegram.png";
 import twitter from "../Assets/twitter.png";
 import ins from "../Assets/ins.png";
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const ChefList =[{
id:1,
img:chef1,
name:"Wlid Wareen",
para:"Main Chef",
img1:chef_icon,

},
{
    id:2,
    img:chef2,
name:"Jenny Wilson",
para:"Cook Chef",
img1:chef_icon,
},

{
    id:3,
    img:chef3,
name:"Esther Howar",
para:"Manager Chef",
img1:chef_icon,
},

{
    id:4,
    img:chef4,
name:"Wlid Wareen",
para:"Main Chef",
img1:chef_icon, 
},

{
    id:5,
    img:chef5,
name:"Wlid Wareen",
para:"Main Chef",
img1:chef_icon,
},
{
    id:6,
    img:chef6,
    name:"Wlid Wareen",
    para:"Main Chef",
    img1:chef_icon,
}

];

const ChefsPic = () => {

 
let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  }
  const previous = () => {
    sliderRef.slickPrev();
  };
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
     
        responsive: [

         
         
          {
            breakpoint: 1499,
            settings: {
              slidesToShow: 3,
           
            }
          },
         
          {
            breakpoint: 999,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
                centerPadding: "40px",
            }
          },
          {
            breakpoint: 499,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
                centerPadding: "40px",
            }
          },
          {
            breakpoint: 299,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };

    return (
        <div className="w-[300px] sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1500px] xxl:w-[1800px] pb-10 bg-black pt-10 -mt-5">


         <div className="relative">
             <div className="relative">
               <img src={chef_bg} className="h-[490px] w-[300px] sm:w-[500px] contrast-[0.25] md:w-[700px] lg:w-[1000px] lg:h-[630px] xl:w-[1500px] xxl:w-[1800px]"></img>
             </div>

             <div className="relative -mt-[470px] text-center text-stone leading-4 pt-2 md:w-[400px] md:ml-40 lg:w-[450px] lg:ml-[290px]
              lg:-mt-[610px] xl:ml-[280px]">
                 <p className="text-amber font-serif lg:text-xl">Our Chef</p>
                 <h3 className="text-xl font-semibold md:text-2xl lg:mb-1 lg:text-3xl">Meet Our Chefs</h3>
                 <span className="text-[10px] lg:text-[12px]">Get aquainted with our talented culinery Chefs in the Our Meet Chefs section.Learn about their experience,passion,creativity that elevate our culinary delight</span>
             </div>

             <div className="relative pt-12 sm:-pr-5 xl:w-[1000px] "  >
             <Slider ref={slider => {
          sliderRef = slider;
        }}
        {...settings}>

                {ChefList.map((item)=>(
                     <div className="px-20 -mt-10 relative sm:px-16 md:px-12 
                     lg:px-16 xl:mx-2 "
                     data-aos="zoom-in"
                     data-aos-duration="800"  data-aos-delay="700"
                     >
                        <div className=" pt-[47px]">
                            <div className="hover:border-e-2 hover:border-t-2 hover:border-amber -skew-x-[7deg] relative sm:w-[140px] lg:w-[200px] lg:h-[300px]">
                            <img src={item.img} className="w-40 h-[200px]   hover:brightness-50 sm:w-[350px] lg:h-[300px]"></img>

                            </div>

                     <div className="bg-amber absolute rounded flex p-1 -mt-24 ml-4 cursor-pointer lg:ml-9 lg:-mt-32 lg:p-1.5">
                       <img src={facebook} className="w-4 h-3 lg:w-5 lg:h-4"></img>
                       <img src={instragram} className="w-4 h-3 lg:w-5 lg:h-4"></img>
                       <img src={twitter} className="w-4 h-3 lg:w-5 lg:h-4"></img>
                       <img src={telegram} className="w-5 h-4 lg:w-7 lg:h-5" ></img>
                       <img src={ins} className="w-5 h-3 lg:w-7 lg:h-4"></img>
                       </div>       
                            <div className="bg-dark text-stone flex text-[10px] p-2.5 relative -ml-[15px] w-[140px] -skew-x-[7deg] lg:w-[200px] lg:-ml-[23px] lg:text-[11px] lg:p-4">
                                <div>
                                <p className="">{item.name}</p>
                                <span>{item.para}</span>
                                </div>
                                <div>
                                    <img src={chef_icon} className="w-8 h-8 ml-7 lg:w-12 lg:h-10 lg:ml-12"></img>
                                </div>
                            </div>

                        </div>
                     </div>

                ))}
                    
                
             </Slider>

             <div className="ml-32 mt-3 sm:ml-56 sm:mt-5 md:ml-[340px] lg:ml-[480px]">
        <button className="button rounded p-1 bg-black mr-1" onClick={previous}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-4 lg:w-5 lg:h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

        </button>
        <button className="button  rounded p-1 bg-black" onClick={next}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-4 lg:w-5 lg:h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

        </button>
      </div>
             </div>
             </div>
        </div>
    );
};

export default ChefsPic;