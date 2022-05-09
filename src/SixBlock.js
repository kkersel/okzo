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
                    {/*<div className={classes.OneLine}>*/}
                    {/*    <img className={classes.CompamyImg} src="/images/metro.png" alt=""/>*/}
                    {/*    <img className={classes.CompamyImg} src="/images/cer.png" alt=""/>*/}
                    {/*    <img className={classes.CompamyImg} src="/images/prodo.png" alt=""/>*/}
                    {/*    <img className={classes.CompamyImg} src="/images/nn.png" alt=""/>*/}
                    {/*</div>*/}
                    {/*<div className={classes.TwoLine}>*/}
                    {/*    <img className={classes.CompamyImg} src="/images/res.png" alt=""/>*/}
                    {/*    <img className={classes.CompamyImg} src="/images/otto.png" alt=""/>*/}
                    {/*    <img className={classes.CompamyImg} src="/images/ozon.png" alt=""/>*/}
                    {/*    <img className={classes.CompamyImg} src="/images/ost.png" alt=""/>*/}
                    {/*</div>*/}
                    <img src="/images/bad.png" alt=""/>
                </div>
        </div>
    )
}

export default SixBlock;
