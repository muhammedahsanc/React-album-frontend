import styled from "styled-components";
import { DecodedToken, InputChange, loginDataProps } from "../../interfaces";
import { InputPassword, InputBox } from "../Input";
import { Button, CancelButton } from "../buttons";
import { useState } from "react";
import { loginSubmit } from "../functions/loginSubmit";
import { emailRegex } from "../../utils";
import { useDispatch } from "react-redux";
import { addToList } from "../../redux/data";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import googleSubmit from "../functions/googleSubmit";

function Login() {
  const navigate = useNavigate();

  // const {userList} = useSelector((state:any)=>state.userData)
  // console.log(userList);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<loginDataProps>({
    username: "",
    password: "",
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
  function submitLoginData() {
    const loginName = loginSubmit({ formData, setFormData, error });
    const promise1 = Promise.resolve(loginName);
    promise1.then((value) => {
      dispatch(addToList({ data: value.data, role: value.role }));
      navigate(`/${value.role.toLowerCase()}`);
    });
  }
  const toggleSignup = () => {
    navigate('/signup')
  };
  return (
    <Wrapper>
      <SignupContainer>
        <h2>Login</h2>
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
          <Button submit={() => submitLoginData()} buttonName="Login" />
          <CancelButton
            onClick={() => setFormData({ username: "", password: "" })}
          />
        </SignupForm>
        <GoogleDiv>
        <GoogleLogin 
  onSuccess={(credentialResponse:any) => {
    const decoded:DecodedToken = jwtDecode(credentialResponse.credential);
    const googlefun =  googleSubmit(decoded.email);
    const promise1 = Promise.resolve(googlefun);
    promise1.then((value) => {
      dispatch(addToList({ data: value?.data.mail, role: value?.data.role }));
      // navigate(`/${value.role.toLowerCase()}`);
    console.log(value?.data.mail);
  });
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
</GoogleDiv>
<SignupText onClick={toggleSignup}>Signup</SignupText>

      </SignupContainer>
  
    </Wrapper>
  );
}

const GoogleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

  /* Add more styling as needed */
  /* Example styles */
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 3px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f0f0f0;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const SignupText = styled.span`
  color: BLACK;
  cursor: pointer;
  text-align: right;
  &:hover {
    text-decoration: underline;
  }
  float:right
`;
const SignupContainer = styled.div`
  max-width: 310px;
  margin: 0 auto;
  padding: 50px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SignupForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Login;
