import styled from "styled-components";
import { InputChange, formDataProps } from "../../interfaces";
import { InputPassword, InputBox } from "../Input";
import { Button, CancelButton } from "../buttons";
import { useState } from "react";
import { handleSignUpSubmit } from "../functions/signUpSubmit";
import { emailRegex, errorToast } from "../../utils";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<formDataProps>({
    username: "",
    password: "",
    conformPassword: "",
  });

  const [error, setError] = useState<string>("");
  const checkEmail = (e: InputChange) => {
    const enteredEmail = e.target.value;
    setFormData({ ...formData, username: enteredEmail });
    if (emailRegex.test(enteredEmail) === false)
      setError("Please enter a valid email address");
    else setError("");
    if (enteredEmail == "") setError("");
  };
  const toggleSignup = () => {
    navigate("/");
  };
  const SignUpSubmit = async () => {
    try {
      await handleSignUpSubmit({ formData, setFormData, error });
    } catch (error: any) {
      errorToast(error);
    }
  };
  return (
    <Wrapper>
      <SignupContainer>
        <h2>Sign Up</h2>
        <SignupForm>
          <InputBox
            error={error}
            value={formData.username}
            onChange={checkEmail}
            placeholder="Username"
          />
          <InputPassword
            value={formData.password}
            placeholder={"Password"}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
          <InputPassword
            value={formData.conformPassword}
            placeholder={"Conform Password"}
            onChange={(e) => {
              setFormData({ ...formData, conformPassword: e.target.value });
            }}
          />
          <Button submit={() => SignUpSubmit()} buttonName="Sign Up" />
          <CancelButton
            onClick={() =>
              setFormData({ username: "", password: "", conformPassword: "" })
            }
          />
          <BackToLoginButton onClick={toggleSignup}>Go back to Login</BackToLoginButton>
        </SignupForm>
      </SignupContainer>
    </Wrapper>
  );
}
const BackToLoginButton = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: #007bff;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8%;
`;
const SignupContainer = styled.div`
  max-width: 310px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 50px;
`;

const SignupForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Signup;
