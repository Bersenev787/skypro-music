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
import { useLocation } from "react-router-dom";

export const Playlist = () => {
  const location = useLocation();
  const {
    data: playlist = [],
    isLoading: isLoadingPlaylist = false,
    error,
    isError,
  } = useGetPlaylistQuery();
  const {
    data: favoritePlaylist = [],
    isLoading: isLoadingFavoritePlaylist = false,
  } = useGetFavoritePlaylistQuery();
  const dispatch = useDispatch();
  const isFavoritePage = location.pathname === "/favorites";
  const tracks = isFavoritePage ? favoritePlaylist : playlist;
  const isLoading = isFavoritePage
    ? isLoadingFavoritePlaylist
    : isLoadingPlaylist;

  useEffect(() => {
    if (tracks.length) {
      console.log("playlist", tracks.length);
    }

    dispatch(setTracksList(tracks));
  }, [isLoadingPlaylist, isLoadingFavoritePlaylist]);

  if (isError) {
    return <div>{error.data.detail}</div>;
  }

  return (
    <S.Playlist>
      {isLoading && tracks.length ? (
        <SkeletonPlaylist />
      ) : (
        tracks?.map((item) => <PlaylistItem key={item.id} trackData={item} />)
      )}
    </S.Playlist>
  );
};
