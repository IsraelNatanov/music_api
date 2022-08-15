
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
  const [currentImages, setcurrentImages] = useState([]);

  console.log("location", location);

   useEffect(()=>{

    if(location.state){
      apiClient.get("albums/" + location.state?.id + "/tracks")
      .then((res)=> {
        console.log(res.data);
        setTracks(res.data.items);
        setCurrentTrack(res.data.items[0])
        setcurrentImages(location.state?.images)
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
          total={tracks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
         
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

