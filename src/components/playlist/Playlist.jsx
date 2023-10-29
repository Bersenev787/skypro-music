import { useEffect, useState } from "react";
import * as S from "./Playlist.styles";
import { PlaylistItem } from "./PlaylistItem/PlaylistItem";
import { getPlaylist } from "../../api/api.playlist";

export const Playlist = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [playlist, setPlaylist] = useState([]);
  const [addError, setAddError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    getPlaylist()
      .then((playlist) => setPlaylist(playlist))
      .catch((error) => {
        setAddError(error.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <S.Playlist>
      {addError?.length ? (
        <div>{addError}</div>
      ) : (
        playlist?.map((item) => (
          <PlaylistItem key={item.id} isLoading={isLoading} data={item} />
        ))
      )}
    </S.Playlist>
  );
};
