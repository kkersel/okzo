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
import Fade from 'react-reveal/Fade';


export const LandingPage = () => {
    return (
       <div className="MainWrapper">
           <Fade bottom><NavBar/></Fade>
           <Fade bottom><OneBlock/></Fade>
           <Fade bottom><TwoBlock/></Fade>
           <Fade bottom><ThreeBlock/></Fade>
           <Fade bottom><FourBlock/></Fade>
           <Fade bottom><FiveBlock/></Fade>
           <Fade bottom><SixBlock/></Fade>
           <Fade bottom><SevenBlock/></Fade>
           <Fade bottom><Footer/></Fade>
       </div>
    )
}

export default LandingPage;
