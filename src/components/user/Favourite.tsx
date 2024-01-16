import { useState, useEffect } from 'react';
import axios from '../../config/axiosinstance';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faFilledHeart } from '@fortawesome/free-solid-svg-icons';

interface Photo {
  _id: string;
  file: string;

}

const Favourite = () => {
  const { id } = useParams();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const fetchPhotos = async () => {
    try {
      const response = await axios.get(`/getFavourite/fetchFavourite`);
      // console.log(response);
      console.log(response.data.data,'faaaaaaaaav');
      
      
      setPhotos(response.data.data);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };
  useEffect(() => {
    fetchPhotos();
  }, [id]);

  // const handleButtonClick = () => {
  //   navigate(`../gallery/${id}`);
  // };

  const removeFavorite = async (photoFile: string) => {
    const response = await axios.post("/RemoveFavPhoto/removeFav", {
      photoFile,
    });
    console.log(response.data,"handle response");
    await fetchPhotos()
  };
  return (
    <div>
        {photos.length === 0 ? (
        <NoItemsMessage>No items to display</NoItemsMessage>
      ) : (
    <PhotoListContainer>
      {photos.map((photo) => (
        <PhotoCard key={photo._id}>
          <PhotoImage src={photo?._id} alt={photo._id}/>
          <IconContainer>
            <FontAwesomeIcon icon={faFilledHeart} onClick={() => removeFavorite(photo._id)} />
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

export default Favourite;
