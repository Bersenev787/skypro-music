import * as S from "./Playlist.styles";
import { PlaylistItem } from "./PlaylistItem/PlaylistItem";
import SkeletonPlaylist from "../skeletons/SkeletonPlaylist/Skeleton";
import { useGetPlaylistQuery } from "../../services/music.api";
import { useDispatch } from "react-redux";
import { setTracksList, setTrack } from "../../store/slices/playList";
import { useEffect } from "react";
import { useGetTrackQuery } from "../../services/music.api";

export const Playlist = () => {
  const { data = [], isLoading } = useGetPlaylistQuery();
  const playlist = data;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTracksList(playlist));
  }, [playlist]);

  // if (error.error?.length) {
  //   return <div>{error.error}</div>;
  // }

  return (
    <S.Playlist>
      {isLoading ? (
        <SkeletonPlaylist />
      ) : (
        playlist?.map((item) => <PlaylistItem key={item.id} trackData={item} />)
      )}
    </S.Playlist>
  );
};
