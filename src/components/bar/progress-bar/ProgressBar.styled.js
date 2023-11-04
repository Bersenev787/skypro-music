import styled from "styled-components";

export const ProgressBar = styled.input`
  width: 100%;
  height: 5px;
  cursor: pointer;

  -webkit-appearance: none;
  background-color: #2e2e2e;

  &::-webkit-slider-runnable-track {
    height: 2px;
    // -webkit-appearance: none;
    color: #13bba4;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: -5px;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    border: 2px solid #fff;

    background: #1a1a1a;
    background: #434343;
  }
`;
