import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const ErrorBox = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(255, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h1`
  color: #dc3545;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 18px;
  line-height: 1.6em;
  color: #666;
`;

const VerificationFailed: React.FC = () => {
  return (
    <StyledContainer>
      <ErrorBox>
        <Title>Email Verification Failed</Title>
        <Message>
          Oops! Something went wrong during the email verification process. Please try again or contact support.
        </Message>
      </ErrorBox>
    </StyledContainer>
  );
};

export default VerificationFailed;
