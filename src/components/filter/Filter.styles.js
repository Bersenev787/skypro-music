import styled, { css } from "styled-components";

export const Filter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
`;

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;

export const FilterAction = styled.div`
  position: relative;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const FilterButtonMixin = css`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;

  &_active {
    color: #b672ff;
    border: 1px solid #9a48f1;
  }
`;

export const FilterButtonAuthor = styled.div`
  ${FilterButtonMixin}
`;

export const FilterButtonYear = styled.div`
  ${FilterButtonMixin}
`;

export const FilterButtonGenre = styled.div`
  ${FilterButtonMixin}
`;
