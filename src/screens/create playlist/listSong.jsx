import React, {  useContext, useEffect } from "react";
import { useState } from "react";

import { FiPlusCircle } from "react-icons/fi";

import "./listSong.css";
import { ImSearch } from "react-icons/im";
import {  useNavigate } from 'react-router-dom'

import { doApiMethod } from '../../components/services/apiService.jsX';
import { API_URL } from '../../components/services/apiService.jsX';

import { Alert, Button, IconButton, Stack } from "@mui/material";
import AppSearch from "../search/appSearch";



export default function ListSong(props) {
  
  
  
  const [search, setSearch] = useState(false);
  const [openSearch,setOpenSearch] = useState(false);
  const [openAddSung, setopenAddSung] = useState(false);
  const [ isAlertVisible, setIsAlertVisible ] = React.useState(false);
  const navigate = useNavigate();
  const tracks = props.tracks
  const id_plylist = props.idPlylist;
  console.log(id_plylist);
  
  const [dataTrack, setDataTrack] = useState({
    
    id: "",
    id_plylist: id_plylist,
    images: "",
    name: "",
    preview_url: "",

  })
  const doApiAddTrack = async(_dataBody) => {
    let url = API_URL+"/trackMyPlylist";
    try{
      let resp = await doApiMethod(url,"POST",_dataBody);
      if(resp.data._id){
        
        // nav("/admin/categories");
      }
    }
    catch(err){
      console.log(err.response);
      alert("There error try again later")
    }
    
    
  }
  const corrent = (track, index)=> {
    
    handleButtonClick()
    const newDataTrack = {...dataTrack}
    newDataTrack["id"] = track.id
    newDataTrack["images"] = track.images
    newDataTrack["name"] = track.name
    newDataTrack["preview_url"] = track.preview_url
    setDataTrack(newDataTrack)
    console.log(newDataTrack);
    doApiAddTrack(newDataTrack)
    

  }
  const navigateSearch = ()=>{
    setSearch(true);

  }
  useEffect(()=>{

  },[{search}])
  const handleButtonClick = () => {
    setIsAlertVisible(true);
    setTimeout(() => {
    setIsAlertVisible(false);
    }, 3000);
  }

  
  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <div className="row">
        <div className="search ">
          <IconButton onClick={()=> setOpenSearch(true)}>חפש זמר{<ImSearch />}</IconButton>
          {openSearch? <AppSearch />: <div></div>}
          </div>
        <p className="upNext">הוסף שירים</p>
        {isAlertVisible ? <p>השיר נוסף בהצלחה</p> : <div></div>}
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