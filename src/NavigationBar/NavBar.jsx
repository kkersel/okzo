import React from 'react'
import navbar from './navbar.scss'
import Flash from 'react-reveal/Flash';

export const NavBar = () => {
    return (
        <header>
            <div className="Wrap">
                {/* Меню навигационного бара */}
                <a className="Logo">
                    <img className="LogoImg" src="./images/Logo2.png" alt="logo"/>
                </a>
                <nav>
                    <a to="/MainPage" className="linkStyle">КАТАЛОГ</a>
                    <a to="/Delivery" className="linkStyle">О КОМПАНИИ</a>
                    <a to="/Gellary" className="linkStyle">ЦЕНЫ</a>
                    <a to="/Constructor" className="linkStyle">ДОСТАВКА И ОПЛАТА</a>
                    <a to="/Constructor" className="linkStyle">ЗАКАЗАТЬ РАСЧЕТ</a>
                    <a to="/Constructor" className="linkStyle">КОНТАКТЫ</a>
                </nav>
                <div>
                   <Flash><div className="Online"></div></Flash>
                    <a className="linkStyle" to="#">+7(495)223-64-98</a>
                    {/*<a className="linkStyle" to="#">+7(495)558-10-40</a>*/}
                </div>
            </div>
        </header>
    )
}

export default NavBar;
