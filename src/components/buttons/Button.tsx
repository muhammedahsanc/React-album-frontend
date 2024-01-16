import styled from "styled-components";

function Button({submit,buttonName}:{submit:()=>void,buttonName:String}) {
  return (
    <div>
          <SignupButton onClick={submit}>{buttonName}</SignupButton>
    </div>
  )
}
const SignupButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  padding-rignt: 10px;
  float:right;
  width:100%;
  
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;
export default Button