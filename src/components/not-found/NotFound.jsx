import { BaseButton } from "../base/button/Button";
import * as S from "./NotFound.styles";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <S.Wrapper>
      <S.Title>404</S.Title>
      <S.SubTitle>
        Страница не найдена <img src="img/crying.png" alt="crying smile"></img>
      </S.SubTitle>
      <S.Text>Возможно, она была удалена или перенесена на другой адрес</S.Text>
      <BaseButton onClick={handleBackButtonClick} defaultButton={false}>
        Вернуться на главную
      </BaseButton>
    </S.Wrapper>
  );
};
