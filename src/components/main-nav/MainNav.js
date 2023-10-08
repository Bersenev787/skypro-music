import "./MainNav.css";
import React, { useState } from "react";

export default function MainNav() {
  const [isMenuVisible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!isMenuVisible);
  };

  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="/img/logo.png" alt="logo"></img>
      </div>
      <div onClick={handleClick} className="nav__burger burger">
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      {isMenuVisible && (
        <div className="nav__menu menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="/" className="menu__link">
                Главное
              </a>
            </li>
            <li className="menu__item">
              <a href="/" className="menu__link">
                Мой плейлист
              </a>
            </li>
            <li className="menu__item">
              <a href="/" className="menu__link">
                Войти
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
