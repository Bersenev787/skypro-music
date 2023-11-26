import { useEffect, useState } from "react";
import * as S from "./Playlist.styles";
import { PlaylistItem } from "./PlaylistItem/PlaylistItem";
import { getPlaylist } from "../../api/api.playlist";
import SkeletonPlaylist from "../skeletons/SkeletonPlaylist/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { setTracksList } from "../../store/slices/playList";
import { useGetFavoriteTracksQuery } from "../../services/music.api.js";

export const Playlist = ({ playMusic }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [addError, setAddError] = useState(null);
  const playlist = useSelector((state) => state.track.tracksList);
  const dispatch = useDispatch();

  const { data, error } = useGetFavoriteTracksQuery();
  console.log(data);

  useEffect(() => {
    setIsLoading(true);

    getPlaylist()
      .then((playlist) => dispatch(setTracksList(playlist)))
      .catch((error) => {
        setAddError(error.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (addError?.length) {
    return <div>{addError}</div>;
  }

  return (
    <S.Playlist>
      {isLoading ? (
        <SkeletonPlaylist />
      ) : (
        playlist?.map((item) => (
          <PlaylistItem
            key={item.id}
            isLoading={isLoading}
            data={item}
            playMusic={playMusic}
          />
        ))
      )}
    </S.Playlist>
  );
};
