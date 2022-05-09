import React from 'react'
import b from './Title.module.scss'

export const Title = ({text}) => {
    return (
        <div className={b.Title}>
            <img className={b.Buble} alt="#" src="/images/orange.png"/>
            <p className={b.Bubletext}>{text}</p>
        </div>
    )
}

export default Title;
