import styled from 'styled-components';

export const SearchbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  margin-bottom: 34px;
  padding-right: 34px;
  padding-left: 34px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 8px;
  color: #fff;
  background-color: #3fb54cc9;
  box-shadow: 0px 2px 6px 2px gray;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: transparent;
  border-radius: 8px;
  overflow: hidden;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 4px 4px;
  border-radius: 4px;
  color: #000000c9;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const StyledButton = styled.button`
  margin-left: 22px;
  padding: 4px 6px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  background-color: white;
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

export const GalleryItem = styled.li`
  list-style: none;
  margin-bottom: 10px;
  border: 1px solid gray;
  padding: 16px 16px;
  box-shadow: 0px 2px 6px 2px gray;
  background-color: #3fb54cc9;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  flex-direction: column;
  height: 300px;
  overflow: hidden;
  align-items: center;
  background-color: white;
  border-radius: 4px;
  justify-items: center;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border: 2px solid #ddd;
  border-radius: 4px;
  box-shadow: 0px 2px 6px 2px gray;
`;

export const ImageInfo = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.p`
  font-size: 12px;
  text-align: center;
  font-weight: 600;
  margin: 4px 0;
  font-weight: 500;
  font-size: calc((1vw + 1vh) * 1.2);
  margin-bottom: 0px;
  margin-top: 20px;

  padding-bottom: 2px;
`;

export const LikeButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 20px;
  background: none;
  border: none;
  gap: 20px;
  cursor: grabbing;
  font-weight: bold;
  color: white;
  padding: 6px 12px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(0.9);
  }
`;
