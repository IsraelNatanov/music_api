import React from 'react'
import "./player.css";
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import Queue from '../../components/queue';
import SongCard from '../../components/songCard';
import AudioPLayer from '../../components/audioPlayer/audioPlayer';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import { doApiGet, API_URL } from '../../components/services/apiService.jsX';
import Widgets from '../../components/widgets';
import axios from 'axios';
import { Button, IconButton, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { PhotoCamera } from '@mui/icons-material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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
        <Stack direction="column" spacing={2}   alignItems="stretch" width={500} marginTop={23} marginLeft={50}>
        <Button color="success" variant="contained" size="large"  endIcon={<AddIcon />}>
        הוסף שירים
      </Button>
      <Button variant="contained" size="large" al endIcon={<DeleteIcon />}>
         מחק שירים
      </Button>
      <Button variant="contained" size="large"   endIcon={<DeleteForeverIcon  />}>
        מחק פלייליסט
      </Button>
      </Stack>
      </div>
      
      <div className="right-player-body">
        <SongCard album={currentTrack} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
}
