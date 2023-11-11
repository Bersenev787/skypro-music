import * as S from "./ProgressBar.styled";

export default function ProgressBar({
  duration,
  currentTime,
  handleTimeProgress,
}) {
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

  return (
    <S.ProgressBar>
      <S.ProgressTimer>
        {formatTime(currentTime)} / {formatTime(duration)}
      </S.ProgressTimer>

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
    </S.ProgressBar>
  );
}
