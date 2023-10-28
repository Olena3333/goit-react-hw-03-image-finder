import styled from 'styled-components';

export const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
export const ImageInfo = styled.div`
  text-align: center;
  padding: 20px;
  display: flex;
  overflow: hidden;

  align-items: center;
  flex-direction: row;
  justify-content: space-between;
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
  color: white;
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

export const TitleModal = styled.div`
  padding: 20px;
  text-align: center;
  height: 800px;
`;

export const ImageContainer = styled.div`
  text-align: center;
  border-radius: 6px;
  padding: 40px;
  height: 600px;
`;
export const CrossButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 50%;
  color: #3fb54cc9;
  padding: 10px;
  display: block;
  position: absolute;
  right: 4%;
  top: 4%;
`;
export const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  background-color: #2d4a31c9;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  z-index: 4;
  justify-content: space-between;
  flex-direction: column;
`;
