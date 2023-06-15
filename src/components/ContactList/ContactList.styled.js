import styled from 'styled-components';

export const ContactContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ContactEl = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid #d1d1d6;

  &:last-child {
    border-bottom: none;
  }

  & > span {
    font-size: 18px;
    font-weight: 500;
    margin-right: 10px;
    color: #1d1d1f;
  }

  & > button {
    margin-left: auto;
    background-color: transparent;
    border: none;
    color: #007aff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    &:focus {
      outline: none;
      text-decoration: underline;
    }
  }
`;
