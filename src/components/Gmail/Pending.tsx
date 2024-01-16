import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const Spinner = styled.div`
  border: 6px solid #3498db;
  border-top: 6px solid transparent;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

const SpinnerPage: React.FC = () => {
  return (
    <StyledContainer>
      <Spinner />
    </StyledContainer>
  );
};

export default SpinnerPage;
