import { useState, useEffect } from 'react';
import axios from '../../config/axiosinstance';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from 'react-toastify';

interface Photo {
  _id: string;
  file: { file: string }[];
  AlbumName: string;
}
const ShowAlbums = () => {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const fetchPhotos = async () => {
    try {
      const response = await axios.get('/getAlbums/fetchAlbum');
      console.log(response);
      console.log(response.data.data);
      console.log(response.data.data);
      setPhotos(response.data.data)
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };
  useEffect(() => {
    fetchPhotos();
  }, []);
  const handleButtonClick = () => {
    navigate('/user/addAlbum')
  };
  const AlbumClick = (id:any) => {
    navigate(`../showGallery/${id}`);
  };
  const handleDelete = async (AlbumId: string) => {
    try {
      const shouldDelete = window.confirm("Are you sure you want to delete this photo?");
      if (!shouldDelete) {
        return;
      }
      const response = await axios.post("/deleteAlbum/removeAlbum",AlbumId );
      toast(response.data.message);

    }catch(err){
      console.error("Error deleting photo:", err);
      console.log(err);
      
    }
  }
  return (
    <div>
    <TopRightButton onClick={handleButtonClick}>Add New Album</TopRightButton>
    <PhotoListContainer>
      {photos.map((photo) => (
        <PhotoCard onClick={()=>AlbumClick(photo._id)} key={photo._id}>
          <PhotoImage src={photo.file[0]?.file} alt={photo.AlbumName} />
          <p>{photo.AlbumName}</p>
          <IconContainer>
                {/* Delete Icon */}
               
              </IconContainer>
        </PhotoCard>
      ))}
    </PhotoListContainer>
  </div>
);
};
const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
const PhotoListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const PhotoCard = styled.div`
  width: 200px;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const PhotoImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;
const TopRightButton = styled.button`
background-color: #3498db;
color: white;
padding: 10px 15px;
border: none;
border-radius: 4px;
cursor: pointer;
font-size: 16px;
margin-top: 10px;
float:right;
margin-right:20px;

  &:hover {
    background-color: #45a049;
  }
`;


export default ShowAlbums;
