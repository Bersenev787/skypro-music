import * as S from "./Button.styles";

export const BaseButton = ({ onClick, defaultButton, children }) => {
  return (
    <S.BaseButton onClick={onClick} $defaultButton={defaultButton}>
      {children}
    </S.BaseButton>
  );
};
