import React from 'react'
import NavBar from "./NavigationBar/NavBar";
import OneBlock from "./OneBlock";
import TwoBlock from "./TwoBlock";
import ThreeBlock from "./ThreeBlock";
import FourBlock from "./FourBlock";
import FiveBlock from "./FiveBlock";
import SixBlock from "./SixBlock";
import SevenBlock from "./SevenBlock";
import Footer from "./Footer/Footer";


export const LandingPage = () => {
    return (
       <div className="MainWrapper">
           <NavBar/>
           <OneBlock/>
           <TwoBlock/>
           <ThreeBlock/>
           <FourBlock/>
           <FiveBlock/>
           <SixBlock/>
           <SevenBlock/>
           <Footer/>
       </div>
    )
}

export default LandingPage;
