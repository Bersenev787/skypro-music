import SkeletonPlaylist from "../../skeletons/SkeletonPlaylist/Skeleton";
import * as S from "./PlaylistItem.styles";

export const PlaylistItem = ({ data, isLoading, playMusic }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formettedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${formettedSeconds}`;
  };

  return (
    <S.PlaylistItem>
      <S.Track>
        {isLoading ? (
          <SkeletonPlaylist />
        ) : (
          <>
            <S.TrackTitle>
              <S.TrackTitleImg>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref={data.logo}></use>
                </S.TrackTitleSvg>
              </S.TrackTitleImg>
              <S.TrackTitleText>
                <S.TrackTitleLink onClick={() => playMusic(data.id)}>
                  {data.name} <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="/">{data.author}</S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="/">{data.album}</S.TrackAlbumLink>
            </S.TrackAlbum>
          </>
        )}

        <S.TrackTime>
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>
            {formatTime(data.duration_in_seconds)}
          </S.TrackTimeText>
        </S.TrackTime>
      </S.Track>
    </S.PlaylistItem>
  );
};
