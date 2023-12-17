import { useEffect, useState } from "react";
import { Skeleton } from "../skeletons/SkeletonSidebar/Skeleton";
import * as S from "./Sidebar.styles";
import { useLocation, useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });

  const location = useLocation();
  const isShowSidebar = location.pathname === "/";
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_id");
    navigate("/login", { replace: true });
  };

  const categoryIdList = {
    daily: 1,
    hits: 2,
    indy: 3,
  };

  const userName = localStorage.getItem("user_name");

  return (
    <S.Sidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{userName}</S.SidebarPersonalName>
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
                <S.SidebarLink to={`/category/${categoryIdList.daily}`}>
                  <S.SidebarImg
                    src="img/playlist01.png"
                    alt="day's playlist"
                  ></S.SidebarImg>
                </S.SidebarLink>
              </S.SidebarItem>
              <S.SidebarItem>
                <S.SidebarLink to={`/category/${categoryIdList.hits}`}>
                  <S.SidebarImg
                    src="img/playlist02.png"
                    alt="day's playlist"
                  ></S.SidebarImg>
                </S.SidebarLink>
              </S.SidebarItem>
              <S.SidebarItem>
                <S.SidebarLink to={`/category/${categoryIdList.indy}`}>
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
