import * as S from "./Skeleton.styles";

export default function Skeleton() {
  return (
    <S.SkeletonSidebar>
      <S.SkeletonSidebarItem></S.SkeletonSidebarItem>
      <S.SkeletonSidebarItem></S.SkeletonSidebarItem>
      <S.SkeletonSidebarItem></S.SkeletonSidebarItem>
    </S.SkeletonSidebar>
  );
}
