import React, { useCallback, useState, ChangeEvent } from "react";
import axios from "../../config/axiosinstance";
import {
  useDropzone,
  DropzoneInputProps,
} from "react-dropzone";
import styled from "styled-components";
import { notify } from "../../utils";
import { useNavigate } from "react-router-dom";
const ImageUpload = () => {
  const navigate = useNavigate();

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    try {
      setUploadedFiles(acceptedFiles);
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const [textFieldValue, setTextFieldValue] = useState<string>("");

  const handleTextFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextFieldValue(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      uploadedFiles.forEach((item) => {
        formData.append("file", item);
      });
      formData.append("albumText", textFieldValue);
      setUploadedFiles([]);
      setTextFieldValue("");
      const data = await axios.post("/image/addImage", formData);
      notify(data.data.message);
      navigate("../albums");
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    <div>
      <Container>
        <TextField
          type="text"
          placeholder="Enter your text here"
          value={textFieldValue}
          onChange={handleTextFieldChange}
        />
      </Container>
      <div {...getRootProps()} style={dropzoneStyle}>
        <input {...(getInputProps() as DropzoneInputProps)} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p style={{ color: "gray" }}>
            Drag 'n' drop some files here, or click to select files
          </p>
        )}
        <img
          src={
            uploadedFiles.length > 0
              ? URL.createObjectURL(uploadedFiles[0])
              : ""
          }
          style={{ height: "300px" }}
          alt=""
        />
      </div>
      <CenteredDiv>
        <StyledButton onClick={handleSubmit}>Submit</StyledButton>
      </CenteredDiv>
    </div>
  );
};
const TextField = styled.input`
  width: 50%;
  padding: 10px;
  border: 2px dashed #ccc;
  margin: 10px 0;
  border-radius: 4px;
  box-sizing: border-box;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;
const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh; /* Optionally, set a height to center vertically within the viewport */
`;
const dropzoneStyle: React.CSSProperties = {
  border: "2px dashed #cccccc",
  borderRadius: "4px",
  paddingBottom: "100px fixed",
  marginLeft: "25%",
  marginRight: "25%",
  marginTop: "1%",
  textAlign: "center",
  cursor: "pointer",
};

const StyledButton = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: #45a049;
  }
`;

export default ImageUpload;
