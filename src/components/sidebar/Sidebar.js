import { useEffect, useState } from "react";
import { Skeleton } from "../skeletons/SkeletonSidebar/Skeleton";
import * as S from "./Sidebar.styles";

export const Sidebar = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });

  return (
    <S.Sidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        {isLoading ? (
          <Skeleton />
        ) : (
          <>
            <S.SidebarItem>
              <S.SidebarLink href="/">
                <S.SidebarImg
                  src="img/playlist01.png"
                  alt="day's playlist"
                ></S.SidebarImg>
              </S.SidebarLink>
            </S.SidebarItem>
            <S.SidebarItem>
              <S.SidebarLink href="/">
                <S.SidebarImg
                  src="img/playlist02.png"
                  alt="day's playlist"
                ></S.SidebarImg>
              </S.SidebarLink>
            </S.SidebarItem>
            <S.SidebarItem>
              <S.SidebarLink href="/">
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
    </S.Sidebar>
  );
};
