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

export default function Player() {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  

  console.log("location", location);

  useEffect(()=>{
    if(location.state){

      apiClient
      .get("playlists/" + location.state?.id + "/tracks")
      .then((res)=> {
         console.log(res);
         setTracks(res.data.items);
         setCurrentTrack(res.data.items[0].track)
         setcurrentImages(res.data.items[0].images[0])
        }
        
       );

    }

  },[location.state])

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
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
        <SongCard album={currentTrack?.album} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
}
