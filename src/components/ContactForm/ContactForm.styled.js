import styled from 'styled-components';
export const StyledInput = styled.input`
  font-size: 16px;
  margin-left: 15px;
  padding: 5px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 20px;
  max-width: 300px;
  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
  }
  button {
    display: block;
    font-size: 16px;
    max-width: 150px;
  }
`;
