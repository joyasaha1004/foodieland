import React from 'react'; 
import "./Contact_Section.css"


const Contact_Section = () => {
    return (
        <div className="overflow-x-hidden w-full relative bg-black pb-20">

            <div className="bg-contact-bg relative w-full h-fit bg-cover bg-center pt-36 pb-40 lg:pt-48 lg:pb-52 xl:pt-64 xl:pb-64 xxl:pb-72">
                
                 <div className="relative text-stone text-center ">
 
                     <h3 className=" text-2xl font-semibold font-serif text-amber md:text-3xl lg:text-4xl xl:text-5xl xxl:text-7xl">CONTACT</h3>
                     <p className="text-xs mt-2 tracking-[0.2em] md:text-sm lg:text-base xl:text-xl xxl:text-2xl">Contact Us To Enjoy Our Service</p>
                 </div>
            </div>
                 <div className="">
            <div className="relative mt-12 px-3 lg:px-7">
                   
                       
                       <h1 className="underline decoration-double underline-offset-4 font-semibold  text-stone h-16 text-lg tracking-wider sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ">GET IN TOUCH</h1> 
                  

                    <div className="text-stone text-xs  -mt-4  sm:px-5 md:text-sm md:px-10 lg:text-base lg:mt-2  xl:text-xl xxl:text-2xl">
                        <p className="leading-relaxed ">You have a piece of advice or a suggestion that you would like to share with us? Feel free to contact with us.</p>
                        <div className="text-stone mt-4 ">
                            <label for="name">Name</label><br></br>
                                <input type="text" name="name" className="bg-black border border-stone rounded-md input-box"></input>
                                <br></br>
                            
                            <label for="email" className="">Email</label><br></br>
                                <input type="email" name="email" className="bg-black border border-stone rounded-md input-box"></input>
                            <br></br>

                            <label for="text">Subject</label><br></br>
                                <input type="text" name="text" className="bg-black border border-stone rounded-md input-box"></input>
                            <br></br>

                              <label for="text">Message</label><br></br>
                               <textarea name="text" className="input-box h-40 "></textarea>
                            <br></br> 
                            <button className="text-amber border p-2 rounded-md hover:bg-stone hover:text-amber border-amber ">Send Message</button>  
                        </div>
                    </div>

                    <div className="mt-7 sm:mt-12">
                       
                       <h1 className="underline decoration-double underline-offset-4 font-semibold text-stone h-16 text-lg tracking-wider md:text-2xl lg:text-3xl xl:text-4xl ">FIND US</h1> 
                   

                    <div className="text-stone text-xs leading-[1.725] -mt-5 sm:px-5  md:text-sm md:px-10 md:-mt-3  lg:text-base xl:text-xl xl:mt-1 md:leading-[2.2] lg:leading-[2.1] xl:leading-[2] xxl:text-2xl xxl:leading-[2.2]">
                       
                        <span className="">Address: 40 Park Ave, Brooklyn, New Work 202525</span><br></br>
                      <span className="">Phone: 0000-2154-215</span><br></br>
                      <span>Email: reserve@foodieland.com</span>
                     
                    </div>
                    <div className="mt-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.075895747079!2d-73.94197298868654!3d40.80432597126051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2b76424149fd5%3A0x1e6065c9d4149dd9!2sPark%20Ave%2C%20United%20States!5e0!3m2!1sen!2sbd!4v1720456523566!5m2!1sen!2sbd"  height="400" className="w-full"   loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                        </div>
                       </div>
            </div>

            
        </div>
    );
};

export default Contact_Section;

