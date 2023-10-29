import * as S from "./CategoryItem.styles";

export const CategoryItem = ({ items }) => {
  return (
    <S.CategoryItems>
      <S.CategoryItemsBox>
        {items?.map((item) => (
          <S.CategoryItem key={item} href="/">
            {item}
          </S.CategoryItem>
        ))}
      </S.CategoryItemsBox>
    </S.CategoryItems>
  );
};
