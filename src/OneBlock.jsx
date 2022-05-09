import React, { useState }from 'react'
import classes from "./styles.module.scss";

export const OneBlock = () => {
    return (
        <div className={classes.OneBlock}>
            <div className={classes.Left}>
                <h1 className={classes.Title}>МЫ – ПРОЕКТНО-ПРОИЗВОДСТВЕННАЯ ФИРМА</h1>
                <h1 className={classes.TitleOrange}>ОКЗО-СИСТЕМС</h1>
                <h2 className={classes.Subtitle}>ПРОИЗВОДИМ КОНВЕЙРНОЕ ОБОРУДОВАНИЕ ДЛЯ ПИЩЕВОЙ ПРОМЫШЛЕННОСТИ</h2>
            </div>
            <div className={classes.Right}>
                <img
                    onMouseOut={e => (e.currentTarget.src = "/images/conveyor.png")}
                    onMouseOver={e => (e.currentTarget.src = "/images/Property 1=Variant2.png")}
                    className={classes.ConImg} src="/images/conveyor.png" alt="conveyor"
                />
            </div>
        </div>
    )
}

export default OneBlock;
