import * as S from "./PlaylistTitle.styles";

export default function PlaylistTitle() {
  return (
    <S.PlaylistTitle>
      <S.PlaylistTitleCol className={"col01"}>Трек</S.PlaylistTitleCol>
      <S.PlaylistTitleCol className={"col02"}>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol>
      <S.PlaylistTitleCol className={"col03"}>АЛЬБОМ</S.PlaylistTitleCol>
      <S.PlaylistTitleCol className={"col04"}>
        <S.PlaylistTitleSvg alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
        </S.PlaylistTitleSvg>
      </S.PlaylistTitleCol>
    </S.PlaylistTitle>
  );
}
