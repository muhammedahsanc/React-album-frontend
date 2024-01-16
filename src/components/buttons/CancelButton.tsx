import styled from "styled-components";
import { ButtonHTMLAttributes } from "react";

function CancelButton({ ...rest }: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">) {
    return (
      <div>
        <CancelButtons {...rest}>Cancel</CancelButtons>
      </div>
    );
  }
  
const CancelButtons = styled.button`
  background-color: orange;
  color: #fff;
  padding: 10px;
  padding-rignt: 10px;
  float:right;
  width:100%;
  margin-top:10px;

  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;
export default CancelButton