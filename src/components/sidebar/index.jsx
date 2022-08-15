import React, { useEffect, useState } from 'react'
import SidebarButton from "./sidebarButton";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { BsPlusSquareFill } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import './Sidebar.css'
import apiClient from '../../spotify';
import SearchApp from '../../screens/search/searchInput';


export default function Sidebar() {


  const [image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      console.log(response.data)
      setImage(response.data.images[0].url);
    });
  }, []);
  
  return (
    <div className='sidebar-container'>
      <img 
        src={image}
        className='profile-img'
        alt='profile'
      />
      
      <div>
        <SidebarButton title="Search" to="/search" icon={<ImSearch/>} />
        <SidebarButton title="Artists" to="/artists" icon={<MdSpaceDashboard />} />
        <SidebarButton title="New playlist" to="/createPlaylist"  icon={<BsPlusSquareFill />} />

        {/* <SidebarButton title="Player" to="/player" icon={<FaPlay />} /> */}
        <SidebarButton
          title="My playlists"
          to="/myPlaylists"
          icon={<MdFavorite />}
        />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
      
      
    </div>
  );
}
