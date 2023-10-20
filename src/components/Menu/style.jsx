import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuNav = styled.nav`
  width: 100%;
  padding: 60px;
  background-color: #5598a2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuLista = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;
export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #fff;
  font-size: 36px;
  &:hover {
    transform: scale(1.1);
  }
`;

export const MenuLink = styled(Link)`
  color: #fff;
  font-size: 48px;
`;

export const MiniLogo = styled.img`
  max-width: 150px;
  position: absolute;
  left: 140px;
`;
