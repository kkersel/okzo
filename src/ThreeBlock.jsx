import React from 'react'
import classes from "./styles.module.scss";
import Title from "./Components/TITLE/Title";

export const ThreeBlock = () => {
    return (
        <div className={classes.ThreeBlock}>
            <Title text="ПОЧЕМУ МЫ?"/>
            <div className={classes.CardsWrapperThree}>
                <div className={classes.CardsBodyThree}>
                    <div className={classes.Body}>
                        <img className={classes.IconsThree} src="/images/work.png" alt="#"/>
                        <p className={classes.CardsTitle}>Большой опыт
                            наших инженеров <br/>
                            20 лет на рынке</p>
                    </div>
                </div>

                <div className={classes.CardsBodyThree}>
                    <div className={classes.Body}>
                        <img className={classes.IconsThree} src="/images/factory.png" alt="#"/>
                        <p className={classes.CardsTitle}>Собственное
                            производство</p>
                    </div>
                </div>


                <div className={classes.CardsBodyThree}>
                    <div className={classes.Body}>
                        <img className={classes.IconsThree} src="/images/contact.png" alt="#"/>
                        <p className={classes.CardsTitle}>Решаем задачи
                            любой сложности</p>
                    </div>
                </div>

                <div className={classes.CardsBodyThree}>
                    <div className={classes.Body}>
                        <img className={classes.IconsThree} src="/images/delivery.png" alt="#"/>
                        <p className={classes.CardsTitle}>Доставим и смонтируем
                            оборудование</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThreeBlock;
