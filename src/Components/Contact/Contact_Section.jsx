import React from 'react'; 
import contact_bg from "../Assets/contact_bg.png"

const Contact_Section = () => {
    return (
        <div className="w-[300px] sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1280px] xxl:w-[1600px] pb-20 lg:pb-48 bg-black xl:pb-60 xxl:pb-[400px]">

            <div>
                <img src={contact_bg} className="h-[300px] w-[300px] brightness-[0.5] sm:w-[500px]  md:w-[700px] lg:w-[1000px] xl:w-[1280px] xl:h-[400px] xxl:w-[1600px] xxl:h-[500px]"></img>
                
                 <div className="relative text-stone text-center -mt-48 xl:-mt-60 xxl:-mt-72">
 
                     <h3 className=" text-2xl font-semibold font-serif text-amber md:text-3xl lg:text-4xl xl:text-5xl xxl:text-7xl">CONTACT</h3>
                     <p className="text-xs tracking-[0.2em] mt-1 md:text-sm lg:text-base xl:text-xl xxl:text-2xl">We love here from you</p>
                 </div>
            </div>
                 <div className="xl:pt-12">
            <div className="relative mt-40 pl-4 xl:pl-8 xxl:mt-48">
                   
                       
                       <h1 className="underline decoration-double underline-offset-4 font-semibold  text-stone h-16 text-lg tracking-wider sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ">GET IN TOUCH</h1> 
                  

                    <div className="text-stone text-xs px-2 -mt-4 sm:px-5 md:text-sm md:px-10 lg:text-base lg:-ml-24 xl:text-xl xxl:text-2xl">
                        <p className="leading-relaxed lg:w-[400px] lg:ml-20 lg:mt-3 xl:w-[500px] xl:mt-5 xxl:w-[600px]">You have a piece of advice or a suggestion that you would like to share with us? Feel free to contact with us.</p>
                        <div className="text-stone mt-4 md:ml-20">
                            <label for="name">Name</label><br></br>
                                <input type="text" name="name" className="bg-black border border-stone rounded-md w-60 h-7 mt-2 mb-3 sm:w-[400px] xl:h-12 xl:w-[500px] xxl:w-[600px] xxl:h-16 xxl:mt-4 xxl:mb-5"></input>
                                <br></br>
                            
                            <label for="email" className="">Email</label><br></br>
                                <input type="email" name="email" className="bg-black border border-stone rounded-md w-60 h-7 mt-2 mb-3 sm:w-[400px] xl:h-12 xl:w-[500px] xxl:w-[600px] xxl:h-16 xxl:mt-4 xxl:mb-5"></input>
                            <br></br>

                            <label for="text">Subject</label><br></br>
                                <input type="text" name="text" className="bg-black border border-stone rounded-md w-60 h-7 mt-2 mb-3 sm:w-[400px]
                                xl:h-12 xl:w-[500px] xxl:w-[600px] xxl:h-16 xxl:mt-4 xxl:mb-5"></input>
                            <br></br>

                              <label for="text">Message</label><br></br>
                               <textarea name="text" className="bg-black border border-stone rounded-md w-60 h-40 mt-2 mb-3 sm:w-[400px]  xl:w-[500px] xxl:w-[600px]  xxl:mt-4 xxl:mb-5"></textarea>
                            <br></br> 
                            <button className="text-amber border hover:bg-stone hover:text-amber border-amber ml-36 mb-5 p-2 rounded-md sm:ml-40 sm:mt-2 xxl:p-4 lg:mt-28 lg:ml-[380px] xl:ml-[490px] xxl:ml-[620px]">Send Message</button>  
                        </div>
                    </div>

                    <div className="lg:ml-[510px] lg:-mt-[722px] xl:ml-[650px]
                    xl:-mt-[828px] xxl:ml-[750px] xxl:-mt-[985px]">
                       
                       <h1 className="underline decoration-double underline-offset-4 font-semibold text-stone h-16 text-lg tracking-wider md:text-2xl lg:text-3xl xl:text-4xl ">FIND US</h1> 
                   

                    <div className="text-stone text-xs leading-[1.725] -mt-5 sm:ml-16 md:text-sm md:-mt-3  lg:text-base lg:ml-2 xl:text-xl xl:mt-1 md:leading-[2.2] lg:leading-[2.1] xl:leading-[2] xxl:text-2xl xxl:leading-[2.2]">
                       
                        <span className="">Address: 40 Park Ave, Brooklyn, New Work 202525</span><br></br>
                      <span className="">Phone: 0000-2154-215</span><br></br>
                      <span>Email: reserve@foodieland.com</span>
                     
                    </div>
                    <div className="mt-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.075895747079!2d-73.94197298868654!3d40.80432597126051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2b76424149fd5%3A0x1e6065c9d4149dd9!2sPark%20Ave%2C%20United%20States!5e0!3m2!1sen!2sbd!4v1720456523566!5m2!1sen!2sbd"  height="400" className="-ml-4 w-[300px] sm:w-[500px] px-2 md:w-[700px] lg:w-[450px] xl:w-[550px] xxl:w-[720px]"   loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                        </div>
                       </div>
            </div>

            
        </div>
    );
};

export default Contact_Section;

