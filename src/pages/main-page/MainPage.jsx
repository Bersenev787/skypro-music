import { Layout } from "../../layouts/Layout";
import { Playlist } from "../../components/playlist/Playlist";
import { useGetPlaylistQuery } from "../../services/music.api";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setTracksList } from "../../store/slices/playList";

export const MainPage = () => {
  const { data, isLoading, error, isError } = useGetPlaylistQuery();
  const dispatch = useDispatch();
  const [isTracksLoading, setTrackLoading] = useState(isLoading);

  useEffect(() => {
    dispatch(setTracksList(data));
    setTrackLoading(isLoading);
  }, [isTracksLoading, isLoading, dispatch, data]);

  if (isError) {
    return <div>{error?.detail}</div>;
  }

  return (
    <>
      {isError ? (
        <div>{error?.detail}</div>
      ) : (
        <Playlist trackList={data} isLoading={isTracksLoading} />
      )}
    </>
  );
};
