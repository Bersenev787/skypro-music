import * as S from "./PlaylistItem.styles";
import {
  setIsPlayTrack,
  setTrackId,
  setTrack,
} from "../../../store/slices/playList";
import { useDispatch, useSelector } from "react-redux";
import {
  useAddLikeMutation,
  useDeleteLikeMutation,
} from "../../../services/music.api";
import { useEffect } from "react";
import { useState } from "react";

export const PlaylistItem = ({ trackData }) => {
  const [addLike] = useAddLikeMutation();
  const [deleteLike] = useDeleteLikeMutation();
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formettedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${formettedSeconds}`;
  };
  const dispatch = useDispatch();
  const isPlayingTrack = useSelector((state) => state.track.isPlayTrack);
  const trackId = useSelector((state) => state.track.trackId);
  const tracksList = useSelector((state) => state.track.tracksList);
  const userId = localStorage.getItem("user_id");
  const isLikedTrack = trackData?.stared_user?.find(
    (user) => user.id === Number(userId)
  );
  const [isLiked, setLike] = useState(isLikedTrack);

  const handlePlayTrack = () => {
    dispatch(setIsPlayTrack(true));
    dispatch(setTrackId(trackData.id));

    const currentTrack = tracksList.filter(
      (track) => track.id === trackData.id
    );

    dispatch(setTrack(...currentTrack));
  };

  const handleToggleLike = async (id) => {
    if (isLiked) {
      setLike(true);
      await deleteLike(id);
      return;
    }
    setLike(false);
    await addLike(id);
  };

  useEffect(() => {
    setLike(trackData?.stared_user ? isLikedTrack : true);
  }, [isLiked, isLikedTrack, trackData, trackData?.stared_user]);

  return (
    <S.PlaylistItem>
      <S.Track>
        <S.TrackTitle>
          <S.TrackTitleImg>
            {trackId === trackData.id ? (
              <S.TrackTitlePulsar className={isPlayingTrack ? "active" : ""} />
            ) : (
              <S.TrackTitleSvg alt="music">
                <use xlinkHref={trackData.logo}></use>
              </S.TrackTitleSvg>
            )}
          </S.TrackTitleImg>
          <S.TrackTitleText>
            <S.TrackTitleLink onClick={handlePlayTrack}>
              {trackData.name} <S.TrackTitleSpan></S.TrackTitleSpan>
            </S.TrackTitleLink>
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAuthor>
          <S.TrackAuthorLink href="/">{trackData.author}</S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <S.TrackAlbumLink href="/">{trackData.album}</S.TrackAlbumLink>
        </S.TrackAlbum>

        <S.TrackTime>
          <S.TrackTimeSvg
            alt="time"
            onClick={() => handleToggleLike(trackData.id)}
            className={isLiked && "active"}
          >
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>
            {formatTime(trackData.duration_in_seconds)}
          </S.TrackTimeText>
        </S.TrackTime>
      </S.Track>
    </S.PlaylistItem>
  );
};
