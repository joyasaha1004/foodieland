import React from 'react'; 
import bg1 from "../Assets/bg1.jpg";
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


const Hero = () => {

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
        <div className="w-[300px] relative sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1280px] xxl:w-[1600px]">
         <div className="">
             <div>
                 <img src={bg1} className="w-[300px] h-[470px] 
                 brightness-[0.2] sm:w-[500px] md:w-[700px] md:h-[430px] lg:w-[1000px] lg:h-[450px] xl:w-[1280px] xl:h-[480px] xxl:w-[1600px] xxl:h-[540px]"></img>
             </div>

            <div className=" -mt-[420px] ml-16 md:-mt-[370px] md:ml-[360px] lg:ml-[530px] xl:-mt-[390px] xl:ml-[540px] xxl:-mt-[420px] xxl:ml-[550px]"
           
            >
                <Slider {...settings} className="xxl:ml-52">

                
                       <div className="relative sm:ml-24  md:mt-7 lg:ml-40 xl:ml-64 lg:mt-9 xxl:"
                         data-aos="zoom-in"
                       >
                           <div>
                               <img src={food10} className="w-[200px] sm:w-[215px] lg:w-[250px] xl:w-[310px] xxl:w-[340px]"></img>
                           </div>
                           <div className="border border-stone bg-amber w-10 h-10 rounded-full ml-28 -mt-32 relative sm:-mt-[130px] sm:ml-32  lg:w-12 lg:h-12 lg:ml-36 lg:-mt-[150px] xl:ml-48 xl:-mt-[180px] xxl:ml-52 xxl:-mt-[205px]">
                               <p className="text-orange text-xs ml-2 mt-0.5 lg:ml-2.5 lg:text-sm">20% Off</p>
                           </div>
                           </div> 

                           <div className="ml-3 mt-2 sm:ml-24 md:mt-9 lg:ml-40 xl:ml-64 lg:mt-10">
                           <div className="">
                               <img src={food13} className="w-[160px] sm:w-[190px] lg:w-[220px] xl:w-[267px] xxl:w-[287px]"></img>
                           </div>
                           <div className="border border-stone bg-amber w-10 h-10 rounded-full ml-[95px] -mt-[110px] absolute sm:-mt-[120px] sm:ml-28 lg:ml-32 lg:-mt-[142px] lg:w-12 lg:h-12 xl:ml-44 xl:-mt-[165px] xxl:-mt-[180px]">
                               <p className="text-orange text-xs ml-2 lg:text-sm lg:ml-2.5">20% Off</p>
                           </div>
                           </div> 

                         <div className="lg:ml-16 xl:ml-40">
                           <div className="sm:ml-24 md:mt-7">
                               <img src={food12} className="w-[200px] sm:w-[225px] lg:w-[250px] lg:w-[260px] xl:w-[310px]

                               xxl:w-[350px]"></img>
                           </div>
                           <div className="border border-stone bg-amber  w-10 h-10 rounded-full ml-28 -mt-32 relative sm:-mt-[130px] sm:ml-56 lg:w-12 lg:h-12 lg:-mt-[150px] lg:ml-60 xl:ml-72 xl:-mt-[174px] xxl:-mt-[195px] xxl:ml-80">
                               <p className="text-orange text-xs ml-2 lg:text-sm lg:ml-2.5">20% Off</p>
                           </div>
                           </div> 

                 

                </Slider>

                <div className="relative mt-5 mx-1 md:-mt-44 md:w-[350px] md:-ml-72 lg:w-[450px] lg:-ml-[450px] lg:-mt-52 xl:-mt-60 xxl:-mt-72">
                   <div className="text-stone -ml-12 mt-5 xl:w-[600px] xxl:w-[720px]">
                       <h3 className="text-2xl font-semibold md:text-4xl 
                       md:leading-snug lg:text-5xl lg:leading-snug xl:text-[55px] xxl:text-[67px]">Have A Delicious Food With Us</h3>
                       <p className="text-xs mt-2 lg:text-sm xxl:text-base">A restaurant is a place where we eat food and create good memories with family, friend and other loving person</p>
                   </div>

                   <div className="mt-4 flex -ml-10 gap-2 relative">
                       <button className="border-orange border-1 text-orange bg-amber text-xs p-2 rounded hover:bg-stone hover:border-orange hover:border-1 lg:text-sm 
                       cursor-pointer xl:text-base">View Our Menu</button>
                       
                       <button className="text-green border-green border p-2 text-xs rounded hover:bg-green hover:text-stone lg:text-sm cursor-pointer xxl:text-base">Reservation</button>
                     
                   </div>
                     
                   <div className="flex -ml-60 -mt-44 sm:-mt-[340px] sm:-ml-[400px] md:-mt-[320px] lg:-mt-[340px] md:-ml-[390px]">
                       <img src={plate1} className="p-[195px] sm:p-[370px] md:p-[335px] lg:p-[365px] "></img>
                       <img src={plate2} className="p-[197px] -ml-[410px] sm:p-[372px] sm:-ml-[757px] md:p-[337px] md:-ml-[690px] lg:p-[368px] lg:-ml-[750px]"></img>
                       <img src={plate3} className="p-[193px] -ml-[410px] sm:p-[367px] sm:-ml-[757px] md:p-[333px] md:-ml-[690px] lg:p-[361px] lg:-ml-[750px]"></img>
                       <img src={food10} className="p-[188px] -ml-[410px] sm:p-[363px] sm:-ml-[757px] md:p-[330px] md:-ml-[690px] lg:p-[355px] lg:-ml-[750px]"></img>
                   </div> 
                </div>
           

             </div>
             </div> 

             <div className="relative lg:-mt-10">
                 <div className="-mt-44 sm:-mt-[342px] md:-mt-[300px] lg:-mt-[355px] xl:-mt-[355px]">
                     <img src={restaurant_bg} className="contrast-[0.25] sm:w-[500px] h-[360px] md:w-[700px] lg:w-[1000px] xl:w-[1280px] xxl:w-[1600px] xl:h-[420px] xxl:h-[430px]"></img>
                 </div>
                 <div className="relative -mt-[350px] lg:-ml-5 xl:ml-32 xl:-mt-[395px] xxl:-mt-[410px]">
                     <div className="text-center pt-2 xl:-ml-[170px] ">
                         <p className="text-sm text-amber sm:text-base lg:text-lg font-serif tracking-widest xl:text-2xl xxl:text-3xl">Table Reservation</p>
                         <span className="text-xl font-semibold text-stone md:text-2xl lg:text-3xl lg:font-semibold xl:text-4xl ">BOOK YOUR TABLE NOW</span>
                     </div>
                     <div className="pl-5 pt-3 sm:pt-5 md:pl-16 lg:pl-48 xl:pl-32 xxl:pl-44">
                       <div className="sm:flex md:gap-3">
                    <div>
                        <input type="text" className="w-60 h-7 rounded text-center text-sm mb-5 ml-2 sm:w-40 md:w-44 lg:w-52 lg:h-8 lg:text-base xl:w-72 xl:h-9 hover:border-2 hover:border-amber xl:text-lg xxl:w-[360px] xxl:h-10" placeholder="Name"></input>
                    </div>
                     <div className="text-sm sm:ml-2 flex md:gap-3 lg:text-base xl:text-lg -ml-2">
                         <div>
                         <select className="w-16 h-7 mr-3 rounded md:w-20 lg:w-20 lg:h-8 xl:w-24 hover:border-2 xxl:w-36 xl:h-9 xxl:h-10 hover:border-amber ">
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
                         <select className="w-16 h-7 mr-3 rounded md:w-20 lg:w-24 lg:h-8 xl:w-28 xl:text-lg hover:border-2 hover:border-amber xl:h-9 xxl:h-10 xxl:w-40">
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
                         <div className="">
                       
                         <textarea className="mt-5  w-64 rounded h-28 text-sm pl-2 sm:w-[440px] sm:ml-2 md:w-[525px] pt-1 lg:text-base lg:w-[590px] xl:w-[715px] xl:h-36 xl:text-lg hover:border-2 hover:border-amber xxl:w-[890px]" placeholder="Special Message"></textarea>
                        
                         </div>
                     <button className="bg-black text-stone rounded ml-24 mt-2 p-2 text-sm hover:bg-amber sm:mt-4 sm:ml-52 md:ml-60 lg:ml-72 xl:text-lg xl:ml-80 xxl:ml-[420px]">Conform</button>
                     </div>
                 </div>
             </div>



         <div className="bg-black relative mt-2 md:flex md:pt-10 md:gap-7

              md:-ml-20 lg:-ml-5 pb-7 xxl:pl-32">
                 <div className=" pt-10 pl-12 pb-5 sm:pl-40">
                 <div className="border-b-4 border-s-4 -ml-1 -mt-1  rotate-90 rounded border-orange w-20 h-20 absolute "></div>    
                     <img src={chef} className="w-48 h-56 relative md:w-52 md:h-64 lg:w-60 lg:h-72 xl:w-72 xl:h-[350px]"></img>
                     <div className="border-t-4 border-e-4 ml-28 -mt-20 rotate-90 rounded border-orange w-20 h-20 relative lg:ml-40 lg:-mt-20 xl:ml-52"></div>
                 </div>

                 <div className="px-2 sm:px-4 md:pt-16 sm:w-[450px] lg:w-[450px] lg:pt-12 xl:ml-20 xl:w-[650px]">
                     <span className="text-amber text-sm sm:text-base lg:text-xl font-serif xl:text-3xl xl:mb-2">About Us</span>
                     <h3 className="text-stone text-xl font-semibold sm:text-2xl md:text-2xl lg:text-3xl lg:leading-snug xl:text-4xl xl:leading-relaxed xxl:text-5xl xxl:leading-[57px] ">Enjoy Your Favorite Food On Our Resturant</h3>
                     <p className="text-stone text-xs mt-1 lg:text-sm leading-relaxed lg:mt-4 lg:leading-loose xl:text-base xl:leading-[35px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates fugiat, sit commodi repudiandae possimus vero voluptate officia alias atque ut fugit similique dolore aliquid ducimus deleniti enim saepe id! Voluptatum.</p>
                     <button className="text-xs border-2 border-stone p-2 rounded text-stone mt-4 hover:bg-amber hover:text-stone cursor-pointer hover:border-amber xl:text-lg">Read More</button>
                 </div>
                 <div className="absolute">
                     <img src={chilli} className="w-10 h-7 -mt-[240px] ml-60 sm:w-20 sm:h-12 sm:-mt-[420px] sm:ml-10 md:-mt-[20px] md:ml-16"></img>
                     <img src={noodle} className="w-16 h-10 mt-40 ml-44 sm:ml-[410px] sm:mt-52 md:ml-[620px] md:mt-60 lg:ml-[750px] lg:mt-64 lg:w-24 lg:h-12 xl:ml-[950px] xl:mt-72"></img>
                 </div>
             </div>

             <div className="bg-black   pt-5 absolute pb-2 lg:-mt-2">
                 <div className="bg-amber mx-2 px-2 lg:mx-5 sm:w-[480px] md:w-[680px] lg:w-[960px] relative overflow-hidden rounded md:flex xl:mx-7 xl:w-[1225px] xxl:w-[1540px]">
                     <div className="-ml-7 -mt-[13px] sm:-mt-[16px] sm:-ml-8 lg:-mt-[21px] lg:-ml-10 ">
                         <img src={leaf} className="w-44 h-40 sm:w-52 sm:h-48 lg:w-60 lg:h-60 xl:w-68 xl:h-68 xxl:w-72 xxl:h-72 xxl:-ml-0.5 xxl:-mt-1"></img>
                     </div>
                 <div className=" mt-1  relative sm:ml-20 md:mt-40 md:-ml-40 lg:-ml-28 xxl:-ml-10">
                <img src={pot_food} className="w-44 h-40 ml-16 -mt-24 sm:-mt-32 sm:w-52 sm:h-48 relative xl:w-80   md:w-44 md:h-44 lg:w-64 lg:h-72 lg:-ml-2 xxl:w-[380px] xxl:h-80"></img>
                 </div>
                 <div className="-pt-1 pl-5  sm:-pt-4 pb-5 md:pt-4 xl:pl-16">
                     <span className="-ml-2 text-orange lg:font-extrabold text-sm sm:text-base lg:text-xl font-serif xl:text-2xl xxl:text-3xl">Why Us</span>

                     <div className="-ml-10 mt-2 grid grid-cols-2 text-stone sm:mt-1 lg:mt-3  
                     ">
                         <div className="flex w-40 sm:w-52 sm:ml-4 sm:mb-7 lg:w-60 xl:w-72 xxl:w-80"> 
                             
                             <img src={spon} className="w-7 h-6 ml-4 lg:w-10 lg:h-8 xl:w-12 xl:h-10"></img>
                             <div className="leading-4 ">
                                   <p className="font-semibold text-sm sm:mb-0.5 lg:text-xl xl:text-2xl xxl:text-3xl">Good Chefs</p>
                                   <span className="text-[11px] lg:text-sm xl:text-base xxl:text-lg">We have expert chefs.He has knowledge about different kinds of tast and healty food.
                                   </span>
                             </div>
                           
                            
                         </div>
                         <div className=" lg:-mt-1 flex leading-4 sm:w-52 lg:w-72 xl:w-80 xxl:w-[350px]">
                              <img src={service} className="w-7 h-7  ml-4 lg:w-16 lg:h-[50px]"></img>
                              <div>
                                   <p className="font-semibold text-sm sm:mb-0.5 lg:text-xl xl:text-2xl xxl:text-3xl">Good Service</p>
                                   <span className="text-[11px] lg:text-sm xl:text-base xxl:text-lg
                                  ">Customer choice is our first priority.Our all servents are ready to give a good hospitality. </span>
                              </div>
                            
                            
                         </div>
                         <div className=" sm:-mt-4 sm:ml-1 leading-4 flex mt-5 sm:w-52 sm:ml-2 lg:w-60 lg:mt-1 xl:w-72 xxl:w-[350px]" >
                             <img src={booking} className="w-8 h-9 mt-3 ml-4  lg:w-12 lg:h-12 sm:-mt-1 lg:ml-5"></img>
                             <div className="ml-0.5">
                                  <p className="text-sm font-semibold sm:mb-0.5 lg:text-xl xl:text-2xl xxl:text-3xl">Online Booking</p>
                                  <span className="text-[11px] lg:text-sm xl:text-base xxl:text-lg
                                  ">Any time you can reserve our table and enjoy your day</span>
                             </div>
                            
                             

                         </div>
                         <div className="sm:-mt-4 md:-mt-2 leading-4 flex mt-5 sm:w-52 lg:w-72 lg:ml-2 lg:mt-1 xl:w-80 xxl:w-[380px]">
                              <img src={peacefull} className="w-7 h-6 mt-2 ml-5 lg:w-12 lg:h-10 lg:-mt-0.5 sm:-mt-1"></img>
                              <div>
                                   <p className="font-semibold text-sm sm:mb-0.5 lg:text-xl xl:text-2xl xxl:text-3xl">Peaceful Environment</p>
                                   <span className="text-[11px] lg:text-sm xl:text-base xxl:text-lg
                                  ">Our restaurant environment give you a mental peace in urban life.</span>
                              </div>
                            
                            
                         </div>
                     </div>
                 </div>

             </div></div> 


{/* party or event */}

         <div className="bg-black pt-[620px] pb-5 md:pt-[350px] lg:pl-20 lg:pt-[400px] xl:pl-40 xxl:pt-[450px] xxl:pl-52">
                   <div className="md:flex md:-ml-28 md:gap-7 xl:gap-9">
                       <div className="relative pl-9 gap-4 sm:pl-40">
                           <div>
                           <img src={party} className="w-44 h-60 lg:w-52 lg:h-72 xl:w-60 xl:h-80 xxl:w-72 xxl:h-96"></img>
                           </div>
                           <div className="relative -mt-32 ml-20  ">
                              <div className="relative border-s-4 border-t-4 w-32 -ml-1 h-[130px] border-black rounded xl:w-44 xl:h-[150px] xl:border-s-5 xl:border-t-5 xxl:w-72 xxl:h-[180px] xxl:border-s-7 xxl:border-t-7"></div>
                               <img src={event} className="w-40 h-40 -mt-[126px] xl:w-48 xl:h-48 xl:-mt-[147px] xxl:w-60 xxl:h-60 xxl:-mt-[175px]"></img>
                           </div>
                           </div>

                           <div className="xxl:mt-5">
                               <div className="text-stone pt-7 px-4 xxl:w-[700px] ">
                               <p className="font-serif text-amber lg:text-xl xl:text-2xl xxl:text-3xl"
                                data-aos="fade-up"
                                  data-aos-duration="800" 
                                   data-aos-delay="400"
                               >Party & Events</p>
                               <h3 className="text-xl sm:text-2xl lg:text-3xl lg:mb-2 xl:text-4xl xl:mb-4 xxl:text-5xl xxl:leading-[65px]"
                                data-aos="fade-up"
                                data-aos-duration="700"  data-aos-delay="500"
                               >Are you planning for a Party or Events?</h3>
                               <span className="font-serif text-sm lg:text-xl xl:text-2xl xxl:text-3xl"
                                data-aos="fade-up"
                                data-aos-duration="600"  data-aos-delay="600"
                               >We Have Special Dish For Party or Events</span>
                         </div> 
                         
                         <div className="pl-3 pt-7 text-xs text-stone px-4 lg:text-sm xl:text-base xxl:text-lg">
                             <div className="flex mb-3"
                              data-aos="fade-up"
                              data-aos-duration="800"  data-aos-delay="700"
                             >
                               <img src={checkbox} className="w-4 h-4 lg:w-5 lg:h-5 xl:mt-1"></img>
                               <p className="ml-1">Turmeric cuconut rice,chicken steack with peanut sauce</p>
                             </div>

                          <div className="flex mb-3"
                           data-aos="fade-up"
                          data-aos-duration="800"  data-aos-delay="800"
                          >
                               <img src={checkbox} className="w-4 h-4 lg:w-5 lg:h-5 xl:mt-1"></img>
                               <p className="ml-1">Indonesian fried Rice, Choice of Chicken, Beaf Steak </p>
                             </div> 

                           <div  className="flex mb-3"
                           data-aos="fade-up"
                           data-aos-duration="800"  data-aos-delay="900"
                           >
                               <img src={checkbox} className="w-4 h-4 lg:w-5 lg:h-5 xl:mt-1 "></img>
                               <p className="ml-1">Wok.fry thin rice noodles, rice noodles, chickenn </p>
                             </div> 
                             <button className="p-2 border-2 border-stone text-stone rounded text-xs ml-2 mt-2 hover:bg-amber hover:border-amber lg:text-sm xl:text-base xxl:text-lg">Booking Now</button>   
                         </div>
                          
                       </div>
                   </div>
               </div>
        </div>
    );
};

export default Hero;