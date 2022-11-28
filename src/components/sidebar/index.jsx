import React, { useEffect, useState } from 'react'
import SidebarButton from "./sidebarButton";
import { MdFavorite } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { BsPlusSquareFill } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { IoMdContact } from "react-icons/io";
import axios from 'axios';
import { API_URL } from '../services/apiService';
import {Navigate} from "react-router-dom";

import './Sidebar.css'




export default function Sidebar() {
  const [navigate, setNavigate] = useState(false);


  const logout = async () => {
    localStorage.clear();
    let url = API_URL+"/users/logout";
    await axios.post(url, {}, {withCredentials: true});

    setNavigate(true);
}

if (navigate) {
    return <Navigate to="/login"/>;
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
      <SidebarButton title="sign out" to="/signout" icon={<FaSignOutAlt />} />
      
      
    </div>
  );
}
