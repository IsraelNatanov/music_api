import React, { useEffect } from "react";
import { useState } from "react";
import apiClient from "../../spotify";
import { FiPlusCircle } from "react-icons/fi";
import { BsPlusCircle } from "react-icons/bs";
import "./listSong.css";
import { ImSearch } from "react-icons/im";
import { useLocation, useNavigate } from 'react-router-dom'



import AudioAlbum from '../../components/singalPlay/audioAlbum';
import SongCard from '../../components/songCard';
import Queue from '../../components/queue';
import SongCardAritest from '../../components/songCard/songCardAritest';
import ComboBox from "../search/comboBox";

export default function listSong({ tracks, setCurrentIndex,currentIndex }) {
  const [search, setSearch] = useState(false);
  const navigate = useNavigate();
  const navigateSearch = ()=>{
    setSearch(true);

  }
  useEffect(()=>{

  },[{search}])

  
  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <div className="row">
        {/* <p className="search ">{<ImSearch onClick={<ComboBox/>} />}</p> */}
        <p className="upNext">הוסף שירים</p>
        
        </div>
        <div className="queue-list">
          {tracks?.map((track, index) => (
            <div
              key={index + "key"}
              className="queue-item flex"
              onClick={() => setCurrentIndex(index) }
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