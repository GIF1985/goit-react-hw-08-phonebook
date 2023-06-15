import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 8px;
`;

export const NavStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  margin-right: 20px;
  color: #1976d2;
  transition: color 0.3s ease;

  &:hover {
    color: #01579b;
  }

  &.active {
    color: black;
  }
`;
