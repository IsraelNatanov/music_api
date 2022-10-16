import React from 'react'
import "./player.css";
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import Queue from '../../components/queue';
import SongCard from '../../components/songCard';
import AudioPLayer from '../../components/audioPlayer/audioPlayer';

import { doApiGet, API_URL } from '../../components/services/apiService.jsX';

import axios from 'axios';


export default function Player() {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  

  console.log("location", location);

  useEffect(()=>{
    if(location.state?.type) {
      doApi()
    }
    else if(location.state){

      doApiSpotify()

    }

  },[location.state])
  const doApi = async() => {
    try{
      let url = API_URL+"/trackMyPlylist/"+ location.state?.id
      let resp = await doApiGet(url);
      setTracks(resp.data);
      setCurrentTrack(resp.data[0])
      // setCurrentImages(location.state?.images)
      console.log(resp.data);
      
      
    }
    catch(err){
      console.log(err.response)
    }
  }
  const doApiSpotify = async() => {
    try{
      let url = API_URL+"/tracksSpotufyPl/" + location.state?.id
      let resp = await doApiGet(url);
      console.log(resp.data);
      setTracks(resp.data);
      setCurrentTrack(resp.data[0])
      console.log(resp.data);
      
      
    }
    catch(err){
      console.log(err.response)
    }
  }

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]);
  }, [currentIndex, tracks]);
  
  return (
    <div className="screen-container flex-row">
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
