import * as S from "./PlaylistItem.styles";
import { setIsPlayTrack, setTrackId } from "../../../store/slices/playList";
import { useDispatch, useSelector } from "react-redux";

export const PlaylistItem = ({ data }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formettedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${formettedSeconds}`;
  };
  const dispatch = useDispatch();
  const isPlayingTrack = useSelector((state) => state.track.isPlayTrack);
  const trackId = useSelector((state) => state.track.trackId);

  const handlePlayTrack = () => {
    dispatch(setIsPlayTrack(true));
    dispatch(setTrackId(data.id));
  };

  return (
    <S.PlaylistItem>
      <S.Track>
        <S.TrackTitle>
          <S.TrackTitleImg>
            {trackId === data.id ? (
              <S.TrackTitlePulsar className={isPlayingTrack ? "active" : ""} />
            ) : (
              <S.TrackTitleSvg alt="music">
                <use xlinkHref={data.logo}></use>
              </S.TrackTitleSvg>
            )}
          </S.TrackTitleImg>
          <S.TrackTitleText>
            <S.TrackTitleLink onClick={handlePlayTrack}>
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
