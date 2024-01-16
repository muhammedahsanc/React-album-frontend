import styled from "styled-components";
import { InputHTMLAttributes, useState } from "react";
import ShowPassword from "../functions/ShowPassword";

function InputPassword({
  ...rest
}: Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "type">) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <Container>
      <SignupInput
        type={showPassword ? "text" : "password"}
        placeholder={rest.placeholder}
        {...rest}
        autoComplete="new-password"
      />
    <ShowPassword showPassword={showPassword} setShowPassword={setShowPassword}/>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const SignupInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  padding-right: 100px;
  font-size: 16px;
`;




export default InputPassword;
// import styled from "styled-components";
// import { InputHTMLAttributes, useState } from "react";
// function InputPassword({
//   ...rest
// }: Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "type">) {
//   const [state, setstate] = useState<boolean>(false);
//   return (
//     <>
//       <button
//         onClick={() => {
//           setstate(!state);
//         }}
//       >
//         {state ? "hide" : "show"}
//       </button>
//       <SignupInput type={state ? "text" : "password"} {...rest} />
//     </>
//   );
// }
// const SignupInput = styled.input`
//   margin-bottom: 10px;
//   padding: 10px;
//   padding-right: 100px;
//   font-size: 16px;
// `;

// export default InputPassword;
