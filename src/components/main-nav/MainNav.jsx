import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames";
import * as S from "./MainNav.styles";

export const MainNav = () => {
  const [isMenuVisible, setVisible] = useState(false);
  const navigate = useNavigate();
  const activeClassName = "active";

  const handleClick = () => {
    setVisible(!isMenuVisible);
  };

  const isActiveLink = () => {
    return ({ isActive }) =>
      cn("MenuLink", {
        [activeClassName]: isActive,
      });
  };

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
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
              <S.MenuLink to="/" className={isActiveLink}>
                Главное
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink to="/favorites" className={isActiveLink}>
                Мой плейлист
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink to="/login" onClick={logout} className={isActiveLink}>
                Выйти
              </S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  );
};
