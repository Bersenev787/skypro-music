import "./Filter.css";
import { useState } from "react";
import CategoryItem from "./category-item/CategoryItem";

export default function Filter({ className }) {
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
    <div className={`${className} filter`}>
      <div className="filter__title">Искать по:</div>
      <div className="filter__action">
        <div
          className={`${
            isCategoryItemVisible &&
            currentButton === "button-author" &&
            "filter__button_active"
          } filter__button button-author _btn-text`}
          onClick={() => handleClick("button-author")}
        >
          исполнителю
        </div>
        {isCategoryItemVisible && currentButton === "button-author" && (
          <CategoryItem items={authors} />
        )}
      </div>

      <div className="filter__action">
        <div
          className={`${
            isCategoryItemVisible &&
            currentButton === "button-year" &&
            "filter__button_active"
          } filter__button button-year _btn-text`}
          onClick={() => handleClick("button-year")}
        >
          году выпуска
        </div>
        {isCategoryItemVisible && currentButton === "button-year" && (
          <CategoryItem items={years} />
        )}
      </div>

      <div className="filter__action">
        <div
          className={`${
            isCategoryItemVisible &&
            currentButton === "button-genre" &&
            "filter__button_active"
          } filter__button  button-genre _btn-text`}
          onClick={() => handleClick("button-genre")}
        >
          жанру
          {isCategoryItemVisible && currentButton === "button-genre" && (
            <CategoryItem items={genre} />
          )}
        </div>
      </div>
    </div>
  );
}
