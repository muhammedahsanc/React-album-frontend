import React, { useCallback, useState,ChangeEvent  } from 'react';
import axios from "../../config/axiosinstance";
import { useDropzone, DropzoneRootProps, DropzoneInputProps } from 'react-dropzone';
import styled from 'styled-components';
import { notify } from '../../utils';
import { useNavigate, useParams } from 'react-router-dom';

const GAlleryUpload = () => {
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
    const { id } = useParams();

  const handleSubmit = async () => {
    try {
      if(id){
      const formData = new FormData()
      uploadedFiles.forEach((item)=>{
        formData.append('file',item)
      })
      formData.append('AlbumId', id);
      setUploadedFiles([]);
      const data = await axios.post("/gallery/addGallery", formData);
      navigate(`../showGallery/${id}`)
      notify(data.data.message)



      console.log(data);
    } else {
      console.error("Error: 'id' is undefined.");
    }
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    <div>
      <div {...getRootProps()} style={dropzoneStyle}>
        <input {...getInputProps() as DropzoneInputProps} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p style={{ color:"gray" }}>Drag 'n' drop some files here, or click to select files</p>
        )}
      <img src={uploadedFiles.length > 0 ? URL.createObjectURL(uploadedFiles[0]) : ''} style={{ height: "300px" }} alt="" />

      </div>
      <CenteredDiv >
      <StyledButton onClick={handleSubmit}>Submit</StyledButton>
      </CenteredDiv>
    </div>
  );
};

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh; /* Optionally, set a height to center vertically within the viewport */
`;
const dropzoneStyle: React.CSSProperties = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  paddingBottom: '100px fixed',
  marginLeft: '25%',
  marginRight: '25%',
  marginTop: '8%',
  textAlign: 'center',
  cursor: 'pointer',
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

export default GAlleryUpload;
