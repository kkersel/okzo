import React from 'react'
import Title from "./Components/TITLE/Title";
import classes from "./styles.module.scss";

export const SevenBlock = () => {
    return (
        <div className={classes.SevenBlock}>
            <Title text="Обратный звонок:"/>
            <div className={classes.BringWrapper}>
                <div className={classes.BringBlock}>
                    <form className={classes.FormStyle}>
                       <div className={classes.Titles}>
                           <h1 className={classes.FormTitle}>Остались вопросы? Мы поможем!</h1>
                           <p className={classes.Helptext}>Заполните анкету:</p>
                           <input
                                  className={classes.PutStylePhone}
                                  type="tel"
                                  name="phone_number"
                                  autoComplete="on"
                                  maxLength="12"
                                  pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
                                  placeholder="+7-999-123-45-67"
                           />
                       </div>
                        <div className={classes.InputWrapper}>
                            <input placeholder='Ваше имя' className={classes.PutStyle} type="name"/>
                            <input placeholder='Ваш email' className={classes.PutStyle} type="email"/>
                            <button className={classes.button}>Отправить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SevenBlock;
