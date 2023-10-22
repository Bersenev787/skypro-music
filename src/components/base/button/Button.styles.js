import styled from "styled-components";

// const ButtonMixin = css`
//   background-color: transparent;
//   border: 1px solid #d0cece;
//   color: #000000;
// `;

export const BaseButton = styled.button`
  background: ${(props) => (props.$defaultButton ? "transparent" : "#580ea2")};
  color: ${(props) => (props.$defaultButton ? "#000" : "#fff")};
  border: ${(props) =>
    props.$defaultButton ? "1px solid #D0CECE" : "1px solid #580ea2"};

  width: 278px;
  height: 52px;
  border-radius: 6px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.054px;
  outline: none;

  &:hover {
    background: #3f007d;
    color: #fff;
    border: 1px solid #580ea2;
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
