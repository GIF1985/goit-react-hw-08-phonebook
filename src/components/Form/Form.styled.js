import styled from 'styled-components';

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
`;

export const ContaierField = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

export const FieldItem = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 12px;
  border: 1px solid #c2c2c2;
  border-radius: 8px;
  font-size: 16px;
  line-height: 22px;
  color: #333;
  background-color: #f5f5f7;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #1a73e8;
    box-shadow: 0 0 0 2px rgba(26, 115, 232, 0.2);
  }

  &::placeholder {
    color: #a7a7a7;
  }

  &:disabled {
    opacity: 0.5;
  }
`;
