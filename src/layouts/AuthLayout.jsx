import * as S from "../components/auth/Auth.styles";

export const AuthLayout = ({ children }) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Modal>{children}</S.Modal>
      </S.Container>
    </S.Wrapper>
  );
};
