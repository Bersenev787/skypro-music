import { useEffect, useState } from "react";
import * as S from "./ProgressBar.styled";

const ProgressBar = ({
  progressBarRef,
  audioRef,
  timeProgress,
  duration,
  setTimeProgress,
}) => {
  const [bgColor, setBgColor] = useState("");

  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
    changeBackground();
    setTimeProgress(audioRef.current.currentTime);
  };

  const changeBackground = () => {
    const colorGradient = `linear-gradient(to right, #fff ${
      (progressBarRef.current?.value / duration) * 100
    }%, #797979 ${(progressBarRef.current?.value / duration) * 100}%)`;
    setBgColor(colorGradient);
  };

  return (
    <S.ProgressBar
      type="range"
      ref={progressBarRef}
      min={0}
      max={duration}
      onChange={handleProgressChange}
      style={{ background: bgColor }}
    />
  );
};

export default ProgressBar;
