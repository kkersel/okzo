import React from 'react'
import classes from './Footer.module.scss';

export const Footer = () => {
    return (
        <div className={classes.FooterWrapper}>
            <div className={classes.Footer}>
                <div className={classes.Col1}>
                    <p className={classes.FooterLinks}>E-mail: info@okzoost.ru</p>
                    <p className={classes.FooterLinks}>Адрес: г. Москва, Открытое шоссе, <br/>
                        д. 12, (офис 10)</p>
                    <p className={classes.FooterLinks}>
                        Тел.: +7 (495) 558-10-40;
                    </p>
                    <p className={classes.FooterLinks}>
                        ИНН: 7716558624
                    </p>
                    <img className={classes.FooterLogo} src="/images/Logo2.png"/>
                </div>
                <div className={classes.Col2}>
                    <p className={classes.FooterLinks}>-Конвейер ленточный</p>
                    <p className={classes.FooterLinks}>-Конвейер пластинчатый</p>
                    <p className={classes.FooterLinks}>-Рольганги</p>
                    <p className={classes.FooterLinks}>-Конвейер охлаждения</p>
                    <p className={classes.FooterLinks}>-Конвейер цепной</p>
                    <p className={classes.FooterLinks}>-Сетчатые ковейеры</p>
                    <p className={classes.FooterLinks}>-Конвейер c модульной лентой</p>
                </div>
                <div className={classes.Col3}>
                    <p className={classes.FooterLinks}>-Мясопереработка</p>
                    <p className={classes.FooterLinks}>-Птицепереработка</p>
                    <p className={classes.FooterLinks}>-Переработка и глазирование морепродуктов</p>
                    <p className={classes.FooterLinks}>-Автоматизированные складские системы</p>
                    <p className={classes.FooterLinks}>-Обжарка семечек</p>
                    <p className={classes.FooterLinks}>-Зонты вытяжные</p>
                    <p className={classes.FooterLinks}>-Сопутствующее оборудование</p>
                </div>
            </div>
            <p className={classes.AllRight}>© 2022 «ОКЗО-ОСТ»</p>
        </div>
    )
}

export default Footer;
