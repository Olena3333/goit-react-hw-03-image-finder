import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem';

import styled from 'styled-components';

export const ImageGallery = ({ photos = [], toggleModal }) => {
  return (
    <StyledList>
      {photos.map(item => (
        <ImageGalleryItem
          key={item.id}
          {...item}
          toggleModal={() => toggleModal(item)}
        />
      ))}
    </StyledList>
  );
};

const StyledList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
  margin-bottom: 20px;
`;
ImageGallery.propTypes = {
  photos: PropTypes.array.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
