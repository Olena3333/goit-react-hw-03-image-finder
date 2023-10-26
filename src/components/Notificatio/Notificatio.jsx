import React from 'react';
import PropTypes from 'prop-types';

export const Notificatio = ({ message }) => {
  return <p>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
