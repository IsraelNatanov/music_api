import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import SongCardAritest from '../../components/songCard/songCardAritest'
import ListSong from './listSong'
import apiClient from '../../spotify';
import "./create.css";
import ComboBox from '../search/comboBox'
import axios from 'axios'

export default function Create() {
  const location = useLocation();

  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImages, setcurrentImages] = useState([]);

  console.log("location", location);
  
    const idPlylist = location.state?.idPlylist
  

   useEffect(()=>{

    if(location.state){
      axios.get("http://localhost:9000/tracks/" + location.state?.id)
      .then((res)=> {
        console.log(res.data);
        setTracks(res.data);
        setCurrentTrack(res.data[0])
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
      
      <div className="right-player-body flex">
        <SongCardAritest album={currentTrack} img= {currentImages} />
        {/* <div className='songCard-body'>{<ComboBox/>}</div> */}
        <ListSong tracks={tracks} setCurrentIndex={setCurrentIndex} currentIndex ={currentIndex} idPlylist={idPlylist}/>
      </div>
    </div>
   
      
    
  )
}
