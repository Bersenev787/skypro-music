import * as S from "./CategoryItem.styles";

export default function CategoryItem({ items }) {
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
}
