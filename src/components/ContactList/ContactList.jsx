import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from '../App.styled';
import { StyledList } from './ContactList.styled';
export const ContactList = ({ contacts, deletedContact }) => {
  return (
    <StyledList>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <StyledButton onClick={() => deletedContact(contact.id)}>
            Delete
          </StyledButton>
        </li>
      ))}
    </StyledList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deletedContact: PropTypes.func.isRequired,
};
