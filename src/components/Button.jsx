import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';
export const Button = ({ loading, onClick }) => {
  return (
    <LoadmoreBtn onClick={onClick}>
      {!loading ? 'Load more' : 'Loading...'}
    </LoadmoreBtn>
  );
};

Button.propTypes = {
  loading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const LoadmoreBtn = styled.button`
  display: block;
  color: white;
  margin: 0 auto;
  padding: 10px 12px;
  border-radius: 4px;
  border: none;
  font-size: 20px;
  box-shadow: 0px 2px 6px 2px gray;
  background-color: #3fb54cc9;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: #091ec2;
    color: white;
  }
  &:disabled {
    background-color: #d7dcff;
  }
`;
