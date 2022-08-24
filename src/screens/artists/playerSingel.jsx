
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios';
import APIKit from "../../spotify";
import apiClient from '../../spotify';

import AudioAlbum from '../../components/singalPlay/audioAlbum';
import SongCard from '../../components/songCard';
import Queue from '../../components/queue';
import SongCardAritest from '../../components/songCard/songCardAritest';

export default function PlayerSingel() {
  const location = useLocation();

  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);

  console.log("location", location);

   useEffect(()=>{

    if(location.state){
      axios.get("http://localhost:9000/tracks/" + location.state?.id)
      .then((res)=> {
        console.log(res.data);
        setTracks(res.data);
        setCurrentTrack(res.data[0])
        setCurrentImages(location.state?.images)
        console.log(currentImages)
      })
    }
      

   },[location.state])

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]);
  }, [currentIndex, tracks]);
  
  return (
    <div className="screen-container flex">
      <div className="left-player-body">
        <AudioAlbum
          currentTrack={currentTrack}
          
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          total={tracks}
          currentImages={currentImages}
        />
        {/* <Widgets artistID={currentTrack?.album?.artists[0]?.id} /> */}
      </div>
      <div className="right-player-body">
        <SongCardAritest album={currentTrack} img= {currentImages}/>
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
}

