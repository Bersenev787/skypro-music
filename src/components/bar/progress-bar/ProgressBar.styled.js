import styled from "styled-components";

export const ProgressBar = styled.div`
  text-align: right;
`;

export const ProgressTimer = styled.span`
  display: block;
  margin-right: 10px;
  color: #696969;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.13;
  letter-spacing: 0.016px;
`;

export const ProgressInput = styled.input`
  --progress-height: 5px;
  --progress-color: #b672ff;
  --progress-color: ${(props) => props.$color ?? "#b672ff"};

  --progress-bg-color: #2e2e2e;

  margin: 0;
  width: 100%;
  height: var(--progress-height);
  -webkit-appearance: none;
  cursor: pointer;
  background: transparent;
  position: relative;
  overflow: hidden;

  &::-webkit-slider-runnable-track {
    position: relative;
    height: var(--progress-height);
    background: var(--progress-bg-color);
  }

  &::-webkit-slider-thumb {
    --thumb-height: 1px;
    --thumb-width: 1px;
    position: relative;
    -webkit-appearance: none;
    width: var(--thumb-width, var(--thumb-height));
    box-shadow: calc(
        -${(props) => props.$duration}vmax - var(--thumb-width, var(--thumb-height))
      )
      0 0 ${(props) => props.$duration}vmax var(--progress-color);
  }

  &::-webkit-slider-runnable-track {
    background: var(--progress-bg-color);
  }
`;
