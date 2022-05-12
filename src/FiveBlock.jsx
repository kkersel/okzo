import React from 'react'
import classes from './styles.module.scss';
import Title from "./Components/TITLE/Title";
import Map from "./Map";

export const FiveBlock = () => {
    return (
        <div className={classes.FiveBlock}>
            <Title text="Контакты:"/>

            <div className={classes.ContactWrapper}>
                {/*aga*/}
                <div className={classes.Contact}>
                    <div className={classes.Left}>
                        <p className={classes.Information}>
                            {/*<a href="info@okzoost.ru">info@okzoost.ru</a>*/}
                            <a className={classes.Information}
                               href="mailto:info@okzoost.ru">info@okzoost.ru</a>
                        </p>
                        <p className={classes.Information}>
                           <a className={classes.Information}
                              href="tel:+74952236498"> 8 (495) 223-64-98</a>
                        </p>
                        <p className={classes.Information}>
                           <a className={classes.Information}
                              href="tel:+74955581040"> 8 (495) 558-10-40</a>
                        </p>
                        <h1 className={classes.LastTitle}>График работы: будни с 10:00 до 18:00</h1>
                    </div>
                    <div className={classes.Right}>
                        <p className={classes.Information}>Наши соц.сети:</p>
                        <div className={classes.SocialMedia}>
                            <img className={classes.IconSocialMedia} src="/images/vk.png" alt=""/>
                            <img className={classes.IconSocialMedia} src="/images/inst.png" alt=""/>
                            <img className={classes.IconSocialMedia} src="/images/you.png" alt=""/>
                            <img className={classes.IconSocialMedia} src="/images/tg.png" alt=""/>
                        </div>
                        <h1 className={classes.LastTitle}>г. Москва, Открытое шоссе, д. 12, офис 10</h1>
                    </div>
                </div>
                {/*map*/}
                <Map/>
            </div>
        </div>
    )
}

export default FiveBlock;
