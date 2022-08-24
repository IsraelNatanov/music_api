import React from 'react'
import "./player.css";
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import Queue from '../../components/queue';
import SongCard from '../../components/songCard';
import apiClient from '../../spotify';
import AudioPLayer from '../../components/audioPlayer/audioPlayer';
import Widgets from '../../components/widgets';
import axios from 'axios';

export default function Player() {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  

  console.log("location", location);

  useEffect(()=>{
    if(location.state){

      axios
      .get("http://localhost:9000/tracksSpotufyPl/" + location.state?.id)
      .then((res)=> {
         console.log(res.data);
         setTracks(res.data);
         setCurrentTrack(res.data[0])
        
        }
        
       );

    }

  },[location.state])


  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]);
  }, [currentIndex, tracks]);
  
  return (
    <div className="screen-container flex">
      <div className="left-player-body">
      <AudioPLayer
          currentTrack={currentTrack}
          total={tracks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        {/* <Widgets artistID={currentTrack?.album?.artists[0]?.id} /> */}
      </div>
      <div className="right-player-body">
        <SongCard album={currentTrack} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
}
