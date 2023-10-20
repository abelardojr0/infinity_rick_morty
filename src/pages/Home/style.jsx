import styled from "styled-components";

export const PersonargensSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const Logo = styled.img`
  max-width: 600px;
  margin: 0 auto;
`;
export const ContainerCards = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  max-width: 80vw;
  margin: 0 auto;
`;
