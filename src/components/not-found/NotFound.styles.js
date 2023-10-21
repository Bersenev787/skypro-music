import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 386px;
  height: 100%;
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h1`
  margin-bottom: 3px;
  font-size: 160px;
  font-style: normal;
  font-weight: 400;
  line-height: 168px;
`;

export const SubTitle = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 19px;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;

  > img {
    margin-left: 8px;
  }
`;

export const Text = styled.p`
  margin-bottom: 36px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.054px;
  color: #4e4e4e;
`;
