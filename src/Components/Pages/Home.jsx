import React from 'react';
import Hero from "../Hero/Hero";
import About from '../About/About';
import Choice_us from "../Choice_Us/Choice_us"


const Home = () => {
    return (
        <div>
         <Hero/>   
         <About/>
         <Choice_us/>
        </div>
    );
};

export default Home;