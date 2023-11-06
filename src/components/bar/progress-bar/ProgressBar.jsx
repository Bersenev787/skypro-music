import { useEffect, useRef } from "react";
import * as S from "./ProgressBar.styled";

export default function ProgressBar({
  duration,
  currentTime,
  handleTimeProgress,
}) {
  return (
    <S.ProgressInput
      type="range"
      min={0}
      max={duration}
      value={currentTime || 0}
      step={0.01}
      onChange={handleTimeProgress}
      $color="#b672ff"
      $duration={duration}
    />
  );
}
