import React from 'react'
import classes from './styles.module.scss';

export const SixBlock = () => {
    return (
        <div className={classes.SixBlock}>
            <div className={classes.TitleBuble}>
                <img className={classes.BubleBuble} alt="#" src="/images/orange.png"/>
                <p className={classes.BubletextBuble}>НАМ ДОВЕРЯЮТ:</p>
            </div>

            <div className={classes.Collabs}>
                <img src="/images/bad.png" alt=""/>
            </div>

            <div className={classes.CMobile}>
                <img src="/images/CompanyBobile.png" alt=""/>
            </div>
        </div>
    )
}

export default SixBlock;
