import { Layout } from "../../layouts/Layout";
import { Playlist } from "../../components/playlist/Playlist";
import {
  useGetFavoritePlaylistQuery,
  useGetPlaylistQuery,
} from "../../services/music.api";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setTracksList } from "../../store/slices/playList";

export const FavoritePage = () => {
  const dispatch = useDispatch();
  const userStorageId = localStorage.getItem("user_id");
  const [userId, setUserId] = useState(userStorageId);
  const { data, isLoading, error, isError } = useGetFavoritePlaylistQuery();
  const allTracks = useGetPlaylistQuery();
  const [tracks, setTracks] = useState(data);
  const [isTracksLoading, setTrackLoading] = useState(false);

  const favoriteTracksList = allTracks.data?.filter((track) =>
    data?.map((item) => item.id).includes(track.id)
  );

  useEffect(() => {
    setTracks(data);
    dispatch(setTracksList(tracks));
    setTrackLoading(isLoading);
    setUserId(userStorageId);
  }, [
    isTracksLoading,
    isLoading,
    userId,
    tracks,
    allTracks,
    favoriteTracksList,
    data,
    dispatch,
    userStorageId,
  ]);

  if (isError) {
    return <div>{error.detail}</div>;
  }

  return (
    <>
      {isError ? (
        <div>{error.detail}</div>
      ) : (
        <Playlist trackList={tracks} isLoading={isTracksLoading} />
      )}
    </>
  );
};
