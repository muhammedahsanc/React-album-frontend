import { Routes, Route } from "react-router-dom";
import UserDashboard from "./UserDashboard";
import Albums from "../user/Albums";
import ChangePart from "./ChangePart";
import Gallery from "../user/Gallery"
import ShowAlbums from "./ShowAlbums";
import ShowGallery from "./ShowGallery";
import Favourite from "./Favourite";
import ShowPhotos from "./ShowPhotos";

// import { useState } from "react";
// const [head,setHead ]= useState("Dashboard")
function UserRoll() {
  return (
    <UserDashboard>
        <Routes>
          <Route path="dashboard" element={<ChangePart/>} />
          <Route path="albums" element={<ShowAlbums/>} />
          <Route path="gallery/:id" element={<Gallery/>} />
          <Route path="addAlbum" element={<Albums/>} />
          <Route path="showGallery/:id" element={<ShowGallery/>} />
          <Route path="favourite" element={<Favourite/>} />
          <Route path="photos" element={<ShowPhotos/>} />


        </Routes>
    </UserDashboard>
  );
}
export default UserRoll;
