import { Link, useNavigate } from "react-router-dom";
import * as S from "./AuthPage.styles";
import { useEffect, useState } from "react";

import {
  useUserLoginMutation,
  useUserAccessTokenMutation,
  useUserRegisterMutation,
} from "../../services/user.api";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/user";

export const AuthPage = ({ isLoginMode = false, setUserData }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [userLogin, { isSuccessLogin }] = useUserLoginMutation();
  const [userAccessToken] = useUserAccessTokenMutation();
  const [userRegister, { isSuccessRegister }] = useUserRegisterMutation();
  const navigate = useNavigate();

  const setUserLocaleStorage = (user) => {
    localStorage.setItem("user_id", user.data.id);
    localStorage.setItem("user_name", user.data.username);
  };

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const accessToken = await userAccessToken({ email, password }).unwrap();
      const user = await userLogin({ email, password });
      setUserData(accessToken);

      setUserLocaleStorage(user);
      localStorage.setItem("access", accessToken.access);
      localStorage.setItem("refresh", accessToken.refresh);

      dispatch(
        setUser({
          email: user.data.email,
          id: user.data.id,
          access: accessToken.access,
          refresh: accessToken.refresh,
          userName: user.data.username,
          isLogin: true,
        })
      );

      navigate("/", { replace: true });
    } catch (error) {
      console.error(error.data);
      setError(error.data);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async () => {
    setIsLoading(true);

    try {
      const user = await userRegister({ username, email, password });

      setUserLocaleStorage(user);

      dispatch(
        setUser({
          email: user.data.email,
          id: user.data.id,
          userName: user.data.username,
          isLogin: true,
        })
      );

      const accessToken = await userAccessToken({ email, password }).unwrap();
      setUserData(accessToken);

      localStorage.setItem("access", accessToken.access);
      localStorage.setItem("refresh", accessToken.refresh);

      dispatch(
        setUser({
          email: user.data.email,
          id: user.data.id,
          access: accessToken.access,
          refresh: accessToken.refresh,
          userName: user.data.username,
          isLogin: true,
        })
      );

      navigate("/", { replace: true });
    } catch (error) {
      console.error("Error during registration:", error.data);
      setError(error.data);
    } finally {
      setIsLoading(false);
    }
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
