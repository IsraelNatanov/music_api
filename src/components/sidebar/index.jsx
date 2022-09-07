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
import { IoMdContact } from "react-icons/io";
import './Sidebar.css'
import apiClient from '../../spotify';



export default function Sidebar() {


  const [image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );
  
  const signout = ()=>{
    localStorage.clear();
    window.location.href = '/';

  }
  
  return (
    <div className='sidebar-container'>
      <SidebarButton title="Account" to="/account" icon={<IoMdContact/>} />
      
      <div>
        <SidebarButton title="Search" to="/search" icon={<ImSearch/>} />
        {/* <SidebarButton title="Search" to="/my account" icon={<ImSearch/>} /> */}
        <SidebarButton title="Artists" to="/" icon={<MdSpaceDashboard />} />
        <SidebarButton title="New playlist" to="/createPlaylist"  icon={<BsPlusSquareFill />} />

        {/* <SidebarButton title="Player" to="/player" icon={<FaPlay />} /> */}
        <SidebarButton
          title="My playlists"
          to="/myPlaylists"
          icon={<MdFavorite />}
        />
        <SidebarButton title="Library" to="/library" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="sign out" to="/#" icon={<FaSignOutAlt onClick={signout}/>} />
      
      
    </div>
  );
}
