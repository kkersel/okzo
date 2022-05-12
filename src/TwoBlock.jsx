import React from 'react'
import classes from './styles.module.scss'
import 'react-awesome-slider/dist/styles.css';
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import IconsCard from "./Components/IconsCard";
import Title from "./Components/TITLE/Title";

export const TwoBlock = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <div className={classes.TwoBlock}>
            <Title text="Конвейерное оборудование:"/>
            <div className={classes.ImageGallery}>
                <AutoplaySlider
                    play={true}
                    cancelOnInteraction={true}
                    interval={3000}
                    >
                    <div className={classes.gimg} data-src="/images/1.png" />
                    <div className={classes.gimg} data-src="/images/2.png" />
                    <div className={classes.gimg} data-src="/images/3.png" />
                    <div className={classes.gimg} data-src="/images/4.png" />
                </AutoplaySlider>
            </div>

            <div className={classes.cards}>
                <IconsCard/>
            </div>
        </div>
    )
}

export default TwoBlock;
