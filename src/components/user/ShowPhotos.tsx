import { useState, useEffect } from "react";
import axios from "../../config/axiosinstance";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faHeart as faFilledHeart,
  faDownload 
} from "@fortawesome/free-solid-svg-icons";
import {  faHeart } from "@fortawesome/free-regular-svg-icons";
import { toast } from "react-toastify";

interface Photo {
  _id: string;
  file: string;
  fileName: string;
  photo:string
}

const ShowPhotos = () => {
  const { id } = useParams();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [favPhotos, setFavPhotos] = useState<string[]>([]);
  const navigate = useNavigate();
console.log(photos,"pphoooooyos");

  const fetchFavourites = async() =>{
    const FavResponse = await axios.get(`/getFavourite/fetchFavourite`);
    setFavPhotos(FavResponse.data.data.map(({_id}:{_id:string})=>_id));
  }

  const fetchPhotos = async () => {
    try {
      const response = await axios.get(`/getAllPhotos/fetchAllPhotos`);
      console.log(response.data.data,"all pics");

      setPhotos(response.data.data);
      await fetchFavourites()

    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

   useEffect(() => {
    fetchPhotos();
  }, []);

  const handleButtonClick = () => {
    navigate(`../gallery/${id}`);
  };

  const AlbumClick = (id: any) => {
    window.open(id, "_blank", "noopener,noreferrer");
    
  };

  const handleDelete = async (photoId: string) => {
    try {

      const shouldDelete = window.confirm("Are you sure you want to delete this photo?");
      if (!shouldDelete) {
        return;
      }
  
      const response = await axios.post("/deletePhoto/deleteImage", {
        photoId,
        albumId: id,
      });
      fetchPhotos();
      toast(response.data.message);

    } catch (error) {
      console.error("Error deleting photo:", error);
    }
  };
  const handleFavorite = async (photoFile: string) => {
    const response = await axios.post("/FavPhoto/FavouritePhoto", {
      photoFile,
    });
    await fetchFavourites()
  };
  const removeFavorite = async (photoFile: string) => {
    const response = await axios.post("/RemoveFavPhoto/removeFav", {
      photoFile,
    });
    console.log(response.data,"handle response");
    await fetchFavourites()
  };

  const handleDownload = async (photoFile: string) => {
    try {
      <a href={photoFile} download={true} ></a>
    } catch (error) {
      console.error("Error downloading photo:", error);
    }
  };

  return (
    <div>
      <TopRightButton onClick={handleButtonClick}>
        Add New Photos
      </TopRightButton>

      {photos.length === 0 ? (
        <NoItemsMessage>No items to display</NoItemsMessage>
      ) : (
        <PhotoListContainer>
          {photos.map((photo,index) => (
            <PhotoCard key={index}>
              <PhotoImage src={photo.file} onClick={() => AlbumClick(photo.file)}  />
              {/* <p>{photo.fileName}</p> */}
              <IconContainer>
                {/* Delete Icon */}
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => handleDelete(photo._id)}
                />
                {/* Favorite Icon */}
                {
                favPhotos.includes(photo.file)?  
                <FontAwesomeIcon
                icon={faFilledHeart}
                onClick={() => removeFavorite(photo.file)}
              />:
              <FontAwesomeIcon
                icon={faHeart}
                onClick={() => handleFavorite(photo.file)}
              />             
              }
                 <FontAwesomeIcon
          icon={faDownload}
          onClick={() => handleDownload(photo.file)}
        /> 

              </IconContainer>
            </PhotoCard>
          ))}
        </PhotoListContainer>
      )}
    </div>
  );
};
const NoItemsMessage = styled.p`
  text-align: center;
  color: #555;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
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
  float: right;
  margin-right: 20px;

  &:hover {
    background-color: #45a049;
  }
`;

export default ShowPhotos;
