
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios';

import { doApiGet, API_URL } from '../../components/services/apiService.jsX';
import AudioAlbum from '../../components/singalPlay/audioAlbum';
import SongCard from '../../components/songCard';
import Queue from '../../components/queue';
import SongCardAritest from '../../components/songCard/songCardAritest';
import Loading from '../../components/card/loading';



export default function PlayerSingel() {
  const location = useLocation();

  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);
  const [loading, setLoading]= useState(false);
  console.log("location", location);

   useEffect(()=>{
    
    if(location.state){
      doApi()
    }
      

   },[location.state])
   

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]);
  }, [currentIndex, tracks]);
  const doApi = async() => {
    try{
      setLoading(true)
      let url = API_URL+"/tracks/" + location.state?.id
      let resp = await doApiGet(url);
      console.log(resp.data);
        setTracks(resp.data);
        setCurrentTrack(resp.data[0])
        setCurrentImages(location.state?.images)
        console.log(currentImages)
        setLoading(false)
      
    }
    catch(err){
      
      console.log(err.response)
      
    }
  }
  return (
    <div className="screen-container flex">
      {loading && <Loading/>}
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

