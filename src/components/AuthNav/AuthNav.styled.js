import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  margin-right: 20px;
  color: #1d1d1f;
  padding-bottom: 5px;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #007aff;
    border-bottom-color: #007aff;
  }

  &.active {
    color: #007aff;
    border-bottom-color: #007aff;
  }
`;
