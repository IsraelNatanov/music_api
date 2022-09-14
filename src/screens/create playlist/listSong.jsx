import React, {  useContext, useEffect } from "react";
import { useState } from "react";
import apiClient from "../../spotify";
import { FiPlusCircle } from "react-icons/fi";
import { BsPlusCircle } from "react-icons/bs";
import "./listSong.css";
import { ImSearch } from "react-icons/im";
import { useLocation, useNavigate } from 'react-router-dom'



import { IconButton } from "@mui/material";
import AppSearch from "../search/appSearch";
import { TodoContext } from "../../context/todoContext";


export default function ListSong(props) {
  const {data} = useContext(TodoContext)
  
  
  const [search, setSearch] = useState(false);
  const [openSearch,setOpenSearch] = useState(false);
  const navigate = useNavigate();
  const tracks = props.tracks
  
  const [dataTrack, setDataTrack] = useState({
    
    id: "",
    id_plylist: "",
    images: "",
    name: "",
    preview_url: "",

  })
  const corrent = (track, index)=> {
    
    const newDataTrack = {...dataTrack}
    newDataTrack["id"] = track.id
    newDataTrack["images"] = track.images
    newDataTrack["name"] = track.name
    newDataTrack["preview_url"] = track.preview_url
    setDataTrack(newDataTrack)
    console.log(newDataTrack);

  }
  const navigateSearch = ()=>{
    setSearch(true);

  }
  useEffect(()=>{

  },[{search}])

  
  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <div className="row">
        <div className="search ">
          <IconButton onClick={()=> setOpenSearch(true)}>חפש זמר{<ImSearch />}</IconButton>
          {openSearch? <AppSearch />: <div></div>}
          </div>
        <p className="upNext">הוסף שירים</p>
        
        </div>
        <div className="queue-list">
          {tracks?.map((track, index) => (
            <div
              key={index + "key"}
              className="queue-item flex"
              onClick={() => corrent(track, index) }
            >
              
              <div className="aicons">{<FiPlusCircle/>}</div>
              <p>0:30</p>
              {track?.track?
                <p className="track-name" >
                {track?.track?.name}
                </p>:
                <p className="track-name" >
                {track?.name}
                </p>
                
                
              } 
              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}