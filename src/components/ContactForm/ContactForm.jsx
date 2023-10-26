import React from 'react';
import { nanoid } from 'nanoid';
import propTypes from 'prop-types';
import { StyledInput, StyledForm } from './ContactForm.styled';
import { StyledButton } from '../App.styled';
export class ContactForm extends React.Component {
  static propTypes = {
    onAddContact: propTypes.func.isRequired,
    // contacts: propTypes.array.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handelOnChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handelOnSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { onAddContact } = this.props;

    const newContact = {
      number: number.trim(),
      name: name.trim(),
      id: nanoid(),
    };
    if (!name.trim()) {
      return;
    }

    onAddContact(newContact);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <StyledForm onSubmit={this.handelOnSubmit}>
        <label>
          Name:
          <StyledInput
            type="text"
            placeholder="Enter the name "
            onChange={this.handelOnChange}
            value={this.state.name}
            name="name"
            required
          />
        </label>
        <label>
          Number:
          <StyledInput
            onChange={this.handelOnChange}
            value={this.state.number}
            placeholder="Enter the number"
            type="tel"
            name="number"
            required
          />
        </label>
        <StyledButton disabled={!this.state.name}>Add contact</StyledButton>
      </StyledForm>
    );
  }
}
