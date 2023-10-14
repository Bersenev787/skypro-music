import * as S from "./Skeleton.styles";

export default function Skeleton() {
  return (
    <S.SkeletonPlaylist>
      <S.SkeletonPlaylistSong className="col01">
        <S.SkeletonPlaylistIcon></S.SkeletonPlaylistIcon>
        <S.SkeletonPlaylistName></S.SkeletonPlaylistName>
      </S.SkeletonPlaylistSong>

      <S.SkeletonPlaylistAuthor className="col02">
        <div></div>
      </S.SkeletonPlaylistAuthor>
      <S.SkeletonPlaylisAlbum className="col03">
        <div></div>
      </S.SkeletonPlaylisAlbum>
    </S.SkeletonPlaylist>
  );
}
