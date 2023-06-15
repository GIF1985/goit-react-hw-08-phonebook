import Button from '@mui/material/Button';
import { useState } from 'react';
import { ContainerForm, ContaierField, FieldItem } from './Form.styled';

export function Form({ onData }) {
  const initialState = {
    name: '',
    number: '',
  };

  const [state, setState] = useState({ ...initialState });
  const { name, number } = state;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onData({ ...state });
    setState({ ...initialState });
  };

  return (
    <ContainerForm onSubmit={handleSubmit}>
      <ContaierField>
        Name
        <FieldItem
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]{2,}$"
          title="Name must contain at least 2 letters"
          required
          placeholder="Enter name"
          onChange={handleChange}
          aria-label="Enter name"
          autocomplete="off"
        />
      </ContaierField>
      <ContaierField>
        Phone number
        <FieldItem
          type="text"
          name="number"
          value={number}
          pattern="[0-9]*"
          title="Phone number must contain only digits"
          required
          placeholder="Enter number"
          onChange={handleChange}
          aria-label="Enter phone number"
          autocomplete="off"
        />
      </ContaierField>
      <Button
        variant="contained"
        size="small"
        type="submit"
        disabled={!name || !number}
      >
        Add contact
      </Button>
    </ContainerForm>
  );
}
