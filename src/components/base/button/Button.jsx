import * as S from "./Button.styles";

export const BaseButton = ({ onClick, defaultButton, children }) => {
  console.log(defaultButton);
  return (
    <S.BaseButton onClick={onClick} $defaultButton>
      {children}
    </S.BaseButton>
  );
};
