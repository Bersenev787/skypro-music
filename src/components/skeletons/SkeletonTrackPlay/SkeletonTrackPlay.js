import * as S from "./SkeletonTrackPlay.styles";

export const SkeletonTrackplay = () => {
  return (
    <S.SkeletonTrackPlayContain>
      <S.SkeletonTrackPlayImg></S.SkeletonTrackPlayImg>
      <S.SkeletonTrackPlayAuthor></S.SkeletonTrackPlayAuthor>
      <S.SkeletonTrackPlayAlbum></S.SkeletonTrackPlayAlbum>
    </S.SkeletonTrackPlayContain>
  );
};
