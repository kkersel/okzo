import React from 'react'
import {CCard, CCardImage, CCardBody, CCardText, CCardGroup} from '@coreui/react';
import a from './CardsGroup.module.scss'

export const IconsCard = () => {
    return (
        <div className={a.CardsWrapper}>
            <div className={a.CardsGroup}>
                <div className={a.CardsBody}>
                    <img className={a.Icons} src="/images/image 13 (Traced).png"/>
                    <p className={a.CardsTitle}>Мясопереработка</p>
                </div>

                <div className={a.CardsBody}>
                    <img src="/images/image 14 (Traced).png"/>
                    <p className={a.CardsTitle}>Птицепереработка</p>
                </div>

                <div className={a.CardsBody}>
                    <img src="/images/image 15 (Traced).png"/>
                    <p className={a.CardsTitle}>Морепродукты</p>
                </div>

                <div className={a.CardsBody}>
                    <img src="/images/image 16 (Traced).png"/>
                    <p className={a.CardsTitle}>Обжарка семечек</p>
                </div>
            </div>

            <div className={a.CardsGroup}>
                <div className={a.CardsBody}>
                    <img src="/images/image 17 (Traced).png"/>
                    <p className={a.CardsTitle}>Конвейер ленточный
                        “собери сам”</p>
                </div>

                <div className={a.CardsBody}>
                    <img src="/images/image 18 (Traced).png"/>
                    <p className={a.CardsTitle}>Автоматизированные
                        складные системы</p>
                </div>

                <div className={a.CardsBody}>
                    <img src="/images/image 19 (Traced).png"/>
                    <p className={a.CardsTitle}>Сопутствующее
                        оборудование</p>
                </div>

                <div className={a.CardsBody}>
                    <img src="/images/image 20 (Traced).png"/>
                    <p className={a.CardsTitle}>Конвейнер для суши</p>
                </div>
            </div>
        </div>
    )
}

export default IconsCard;
