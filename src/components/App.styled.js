import styled from 'styled-components';

export const StyledWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  padding: 50px;
  background-color: #d9d8d84a;
  border: 2px solid black;
  box-shadow: 0px 4px 10px 4px gray;
  h1 {
    font-weight: 500px;
    font-size: 48px;
    margin-left: auto;
    margin-right: auto;
  }
  h2 {
    font-size: 38px;
  }
`;
export const StyledButton = styled.button`
  padding: 10px 22px;
  border-radius: 4px;
  border: none;
  font-size: 22px;
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
