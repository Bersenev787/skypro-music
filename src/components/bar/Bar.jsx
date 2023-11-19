import { SkeletonTrackplay } from "../skeletons/SkeletonTrackPlay/SkeletonTrackPlay";
import { useEffect, useRef, useState } from "react";
import * as S from "./Bar.styles";
import { getTrack } from "../../api/api.playlist";
import ProgressBar from "./progress-bar/ProgressBar";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsPlayTrack,
  setTrack,
  setIsShuffle,
  setShuffledTracks,
  setTrackId,
} from "../../store/slices/playList";

export const Bar = () => {
  const [trackIsLoading, setTrackIsLoading] = useState(false);
  const [addError, setAddError] = useState(null);
  const [isLoop, setIsLoop] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const audioRef = useRef(null);
  const isPlayingTracks = useSelector((state) => state.track.isPlayTrack);
  const trackId = useSelector((state) => state.track.trackId);
  const track = useSelector((state) => state.track.track);
  const tracksList = useSelector((state) => state.track.tracksList);
  const isShuffle = useSelector((state) => state.track.isShuffle);
  const shuffledTrack = useSelector((state) => state.track.shuffledTrack);
  const dispatch = useDispatch();

  useEffect(() => {
    getTrack(trackId)
      .then((track) => dispatch(setTrack(track)))
      .catch((error) => {
        setAddError(error.message);
      })
      .finally(() => setTrackIsLoading(false));
  }, [trackId]);

  const playTrack = () => {
    dispatch(setIsPlayTrack(true));
    audioRef.current.play();
  };

  const pauseTrack = () => {
    dispatch(setIsPlayTrack(false));
    audioRef.current.pause();
  };

  const handlePlay = () => {
    if (isPlayingTracks) {
      pauseTrack();
      return;
    }

    playTrack();
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

  useEffect(() => {
    if (audioRef) {
      audioRef.current.muted = isMuted;
      audioRef.current.volume = volume / 100;
    }
  }, [isMuted, volume]);

  useEffect(() => {
    if (isPlayingTracks) {
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
  }, [currentTime, duration, isPlayingTracks]);

  const handleTimeProgress = (event) => {
    setCurrentTime(event.target.value);
    audioRef.current.currentTime = event.target.value;
  };

  const handleNextPrevTracks = (event, switchTrack) => {
    const tracks = isShuffle ? shuffledTrack : tracksList;
    let currentTrackIndex = tracks.findIndex((track) => track.id === trackId);

    if (
      (currentTrackIndex === tracksList.length - 1 && switchTrack === "next") ||
      (currentTrackIndex === 0 && switchTrack === "prev")
    ) {
      return;
    }

    const prevOrNextTrackId =
      tracks[
        switchTrack === "next" ? currentTrackIndex + 1 : currentTrackIndex - 1
      ].id;

    dispatch(setTrackId(prevOrNextTrackId));
    playTrack();
  };

  const handleShuffle = () => {
    if (isShuffle) {
      dispatch(setIsShuffle(false));
      setShuffledTracks({});
      return;
    }

    dispatch(setIsShuffle(true));
    const shuffleTracks = Object.values(tracksList).sort(function () {
      return Math.round(Math.random()) - 0.5;
    });

    dispatch(setShuffledTracks(shuffleTracks));
  };

  return (
    <S.Bar className={trackId && track?.id ? "active" : ""}>
      <audio
        ref={audioRef}
        src={track?.track_file}
        autoPlay
        loop={isLoop}
      ></audio>
      <S.BarContent>
        <ProgressBar
          duration={duration}
          handleTimeProgress={handleTimeProgress}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
        />
        <S.BarPlayerBlock>
          <S.Player>
            <S.PlayerControls>
              <S.PlayerBtnPrev
                onClick={(event) => handleNextPrevTracks(event, "prev")}
              >
                <S.PlayerBtnPrevSvg alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay onClick={handlePlay} className={"_btn"}>
                <S.PlayerBtnPlaySvg alt="play">
                  <use
                    xlinkHref={`img/icon/sprite.svg#icon-${
                      isPlayingTracks ? "pause" : "play"
                    }`}
                  ></use>
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtnPlay>
              <S.PlayerBtnNext
                onClick={(event) => handleNextPrevTracks(event, "next")}
              >
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
              <S.PlayerBtnShuffle
                onClick={handleShuffle}
                className={"_btn-icon"}
              >
                <S.PlayerBtnShuffleSvg
                  alt="shuffle"
                  className={isShuffle ? "active" : ""}
                >
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
