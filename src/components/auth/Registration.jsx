import { NavLink } from "react-router-dom";
import * as S from "./Auth.styles";
import { BaseButton } from "../base/button/Button";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate("/login", { replace: true });
  };

  const submitForm = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "123");
  };

  return (
    <S.ModalForm>
      <S.ModaLogo src="../img/logo_modal.png" alt="logo" />

      <S.ModaInput type="text" name="login" placeholder="Почта" />
      <S.ModaInput type="password" name="password" placeholder="Пароль" />
      <S.ModaInput
        type="password"
        name="password"
        placeholder="Повторите пароль"
      />
      <BaseButton onClick={submitForm} defaultButton={false}>
        Зарегистрироваться
      </BaseButton>
      <BaseButton onClick={handleBackButtonClick} defaultButton={true}>
        Войти
      </BaseButton>
    </S.ModalForm>
  );
};
