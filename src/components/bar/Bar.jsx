import { SkeletonTrackplay } from "../skeletons/SkeletonTrackPlay/SkeletonTrackPlay";
import { useEffect, useState } from "react";
import * as S from "./Bar.styles";
import { getTrack } from "../../api/api.playlist";

export const Bar = ({ trackId }) => {
  const [trackIsLoading, setTrackIsLoading] = useState(false);
  const [track, setTrack] = useState(null);
  const [addError, setAddError] = useState(null);

  useEffect(() => {
    getTrack(trackId)
      .then((track) => setTrack(track))
      .catch((error) => {
        setAddError(error.message);
      })
      .finally(() => setTrackIsLoading(false));
  }, [trackId]);

  return (
    <S.Bar className={trackId && track?.id ? "active" : ""}>
      <figure>
        <figcaption>
          {track?.author}: {track?.name}
        </figcaption>
        <audio controls src={track?.track_file}>
          <a href={track?.track_file}> {track?.name} </a>
        </audio>
      </figure>
      <S.BarContent>
        <S.BarPlayerProgress></S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <S.Player>
            <S.PlayerControls>
              <S.PlayerBtnPrev>
                <S.PlayerBtnPrevSvg alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay className={"_btn"}>
                <S.PlayerBtnPlaySvg alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtnPlay>
              <S.PlayerBtnNext>
                <S.PlayerBtnNextSvg alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>
              <S.PlayerBtnRepeat className={"_btn-icon"}>
                <S.PlayerBtnRepeatSvg alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShuffle className={"_btn-icon"}>
                <S.PlayerBtnShuffleSvg alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </S.PlayerBtnShuffleSvg>
              </S.PlayerBtnShuffle>
            </S.PlayerControls>

            <S.TrackPlay>
              {trackIsLoading ? (
                <SkeletonTrackplay />
              ) : addError ? (
                <div>{addError}</div>
              ) : (
                <S.TrackPlayContain>
                  <S.TrackPlayImg>
                    <S.TrackPlaySvg alt="music">
                      <use xlinkHref={track?.logo}></use>
                    </S.TrackPlaySvg>
                  </S.TrackPlayImg>
                  <S.TrackPlayAuthor>
                    <S.TrackPlayAuthorLink href="/">
                      {track?.name}
                    </S.TrackPlayAuthorLink>
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum>
                    <S.TrackPlayAlbumLink href="/">
                      {track?.author}
                    </S.TrackPlayAlbumLink>
                  </S.TrackPlayAlbum>
                </S.TrackPlayContain>
              )}

              <S.TrackPlayLikeDis>
                <S.TrackPlayLike className={"_btn-icon"}>
                  <S.TrackPlayLikeSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackPlayLikeSvg>
                </S.TrackPlayLike>
                <S.TrackPlayDislike className={"_btn-icon"}>
                  <S.TrackPlayDislikeSvg alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                  </S.TrackPlayDislikeSvg>
                </S.TrackPlayDislike>
              </S.TrackPlayLikeDis>
            </S.TrackPlay>
          </S.Player>
          <S.Volume>
            <S.VolumeContent>
              <S.VolumeImg>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                </S.VolumeSvg>
              </S.VolumeImg>
              <S.VolumeProgress className={"_btn"}>
                <S.VolumeProgressLine
                  className={"_btn"}
                  type="range"
                  name="range"
                />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.Volume>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
};
