import { useEffect, useState } from "react";
import { Skeleton } from "../skeletons/SkeletonSidebar/Skeleton";
import * as S from "./Sidebar.styles";
import { useLocation } from "react-router-dom";

export const Sidebar = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });

  const location = useLocation();
  const isShowSidebar = location.pathname === "/";
  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <S.Sidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarIcon onClick={logout}>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      {isShowSidebar && (
        <S.SidebarBlock>
          {isLoading ? (
            <Skeleton />
          ) : (
            <>
              <S.SidebarItem>
                <S.SidebarLink to="/day-playlist">
                  <S.SidebarImg
                    src="img/playlist01.png"
                    alt="day's playlist"
                  ></S.SidebarImg>
                </S.SidebarLink>
              </S.SidebarItem>
              <S.SidebarItem>
                <S.SidebarLink to="/hits-playlist">
                  <S.SidebarImg
                    src="img/playlist02.png"
                    alt="day's playlist"
                  ></S.SidebarImg>
                </S.SidebarLink>
              </S.SidebarItem>
              <S.SidebarItem>
                <S.SidebarLink to="/indy-playlist">
                  <S.SidebarImg
                    src="img/playlist03.png"
                    alt="day's playlist"
                  ></S.SidebarImg>
                </S.SidebarLink>
              </S.SidebarItem>
            </>
          )}
          <S.SidebarList></S.SidebarList>
        </S.SidebarBlock>
      )}
    </S.Sidebar>
  );
};
