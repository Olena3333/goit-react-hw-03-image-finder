import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitle, StyledInput } from './Filter.style';
export const Filter = ({ filter, onFilterChange }) => {
  return (
    <div>
      <StyledTitle>Find contact by name</StyledTitle>
      <StyledInput
        onChange={onFilterChange}
        value={filter}
        placeholder="Enter filter value"
        name="filter"
      ></StyledInput>
    </div>
  );
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
