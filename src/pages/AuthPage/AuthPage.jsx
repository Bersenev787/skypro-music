import { Link, useNavigate } from "react-router-dom";
import * as S from "./AuthPage.styles";
import { useEffect, useState } from "react";

import {
  useUserLoginMutation,
  useUserTokenMutation,
  useUserRegisterMutation,
} from "../../services/user.api";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/user";

export const AuthPage = ({ isLoginMode = false }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userLogin, {}] = useUserLoginMutation();
  const [userToken, {}] = useUserTokenMutation();
  const [userRegister, { isSuccess }] = useUserRegisterMutation();

  const setUserLocaleStorage = (user) => {
    localStorage.setItem("user_id", user.data.id);
    localStorage.setItem("user_name", user.data.username);
  };

  const handleLogin = async () => {
    setIsLoading(true);
    await userToken({ email, password })
      .unwrap()
      .then((token) => {
        localStorage.setItem("token", token.refresh);

        userLogin({ email, password }).then((user) => {
          setUserLocaleStorage(user);

          dispatch(
            setUser({
              email: user.data.email,
              id: user.data.id,
              token: token.access,
              userName: user.data.username,
              isLogin: true,
            })
          );
          navigate("/");
        });
      })
      .catch((error) => {
        throw new Error(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const handleRegister = async () => {
    setIsLoading(true);
    await userRegister({ username, email, password })
      .then((user) => {
        setUserLocaleStorage(user);

        dispatch(
          setUser({
            email: user.data.email,
            id: user.data.id,
            userName: user.data.username,
            isLogin: true,
          })
        );
        userToken({ email, password })
          .unwrap()
          .then((token) => {
            localStorage.setItem("token", token.refresh);
            navigate("/");
          });
      })
      .catch((error) => {
        throw new Error(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess]);

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
