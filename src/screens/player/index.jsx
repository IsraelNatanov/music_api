import React from 'react'
import "./player.css";
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import Queue from '../../components/queue';
import SongCard from '../../components/songCard';
import AudioPLayer from '../../components/audioPlayer/audioPlayer';

import { doApiGet, API_URL } from '../../components/services/apiService.jsx';

import axios from 'axios';


export default function Player() {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState("");
  const [isAlbum, setIsAlbum] = useState(false);

  console.log("location", location);

  useEffect(()=>{
    
    if(location.state?.type) {
      doApitrackMyPlylist()
    }
    else if(location.state?.images){

      doApiAlbum()

    }
    else{
      doApitracksSpotufy()
    }

  },[location.state])
  const doApitrackMyPlylist = async() => {
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
  const doApiAlbum = async() => {
    try{
      console.log("dfsd");
      let url = `${API_URL}/tracks/sung/${location.state?.id}`
      let resp = await doApiGet(url);
      console.log(resp.data);
        setTracks(resp.data);
        setCurrentTrack(resp.data[0])
        setCurrentImages(location.state?.images)
        
        setIsAlbum(true);
      
    }
    catch(err){
      
      console.log(err.response)
      
    }
  }
  const doApitracksSpotufy = async() => {
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
        <div className='img-right'><SongCard album={currentTrack} img= {currentImages}/></div>
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
}
