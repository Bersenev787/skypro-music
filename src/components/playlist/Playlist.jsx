import * as S from "./Playlist.styles";
import { PlaylistItem } from "./PlaylistItem/PlaylistItem";
import SkeletonPlaylist from "../skeletons/SkeletonPlaylist/Skeleton";
import {
  useGetPlaylistQuery,
  useGetFavoritePlaylistQuery,
} from "../../services/music.api";
import { useDispatch } from "react-redux";
import { setTracksList, setTrack } from "../../store/slices/playList";
import { useEffect } from "react";

export const Playlist = () => {
  const {
    data: playlist = [],
    isLoading,
    error,
    isError,
  } = useGetPlaylistQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTracksList(playlist));
  }, [playlist]);

  if (isError) {
    return <div>{error.data.detail}</div>;
  }

  return (
    <S.Playlist>
      {isLoading && playlist.length ? (
        <SkeletonPlaylist />
      ) : (
        playlist?.map((item) => <PlaylistItem key={item.id} trackData={item} />)
      )}
    </S.Playlist>
  );
};
