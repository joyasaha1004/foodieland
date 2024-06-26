import React from 'react';
import menu_bg from "../Assets/menu_bg.png";
import menu_logo from "../Assets/menu_logo.png";

const Menu_Section = () => {
    return (
        <div className="w-[300px] sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1500px] xxl:w-[1800px] mb-60">
            <div>
                <div className="relative">
                    <img src={menu_bg} className="brightness-[0.22] h-[510px] sm:w-[500px] md:w-[700px] lg:w-screen sm:h-[550px] md:h-[450px] lg:h-[500px]"></img>

                    <div className="relative -mt-[480px] md:flex sm:-mt-[470px]

                    md:-mt-[10px] lg:-mt-[60px]
                    ">

                   
                    <div className=" px-2  sm:px-5 mt-60 pt-5 sm:pt-10 md:-mt-[350px] md:w-[720px] lg:w-[800px] lg:px-7 lg:-mt-[350px] xl:w-[600px]">
                        <p className="font-serif text-amber md:text-lg md:mb-2 lg:text-xl">Menu Section</p>
                        <h3 className="text-2xl text-stone font-semibold mb-2 md:text-3xl lg:text-[40px] lg:leading-snug">Enjoy Our MouthWatering Menu</h3>
                        <span className="text-stone text-[12px] leading-5 xl:text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, rem asperiores eveniet nostrum pariatur dicta! </span>
                    </div> 
                    <div className="relative -mt-[380px] sm:pl-16 sm:-mt-[390px] lg:-mt-[370px] xl:-ml-28">
                        <img src={menu_logo} className="sm:w-96 sm:w-96 md:w-[550px] md:h-[300px] lg:h-[350px] xl:w-[500px]"></img>
                        <p className="font-serif relative text-xl -mt-[85px] ml-[120px] text-stone sm:text-2xl sm:ml-[155px] sm:-mt-[100px] md:ml-[95px] md:-mt-[120px] lg:ml-[143px] lg:text-3xl lg:-mt-[135px] xl:ml-[200px] xl:text-4xl">Welcome</p>
                    </div>
</div>
                </div>
            </div>
        </div>
    );
};

export default Menu_Section;