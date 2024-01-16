import styled from "styled-components";
import { InputHTMLAttributes } from "react";

export default function InputBox({
  error,
  ...rest
}: Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "type"> & {
  error: string;
}) {
  return (
    <div>
      <SignupInput {...rest} />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}
const SignupInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  padding-right: 100px;
  font-size: 16px;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;
