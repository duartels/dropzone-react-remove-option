import styled from 'styled-components';

export const ContainerDropzone = styled.div`
  max-width: 600px;
  min-width: 600px;
  min-height: 300px;
  height: 100%;
  background: #6b9ec7;
  border-radius: 10px;
`;

export const ThumbsContainer = styled.aside`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16px;
`;

export const Thumb = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  border: 1px solid #eaeaea;
  margin-bottom: 8px;
  margin-right: 8px;
  width: 200px;
  height: 200px;
  padding: 4px;
  box-sizing: border-box;
`;

export const ThumbInner = styled.div`
  display: flex;
  justify-content: center;
  min-width: 0px;
  overflow: hidden;
`;

export const Img = styled.img`
  display: block;
  width: auto;
  height: 100%;
`;

export const ButtonRemove = styled.button`
  border-radius: 10px;
  padding: 8px;
  border: 0;
  background-color: #c53030;
  cursor: pointer;
`;
