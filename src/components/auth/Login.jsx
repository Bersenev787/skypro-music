import { NavLink } from "react-router-dom";
import * as S from "./Auth.styles";
import { BaseButton } from "../base/button/Button";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Modal>
          <S.ModalForm action="#">
            <NavLink to="/">
              <S.ModaLogo src="../img/logo_modal.png" alt="logo" />
            </NavLink>

            <S.ModaInput type="text" name="login" placeholder="Почта" />
            <S.ModaInput type="password" name="password" placeholder="Пароль" />
            <BaseButton defaultButton={false}>Войти</BaseButton>
            <BaseButton onClick={handleBackButtonClick} defaultButton={true}>
              Зарегистрироваться
            </BaseButton>
          </S.ModalForm>
        </S.Modal>
      </S.Container>
    </S.Wrapper>
  );
};
