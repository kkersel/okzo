import React from 'react'
import classes from "./styles.module.scss";
import a from "./Components/CardsGroup.module.scss";
import Title from "./Components/TITLE/Title";

export const FourBlock = (props) => {
    return (
        <div className={classes.FourBlock}>
            {/*ЗАГОЛОВОК*/}
            <Title text="Варианты, которые мы можем предложить:"/>

            {/*ВСЕ КАРТОЧКИ*/}
            <div className={classes.CardsWrapper}>

                {/*ИНФОРМАЦИЯ*/}
                <div className={classes.InfoCardsWrapper}>
                    <div className={classes.InfoCards}>
                        <img className={classes.InfoLogo} src="/images/info.png"/>
                        <p className={classes.InfoCardsTitle}>
                            Фирма выпускает все виды конвейерных систем,
                            запчасти и дополнительное оборудование: емкости, поддоны, фурнитуру и т. п.
                            Вы можете заказать транспортеры от производителя:</p>

                        <p className={classes.InfoCardsTitle}>Исполнено свыше 500 разнообразных проектов в России и
                            СНГ</p>
                    </div>
                </div>

                {/*КОНТЕЙНЕР МАЛЯЕЯНЬКИЕ КАРТОЧКИ*/}
                <div className={classes.MiniCardsWrapper}>
                    <div className={classes.CardsGroupMini}>
                        <div className={classes.CardsBody}>
                            <img className={classes.Icons} src="/images/ph1.png"/>
                            <p className={classes.CardsTitle}>Ленточные <br/>
                                конвейеры</p>
                        </div>

                        <div className={classes.CardsBody}>
                            <img className={classes.Icons} src="/images/ph2.png"/>
                            <p className={classes.CardsTitle}>Рольганги</p>
                        </div>

                        <div className={classes.CardsBody}>
                            <img  className={classes.Icons} src="/images/ph3.png"/>
                            <p className={classes.CardsTitle}>Пластинчатые <br/>
                                конвейеры</p>
                        </div>
                    </div>

                    <div className={classes.CardsGroupMini}>
                        <div className={classes.CardsBody}>
                            <img className={classes.Icons} src="/images/ph4.png"/>
                            <p className={classes.CardsTitle}>Сетчатые <br/>
                                конвейеры</p>
                        </div>

                        <div className={classes.CardsBody}>
                            <img className={classes.Icons} src="/images/ph5.png"/>
                            <p className={classes.CardsTitle}>Подвесные
                                конвейеры <br/>
                                для гофротары</p>
                        </div>

                        <div className={classes.CardsBody}>
                            <img className={classes.Icons} src="/images/ph6.png"/>
                            <p className={classes.CardsTitle}>Модульные <br/>
                                конвейеры</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FourBlock;
