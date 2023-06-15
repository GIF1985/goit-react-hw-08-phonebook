import * as React from 'react';
import { Button as MuiButton } from '@mui/material';
import PropTypes from 'prop-types';
import {
  ContactContainer as Container,
  ContactEl as Item,
} from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  const handleDeleteClick = id => {
    onDeleteContact(id);
  };

  const handleDeleteKeyPress = (event, id) => {
    if (event.key === 'Enter') {
      onDeleteContact(id);
    }
  };

  return (
    <Container>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <React.Fragment>
            <span>{name}: </span>
            <span>{number}</span>
          </React.Fragment>
          <MuiButton
            variant="contained"
            size="small"
            type="button"
            onClick={() => handleDeleteClick(id)}
            onKeyPress={event => handleDeleteKeyPress(event, id)}
            aria-label="Delete"
          >
            Delete
          </MuiButton>
        </Item>
      ))}
    </Container>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
