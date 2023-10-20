import styled from "styled-components";

export const DivFilters = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
`;

export const FilterSearch = styled.input`
  padding: 10px 20px;
  background: transparent;
  border: 1px solid #bfc8cf;
  border-radius: 5px;
  color: white;
  font-size: 40px;
  outline: none;
  &::placeholder {
    color: #214953;
  }
`;
export const SelectFilter = styled.select`
  padding: 10px 20px;
  background: transparent;
  border: 1px solid #bfc8cf;
  border-radius: 5px;
  color: white;
  font-size: 40px;
  & option {
    background-color: #0f1b36;
  }
`;

export const Carregar = styled.button`
  width: 200px;
  border: none;
  border-radius: 10px;
  background-color: grey;
  padding: 10px 20px;
  color: black;
  margin: 30px auto;
  cursor: pointer;
  font-size: 25px;
`;
