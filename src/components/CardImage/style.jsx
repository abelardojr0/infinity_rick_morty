import styled from "styled-components";

export const CardDiv = styled.div`
  border: 1px solid black;
  background-color: #252525;
  padding: 15px;
  display: flex;
  gap: 30px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
`;

export const CardInfos = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
`;

export const TitleCard = styled.h2`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

export const ImgCard = styled.img`
  max-width: 200px;
  border-radius: 8px;
`;

export const ItemCard = styled.p`
  font-size: 18px;
  color: #ffe92d;
`;

export const SpanCard = styled.p`
  font-size: 16px;
  color: #5598a2;
  margin-top: 6px;
`;
