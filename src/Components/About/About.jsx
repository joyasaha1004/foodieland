import React from 'react';
import chef from "../Assets/chef.png";
import chilli from "../Assets/chilli.png";
import noodle from "../Assets/noodle.png";


const About = () => {
    return (
        <div className="bg-black pt-24 overflow-x-hidden ">
         <div className="  ">  

           

<div className="w-full md:grid grid-flow-col  h-fit relative">
   <div className="place-items-center ">
   <div className="border-b-4 border-s-4 -ml-32 rotate-90 rounded border-orange w-20 h-20 "></div>

   <div className="-mt-[76px]">    
       <img src={chef} className="w-48 h-56 "></img>

       </div>
       <div className="border-t-4 border-e-4 ml-28 -mt-20 rotate-90 rounded border-orange w-20 h-20 relative"></div>
   </div>

   <div className="px-3 pt-8 ">
       <span className="text-amber text-sm sm:text-base md:text-xl font-serif xl:text-3xl ">About Us</span>
       <h3 className="text-stone text-2xl font-semibold sm:text-3xl md:text-2xl lg:text-4xl md:leading-snug xl:text-5xl lg:leading-snug xl:leading-normal">Enjoy Your Favorite Food On Our Resturant</h3>
       <p className="text-stone text-sm mt-3 lg:text-sm leading-relaxed lg:mt-4 lg:leading-loose xl:text-base xl:leading-[35px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates fugiat, sit commodi repudiandae possimus vero voluptate officia alias atque ut fugit similique dolore aliquid ducimus deleniti enim saepe id! Voluptatum.</p>
       <button className="text-xs border-2 border-stone p-2 rounded text-stone mt-4 hover:bg-amber hover:text-stone cursor-pointer hover:border-amber xl:text-lg">Read More</button>
   </div>
   <div className=" relative">
        <img src={chilli} className="w-10 h-7 -mt-[55vh] ml-[96%] "></img>
       <img src={noodle} className="w-16 h-10 mt-60 ml-44 "></img>
   </div>
</div>
 </div>    
        </div>
    );
};

export default About;