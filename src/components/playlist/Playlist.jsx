import * as S from "./Playlist.styles";
import { PlaylistItem } from "./PlaylistItem/PlaylistItem";
import SkeletonPlaylist from "../skeletons/SkeletonPlaylist/Skeleton";

export const Playlist = ({ trackList, isLoading }) => {
  return (
    <S.Playlist>
      {isLoading ? (
        <SkeletonPlaylist />
      ) : (
        trackList?.map((track) => (
          <PlaylistItem key={track.id} trackData={track} />
        ))
      )}
    </S.Playlist>
  );
};
