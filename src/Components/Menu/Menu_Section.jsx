import React from 'react';

import menu_logo from "../Assets/menu_logo.png";

const Menu_Section = () => {
    return (
        <div className="overflow-x-hidden bg-black w-full relative ">
            

            <div className="relative bg-menu bg-cover bg-center pt-80 w-full h-fit ">
             
                <div className="absolute inset-0 bg-black opacity-50 "></div>

                <div className=" relative pb-10 lg:flex flex-row-reverse md:pb-16 xl:pb-24 xl:pt-16">

                    <div className="-mt-60 relative mb-7 justify-self-center xl:">
                    <img src={menu_logo} className="sm:w-80 sm:w-[505px] md:h-[300px] lg:h-[250px] lg:w-[400px] xl:w-[500px] xl:h-[400px] xxl:h-[400px] relative"></img>
                       
                    </div>
                    <div className="mx-2 sm:px-3 lg:-mt-48 relative xl:-mt-40  xl:px-5 xxl:px-7">
                <p className="font-serif text-amber md:text-lg  lg:text-xl xl:text-2xl xxl:text-3xl">Menu Section</p>
                        <h3 className="text-2xl text-stone font-semibold mb-2 sm:text-2xl md:text-3xl lg:text-4xl lg:leading-snug 
                        xl:text-[55px] xl:leading-normal xxl:text-[65px] xxl:leading-relaxed">Enjoy Our Mouth Watering Menu</h3>
                        <span className="text-stone text-xs md:text-[12px] lg:text-[14px] xl:text-[16px] xxl:text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, rem asperiores eveniet nostrum pariatur dicta! </span>
                </div>
</div>
            </div>
        </div>
    );
};

export default Menu_Section;