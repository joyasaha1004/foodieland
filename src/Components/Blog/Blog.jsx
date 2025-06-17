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
    heading:"How to start Restaurant Business",
    para:"A great commerce experience cannot be distilled to a single number.It's not a Lighthouse score.",

},
   {
       img:blog2,
       tittle:"Restaurant",
       heading:"How to start Restaurant Business",
       para:"A great commerce experience cannot be distilled to a single number.It's not a Lighthouse score.",

   },

   {
    img:blog3,
    tittle:"Restaurant",
    heading:"How to start Restaurant Business",
    para:"A great commerce experience cannot be distilled to a single number.It's not a Lighthouse score.",
   },
{
    img:blog4,
    tittle:"Restaurant",
    heading:"How to start Restaurant Business ",
    para:"A great commerce experience cannot be distilled to a single number.It's not a Lighthouse score.",
},
{
    img:blog5,
    tittle:"Restaurant",
    heading:"How to start Restaurant Business",
    para:"A great commerce experience cannot be distilled to a single number.It's not a Lighthouse score.",
},
{
    img:blog6,
    tittle:"Restaurant",
    heading:"How to start Restaurant Business",
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
        arrows:true,
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
            <p className="text-amber font-serif text-lg md:text-xl xl:text-3xl">Our Blog</p>
                 <h3 className="text-lg font-semibold text-stone sm:text-xl lg:text-3xl xl:text-4xl xl:mt-2 ">Know More About The Article</h3>
                </div>

                <div className="w-full flex justify-center xl:mt-12">
                
                <Slider ref={slider => {
          sliderRef = slider;
        }}
        {...settings}  className=' w-[80%] sm:w-[85%] xl:w-[90%] gap-10 sm:px-2'>
            
            {BlogList.map((data,i)=>(
                <div key={i} className='relative px-3 '>
                <div className="bg-gray h-fit pb-2 relative  text-stone rounded ">
                    <div className=''>
                        <img src={data.img} className="h-[100px] w-full lg:h-[120px]"></img>

                        <div className=" bg-stone px-1 rounded absolute top-0   xl:text-center xl:py-2 ">
                            <p className="text-amber text-[10px] xl:text-xs">2023<br></br> Dec 12</p>
                        </div>
                    </div>

                    <div className=" py-3 px-2 sm:leading-5 ">
                        <p className="text-base font-serif text-amber lg:text-base xl:text-lg ">{data.tittle}</p>
                        <h3 className="text-sm font-semibold sm:mb-1 sm:text-base lg:text-lg xl:text-xl">{data.heading}</h3>
                         <span className="text-xs text-stone mb-2 sm:leading-3 sm:mb-2 lg:text-xs ">{data.para}</span>
                        </div>
                        
                 
                  <div className="flex mx-2 border-t-2 border-state  justify-between">
                   <p className="text-xs text-amber mt-1 underline underline-offset-3 cursor-pointer ">Read More</p>
                   <div className="flex cursor-pointer mt-2">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 sm:size-3 xxl:size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
</svg>

<span className=" text-[11px] sm:-mt-1">10 Comments</span> 
                   </div></div>
                    
                         
                    {/* </div> */}

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