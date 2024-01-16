import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import instance from "../../config/axiosinstance";
import VerificationFailed from "./Failed";
import  SpinnerPage  from "./Pending";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const SuccessBox = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h1`
  color: #28a745;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 18px;
  line-height: 1.6em;
  color: #666;
`;

const MailVerified: React.FC = () => {

  const  location  = useLocation();
  const searchParams = new URLSearchParams(location.search)
  const mail = searchParams.get("email");
  
  const [status, setStatus] = useState<string>("pending");

  useEffect(() => {
    const validate = async () => {
      try {
        await instance.get(`/addGmailVerification/gmailChangeStatus/${mail}`);
        setStatus("success");
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
    };
    validate();
  }, []);

  return status == "success" ? (
    <StyledContainer>
      <SuccessBox>
        <Title>Email Verification Successful</Title>
        <Message>
          Congratulations! Your email has been successfully verified. You can
          now access your account.
        </Message>
      </SuccessBox>
    </StyledContainer>
  ) : status == "error" ? (
    <VerificationFailed />
  ) : (
    <SpinnerPage/>
  );
};

export default MailVerified;
