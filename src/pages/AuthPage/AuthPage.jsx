import { Link, useNavigate } from "react-router-dom";
import * as S from "./AuthPage.styles";
import { useEffect, useState } from "react";
import { login, register } from "../../api/api.auth";
import { useUserContext } from "../../components/contexts/User";

export const AuthPage = ({ isLoginMode = false }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useUserContext();
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true);
    if (!email.length || !password.length) {
      setError({
        detail: "Это поле не может быть пустым.",
      });
      setIsLoading(false);
      return;
    }
    await login({ email, password })
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        setUser(JSON.parse(localStorage.getItem("user")));
        navigate("/");
        return data;
      })
      .catch((error) => {
        setError({ ...JSON.parse(error.message) });
      })
      .finally(() => setIsLoading(false));
  };

  const handleRegister = async () => {
    setIsLoading(true);
    if (!email.length || !password.length || !username.length) {
      setError({
        email: "Это поле не может быть пустым.",
        password: "Это поле не может быть пустым.",
        username: "Это поле не может быть пустым.",
      });
      setIsLoading(false);
      return;
    }
    await register({ email, password, username })
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        setUser(JSON.parse(localStorage.getItem("user")));
        navigate("/");
        return data;
      })
      .catch((error) => {
        setError({ ...JSON.parse(error.message) });
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    setError(null);
  }, [isLoginMode, username, email, password]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <div>
                <S.ModalInput
                  type="email"
                  name="login"
                  placeholder="Почта"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                {error && <S.Error>{error.detail}</S.Error>}
              </div>
              <div>
                <S.ModalInput
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                {error && <S.Error>{error.detail}</S.Error>}
              </div>
            </S.Inputs>
            <S.Buttons>
              <S.PrimaryButton
                disabled={isLoading || error}
                onClick={handleLogin}
              >
                Войти
              </S.PrimaryButton>
              <Link to="/register">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <div>
                <S.ModalInput
                  type="text"
                  name="username"
                  placeholder="Имя"
                  value={username}
                  onChange={(event) => {
                    setUserName(event.target.value);
                  }}
                />
                {error && <S.Error>{error.username}</S.Error>}
              </div>
              <div>
                <S.ModalInput
                  type="email"
                  name="login"
                  placeholder="Почта"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                {error && <S.Error>{error.email}</S.Error>}
              </div>

              <div>
                <S.ModalInput
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                {error && <S.Error>{error.password}</S.Error>}
              </div>
            </S.Inputs>
            <S.Buttons>
              <S.PrimaryButton
                disabled={isLoading || error}
                onClick={handleRegister}
              >
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
};
