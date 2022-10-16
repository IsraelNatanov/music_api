import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import SongCardAritest from '../../components/songCard/songCardAritest'
import ListSong from './listSong'
import apiClient from '../../spotify';
import "./create.css";
import ComboBox from '../search/comboBox'
import axios from 'axios'
import { doApiGet, API_URL } from '../../components/services/apiService.jsX';


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
        <SongCardAritest album={currentTrack} img= {currentImages} />
        {/* <div className='songCard-body'>{<ComboBox/>}</div> */}
        <ListSong tracks={tracks} setCurrentIndex={setCurrentIndex} currentIndex ={currentIndex} idPlylist={idPlylist}/>
      </div>
    </div>
   
      
    
  )
}
