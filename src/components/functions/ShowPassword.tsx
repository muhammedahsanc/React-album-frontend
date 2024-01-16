import styled from "styled-components";

interface ShowPasswordProps {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

function ShowPassword({ showPassword, setShowPassword }: ShowPasswordProps) {
  return (
    <Checkbox
      type="checkbox"
      id="showPassword"
      checked={showPassword}
      onChange={() => {
        setShowPassword(!showPassword);
      }}
    />
  );
}

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  top: 35%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export default ShowPassword;
