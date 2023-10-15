import styled from "styled-components";

export const CategoryItems = styled.div`
  position: absolute;
  left: 0;
  top: 45px;
  padding: 34px;
  width: 248px;
  min-height: 196px;
  max-height: 305px;
  border-radius: 12px;
  background: #313131;
  overflow-y: hidden;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: #4b4949;
    border-radius: 2px;
  }

  ::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 2px;
  }
`;

export const CategoryItemsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  width: 100%;
  min-height: 128px;
  max-height: 232px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const CategoryItem = styled.a`
  color: #fff;

  &:hover {
    color: #b672ff;
    text-decoration: underline;
  }
`;
