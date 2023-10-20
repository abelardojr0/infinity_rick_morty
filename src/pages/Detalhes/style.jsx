import styled from "styled-components";
export const DetalhesSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  gap: 100px;
`;
export const Divisoria = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
export const DetalhesImg = styled.img`
  width: 400px;
  border-radius: 50%;
`;
export const Titulo = styled.h2`
  font-size: 48px;
  color: white;
`;
export const Subtitulo = styled.h2`
  color: white;
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: bold;
`;
export const DetalheInfosList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  font-size: 36px;
`;

export const DetalhesItemTitulo = styled.li`
  color: #f5f5f5;
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DetalhesItemTexto = styled.p`
  color: #b5b5b6;
  font-size: 22px;
  line-height: 20px;
  letter-spacing: 0.25px;
`;
