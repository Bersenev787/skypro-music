import { SkeletonTrackplay } from "../skeletons/SkeletonTrackPlay/SkeletonTrackPlay";
import { useEffect, useRef, useState } from "react";
import * as S from "./Bar.styles";
import { getTrack } from "../../api/api.playlist";
import ProgressBar from "./progress-bar/ProgressBar";

export const Bar = ({ trackId }) => {
  const [trackIsLoading, setTrackIsLoading] = useState(false);
  const [track, setTrack] = useState(null);
  const [addError, setAddError] = useState(null);
  const [isPlay, setIsPlay] = useState(true);
  const [isLoop, setIsLoop] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    getTrack(trackId)
      .then((track) => setTrack(track))
      .catch((error) => {
        setAddError(error.message);
      })
      .finally(() => setTrackIsLoading(false));
  }, [trackId]);

  const handlePlay = () => {
    setIsPlay((isPlay) => !isPlay);

    isPlay ? audioRef.current.pause() : audioRef.current.play();
  };

  const handleLoop = () => {
    setIsLoop((isLoop) => !isLoop);
  };

  const [volume, setVolume] = useState(10);
  const changeVolume = (e) => {
    setVolume(e.target.value);

    if (isMuted) {
      handleMuted();
    }
  };

  const handleMuted = () => {
    setIsMuted((isMuted) => !isMuted);
  };

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  useEffect(() => {
    if (audioRef) {
      audioRef.current.muted = isMuted;
      audioRef.current.volume = volume / 100;
    }
  }, [isMuted, volume]);

  useEffect(() => {
    if (isPlay) {
      audioRef.current.addEventListener("loadedmetadata", () => {
        const duration = audioRef.current.duration;
        const currentTime = audioRef.current.currentTime;

        setDuration(duration);
        setCurrentTime(currentTime);

        const interval = setInterval(() => {
          setCurrentTime(Math.floor(audioRef.current.currentTime));
        }, 1000);

        setTimeout(() => {
          clearInterval(interval);
        }, audioRef.current.duration * 1000);
      });
    }
  }, [currentTime, duration, isPlay]);

  const handleTimeProgress = (event) => {
    setCurrentTime(event.target.value);
    audioRef.current.currentTime = event.target.value;
  };

  return (
    <S.Bar className={trackId && track?.id ? "active" : ""}>
      <audio
        ref={audioRef}
        src={track?.track_file}
        autoPlay
        controls
        loop={isLoop}
      ></audio>
      <S.BarContent>
        <span className="time current">{formatTime(currentTime)}</span>
        <span className="time">{formatTime(duration)}</span>

        <ProgressBar
          duration={duration}
          handleTimeProgress={handleTimeProgress}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
        />
        <S.BarPlayerBlock>
          <S.Player>
            <S.PlayerControls>
              <S.PlayerBtnPrev>
                <S.PlayerBtnPrevSvg alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay onClick={handlePlay} className={"_btn"}>
                <S.PlayerBtnPlaySvg alt="play">
                  <use
                    xlinkHref={`img/icon/sprite.svg#icon-${
                      isPlay ? "pause" : "play"
                    }`}
                  ></use>
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtnPlay>
              <S.PlayerBtnNext>
                <S.PlayerBtnNextSvg alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>
              <S.PlayerBtnRepeat
                onClick={handleLoop}
                className={("_btn-icon", isLoop ? "active" : "")}
              >
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
              <S.VolumeImg onClick={handleMuted}>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                </S.VolumeSvg>
              </S.VolumeImg>
              <S.VolumeProgress className={"_btn"}>
                <S.VolumeProgressLine
                  onChange={changeVolume}
                  className={("_btn", isMuted ? "muted" : "")}
                  type="range"
                  name="range"
                  min={0}
                  max={100}
                  value={volume}
                  style={{
                    background: `${
                      isMuted
                        ? "#797979"
                        : `linear-gradient(to right, #fff ${volume}%, #797979 ${volume}%)`
                    }`,
                  }}
                />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.Volume>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
};
