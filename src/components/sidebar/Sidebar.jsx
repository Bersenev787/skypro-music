import { useEffect, useState } from "react";
import { Skeleton } from "../skeletons/SkeletonSidebar/Skeleton";
import * as S from "./Sidebar.styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/User";
import { useSelector } from "react-redux";

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
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  const categoryIdList = {
    daily: 1,
    hits: 2,
    indy: 3,
  };

  const user = useSelector((state) => state.user);
  console.log("user", user);

  // const { user } = useUserContext();

  return (
    <S.Sidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{user.userName}</S.SidebarPersonalName>
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
