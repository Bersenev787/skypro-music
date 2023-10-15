import { useState } from "react";
import * as S from "./Filter.styles";
import { CategoryItem } from "./category-item/CategoryItem";

export const Filter = () => {
  const [isCategoryItemVisible, setCategoryItemVisible] = useState(false);
  const [currentButton, setCurrentButton] = useState(null);

  const authors = [
    "Guilt",
    "Elektro",
    "I’m Fire",
    "Run Run",
    "Eyes on Fire",
    "Mucho Bien",
    "Knives n Cherries1",
    "Knives n Cherries2",
    "Knives n Cherries3",
  ];
  const years = ["1993", "1994", "1995", "1996"];
  const genre = ["Rock", "Pop", "Country"];

  const handleClick = (buttonName) => {
    setCategoryItemVisible(!isCategoryItemVisible);
    setCurrentButton(buttonName);
  };

  return (
    <S.Filter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.FilterAction>
        <S.FilterButtonAuthor
          className={`${
            isCategoryItemVisible &&
            currentButton === "button-author" &&
            "filter__button_active"
          } _btn-text`}
          onClick={() => handleClick("button-author")}
        >
          исполнителю
        </S.FilterButtonAuthor>
        {isCategoryItemVisible && currentButton === "button-author" && (
          <CategoryItem items={authors} />
        )}
      </S.FilterAction>

      <S.FilterAction>
        <S.FilterButtonYear
          className={`${
            isCategoryItemVisible &&
            currentButton === "button-year" &&
            "filter__button_active"
          } _btn-text`}
          onClick={() => handleClick("button-year")}
        >
          году выпуска
        </S.FilterButtonYear>
        {isCategoryItemVisible && currentButton === "button-year" && (
          <CategoryItem items={years} />
        )}
      </S.FilterAction>

      <S.FilterAction>
        <S.FilterButtonGenre
          className={`${
            isCategoryItemVisible &&
            currentButton === "button-genre" &&
            "filter__button_active"
          } _btn-text`}
          onClick={() => handleClick("button-genre")}
        >
          жанру
          {isCategoryItemVisible && currentButton === "button-genre" && (
            <CategoryItem items={genre} />
          )}
        </S.FilterButtonGenre>
      </S.FilterAction>
    </S.Filter>
  );
};
