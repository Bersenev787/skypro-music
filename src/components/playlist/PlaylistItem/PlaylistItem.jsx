import * as S from "./PlaylistItem.styles";
import {
  setIsPlayTrack,
  setTrackId,
  setTrack,
} from "../../../store/slices/playList";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetTrackQuery,
  useAddLikeMutation,
  useDeleteLikeMutation,
} from "../../../services/music.api";
import { useEffect } from "react";

export const PlaylistItem = ({ trackData }) => {
  const [addLike, { isError, isLoading }] = useAddLikeMutation();
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
  const { data = {} } = useGetTrackQuery(trackData.id);
  const userName = localStorage.getItem("user_name");

  const handlePlayTrack = () => {
    dispatch(setIsPlayTrack(true));
    dispatch(setTrackId(data.id));

    const currentTrack = tracksList.filter((track) => track.id === data.id);
    dispatch(setTrack(currentTrack));
  };

  const handleToggleLike = async (id) => {
    console.log(id);
    if (isLiked(id)) {
      console.log("delete");
      await deleteLike(id);
      return;
    }
    console.log("add");
    await addLike(id);
  };

  const isLiked = (id) => {
    console.log(id);
    console.log(
      tracksList.some((item) =>
        item.stared_user.find(
          (stared) => stared.id === id && stared.user_name === userName
        )
      )
    );
    return tracksList.some((item) =>
      item.stared_user.find((item) => item.id === id)
    );
  };

  // console.log(isLiked(8));

  // useEffect(() => {
  //   const userName = localStorage.getItem("user_name");
  //   console.log(userName);
  //   console.log(tracksList);
  // }, []);

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
          <S.TrackAuthorLink href="/">
            {data.author} sdsdsd {isLiked(data.id)}
          </S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <S.TrackAlbumLink href="/">{data.album}</S.TrackAlbumLink>
        </S.TrackAlbum>

        <S.TrackTime>
          <S.TrackTimeSvg
            alt="time"
            onClick={() => handleToggleLike(data.id)}
            className={isLiked(data.id) && "active"}
          >
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
