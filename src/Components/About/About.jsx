import React from 'react';
import chef from "../Assets/chef.png";
import chilli from "../Assets/chilli.png";
import noodle from "../Assets/noodle.png";


const About = () => {
    return (
        <div className="bg-black pt-24 overflow-x-hidden max-w-screen-2xl mx-auto lg:pb-7">
         <div className="  ">  

           

            <div className="w-full md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  h-fit relative md:-ml-5 lg:ml-4">
        <div className="mt-4  flex flex-col items-center justify-center">
        <div className="border-b-4 border-s-4 -ml-28 rotate-90 rounded border-orange w-20 h-20 lg:-ml-32 xl:-ml-44"></div>

       <div className="-mt-[76px] md:-ml-4">    
       <img src={chef} className="w-48 h-56 md:h-60 md:w-44 lg:h-72 lg:w-48  xl:w-60 xl:h-80"></img>

       </div>
       <div className="border-t-4 border-e-4 ml-28 -mt-20 rotate-90 rounded border-orange w-20 h-20 relative md:ml-20 lg:ml-24 xl:ml-36"></div>
   </div>

   <div className="px-3 pt-8 sm:px-6 sm:pt-10 md:-mt-10 lg:-mt-4 xl:-pl-10 lg:col-span-2 lg:px-20 ">
       <span className="text-amber text-lg sm:text-base md:text-xl font-serif xl:text-3xl ">About Us</span>
       <h3 className="text-stone text-2xl font-semibold mt-1 sm:text-3xl md:text-2xl lg:text-3xl md:leading-snug xl:text-4xl lg:leading-snug xl:leading-normal">Enjoy Your Favorite Food On Our Resturant</h3>
       <p className="text-stone text-sm mt-3 lg:text-sm leading-relaxed lg:mt-4 lg:leading-loose xl:text-base xl:leading-[35px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates fugiat, sit commodi repudiandae possimus vero voluptate officia alias atque ut fugit similique dolore aliquid ducimus deleniti enim saepe id! Voluptatum.</p>
       <button className="text-xs border-2 border-stone p-2 rounded text-stone mt-4 hover:bg-amber hover:text-stone cursor-pointer hover:border-amber xl:text-lg">Read More</button>
   </div>
  
</div>
 </div>    
        </div>
    );
};

export default About;