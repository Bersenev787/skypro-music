import * as S from "./SkeletonTrackPlay.styles";

export default function SkeletonTrackplay() {
  return (
    <S.SkeletonTrackPlayContain>
      <S.SkeletonTrackPlayImg></S.SkeletonTrackPlayImg>
      <S.SkeletonTrackPlayAuthor></S.SkeletonTrackPlayAuthor>
      <S.SkeletonTrackPlayAlbum></S.SkeletonTrackPlayAlbum>
    </S.SkeletonTrackPlayContain>
  );
}
