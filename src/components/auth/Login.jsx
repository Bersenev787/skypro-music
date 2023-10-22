import * as S from "./Auth.styles";
import { BaseButton } from "../base/button/Button";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate("/register", { replace: true });
  };
  const submitForm = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "123");
    navigate("/", { replace: true });
    window.location.reload();
  };

  return (
    <S.ModalForm action="#">
      <S.ModaLogo src="../img/logo_modal.png" alt="logo" />

      <S.ModaInput type="text" name="login" placeholder="Почта" />
      <S.ModaInput type="password" name="password" placeholder="Пароль" />
      <BaseButton onClick={submitForm} defaultButton={false}>
        Войти
      </BaseButton>
      <BaseButton onClick={handleBackButtonClick} defaultButton={true}>
        Зарегистрироваться
      </BaseButton>
    </S.ModalForm>
  );
};
