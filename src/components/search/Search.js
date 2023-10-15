import * as S from "./Search.styled";

export default function Search() {
  return (
    <S.Search>
      <S.SearchSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </S.SearchSvg>
      <S.SearchText type="search" placeholder="Поиск" name="search" />
    </S.Search>
  );
}
