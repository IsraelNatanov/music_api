import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import ListSong from './listSong'
import "./create.css";
import { doApiGet, API_URL } from '../../components/services/apiService.jsx';
import SongCard from '../../components/songCard'


export default function Create() {
  const location = useLocation();

  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImages, setcurrentImages] = useState([]);

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
      let url = API_URL+"/tracks/" + location.state?.id
      let resp = await doApiGet(url);
      console.log(resp.data);
        setTracks(resp.data);
        setCurrentTrack(resp.data[0])
        setcurrentImages(location.state?.images)
        console.log(currentImages)
    }
    catch(err){
      console.log(err.response)
    }
  }
  return (
    <div className="screen-container ">
      
      <div className="horizontal-line">
        <SongCard album={currentTrack} img= {currentImages} />
      
        <ListSong tracks={tracks} setCurrentIndex={setCurrentIndex} currentIndex ={currentIndex} />
      </div>
    </div>
   
      
    
  )
}
