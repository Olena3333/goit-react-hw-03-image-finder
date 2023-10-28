import React, { Component } from 'react';
import {
  SearchbarWrapper,
  SearchForm,
  StyledButton,
  SearchFormInput,
} from './ImageGallery.Styled';
export class Searchbar extends Component {
  state = {
    searchValue: '',
  };
  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.searchValue) {
      return;
    }
    this.props.setQuery(this.state.searchValue);
    this.setState({ searchValue: '' });
  };
  handleOnChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    return (
      <SearchbarWrapper>
        <SearchForm onSubmit={this.handleSubmit} className="form">
          <SearchFormInput
            onChange={this.handleOnChange}
            value={this.state.searchValue}
            type="search"
            autoComplete="off"
            autoFocus
            placeholder="What are you looking for?"
          />
          <StyledButton
            disabled={!this.state.searchValue}
            type="submit"
            className="button"
          >
            Search
          </StyledButton>
        </SearchForm>
      </SearchbarWrapper>
    );
  }
}
