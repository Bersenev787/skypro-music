import { useState } from "react";
import cn from "classnames";
import * as S from "./MainNav.styles";

export const MainNav = () => {
  const [isMenuVisible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!isMenuVisible);
  };

  const isActiveLink = () => {
    return ({ isActive }) =>
      cn("MenuLink", {
        [activeClassName]: isActive,
      });
  };

  const activeClassName = "active";

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImg src="/img/logo.png" alt="logo"></S.LogoImg>
      </S.NavLogo>
      <S.NavBurger onClick={handleClick}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      {isMenuVisible && (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <S.MenuLink to="/" className={isActiveLink}>
                Главное
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink to="/my-playlist" className={isActiveLink}>
                Мой плейлист
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink to="/login" className={isActiveLink}>
                Войти
              </S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  );
};
