import { useState } from "react";
import * as S from "./MainNav.styles";

export default function MainNav() {
  const [isMenuVisible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!isMenuVisible);
  };

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
              <S.MenuLink href="/">Главное</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="/">Мой плейлист</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="/">Войти</S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  );
}
