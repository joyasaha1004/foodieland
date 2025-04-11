import React from 'react';
import blog1 from "../Assets/blog1.png";
import blog2 from "../Assets/blog2.png";
import blog3 from "../Assets/blog3.png";
import blog4 from "../Assets/blog4.png";
import blog5 from "../Assets/blog5.png";
import blog6 from "../Assets/blog6.png";

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react';
const BlogList=[{

    img:blog1,
    tittle:"Restaurant",
    heading:"How to start Restaurant Business in 2023 ",
    para:"A great commerce experience cannot be distilled to a single number.It's not a Lighthouse score.",

},
   {
       img:blog2,
       tittle:"Restaurant",
       heading:"Enjoy an exceptional journey of taste of joy.",
       para:"A great commerce experience cannot be distilled to a single number.It's not a Lighthouse score.",

   },

   {
    img:blog3,
    tittle:"Restaurant",
    heading:"Explore Taste & That Best Quality Make .",
    para:"A great commerce experience cannot be distilled to a single number.It's not a Lighthouse score.",
   },
{
    img:blog4,
    tittle:"Restaurant",
    heading:"How to start Restaurant Business in 2023 ",
    para:"A great commerce experience cannot be distilled to a single number.It's not a Lighthouse score.",
},
{
    img:blog5,
    tittle:"Restaurant",
    heading:"Enjoy an exceptional journey of taste of joy.",
    para:"A great commerce experience cannot be distilled to a single number.It's not a Lighthouse score.",
},
{
    img:blog6,
    tittle:"Restaurant",
    heading:"Explore Taste & That Best Quality Make.",
    para:"A great commerce experience cannot be distilled to a single number.It's not a Lighthouse score.",
},

]

const Blog = () => {

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
              slidesToShow: 2,
              slidesToScroll: 1,
                centerPadding: "40px",
            }
          },
          {
            breakpoint: 699,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              
               
            }
          },
          {
            breakpoint: 499,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };

    return (
        <div className="overflow-x-hidden relative bg-black max-w-screen-2xl mx-auto pt-7 pb-12 lg:pt-12 xl:pb-24">
            <div>
                <div className="mb-10 px-2 text-center ">
            <p className="text-amber font-serif lg:text-lg xl:text-2xl ">Our Blog</p>
                 <h3 className="text-lg font-semibold text-stone sm:text-xl lg:text-3xl xl:text-4xl xl:mt-2 ">Know More About The Article</h3>
                </div>

                <div className="w-52 justify-self-center sm:w-60 md:w-[465px] lg:w-[600px] xl:mt-12 xl:w-[1000px] ">
                
                <Slider ref={slider => {
          sliderRef = slider;
        }}
        {...settings}>
            
            {BlogList.map((data)=>(

                <div className=" text-stone rounded h-[300px] sm:px-3 sm:h-[350px] lg:px-7 xl:px-8 ">
                    <div>
                        <img src={data.img} className="h-[100px] w-[250px]  lg:h-[120px] xl:w-[270px] xl:h-[150px] "></img>

                        <div className="w-10 bg-stone px-1 rounded -mt-[100px] sm:-mt-[100px] relative xl:w-16 xl:leading-5 lg:-mt-[120px] xl:text-center xl:py-2 xl:-mt-[150px]">
                            <p className="text-amber text-[10px] xl:text-[16px]">2023 Dec 12</p>
                        </div>
                    </div>

                    <div className="bg-gray pt-20 py-3 px-2 sm:leading-5 lg:pt-24 xl:pt-24">
                        <p className="text-sm font-serif text-amber lg:text-base xl:text-lg ">{data.tittle}</p>
                        <h3 className="text-sm font-semibold sm:mb-1 lg:text-lg xl:text-xl">{data.heading}</h3>
                         <span className="text-[10px] text-stone mb-2 sm:leading-3 xl:text-[12px] ">{data.para}</span>
                        
                          <div className="mt-2 ">
                  <hr classNamE=""></hr>
                  <div className="flex xxl:pt-2">
                   <p className="text-xs text-amber mt-1 underline underline-offset-3 cursor-pointer sm:text-[9px] xl:text-[12px]">Read More</p>
                   <div className="flex mt-2 ml-12 cursor-pointer sm:ml-20 md:ml-20 lg:ml-28 xl:ml-24 ">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 sm:size-3 xxl:size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
</svg>

<span className="text-[9px] sm:-mt-1 xl:text-[12px] ">10 Comments</span> 
                   </div></div>
                    </div>
                         
                    </div>


                </div>
            ))}



                </Slider>
                </div>
            </div>
        </div>
    );
};

export default Blog;