import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import "./library.css";
import APIKit from "../../spotify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { doApiGet, API_URL } from '../../components/services/apiService.jsX';
import { Alert, AlertTitle, Button, Stack } from '@mui/material';


export default function Library() {
  const navigate = useNavigate();
  const [playlists, setPlaylists] = useState(null);
  const [apiError, setApiError] = useState(false)

  useEffect(() => {
    doApi()
    // getplylistData();
  },[])

  const doApi = async() => {
    try{
      let url = API_URL+"/plylistSpotify"
      let resp = await doApiGet(url);
      setPlaylists(resp.data)
      console.log(resp.data);
      setApiError(false)
      // if(resp.data){
      //   getplylistData();
      // }
    }
    catch(err){
      console.log(err.response)
      if (err.response.status === 401) {
        localStorage.clear();
        window.location.href = '/';
      }
      setApiError(true)
      
      // alert("Please login to be here or token expired");
      // navigate("/account")
      
    }
  }
  const getplylistData = async ()=>{
      
    // const response = await APIKit.get('https://api.spotify.com/v1/artists/' + arr[i],
    // );
    

    
    // console.log(response)
    // setPlay(play=> [...play, response.data]);
    const res = await axios.get("http://localhost:9000/plylistSpotify");
    console.log(res)
      setPlaylists(res.data);

 
  } 

 

  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
  };
 

  return (
   
    <div className="screen-container">
      {apiError?
      <Stack sx={{ width: '100%' ,alignItems: "center", paddingTop: "25%"}} spacing={2}>
      
      <Alert severity="warning"
        action={
          <Button color="inherit" size="small" onClick={()=>navigate("/account")}>
            click
          </Button>
        }
      >
        You are not a premium customer and therefore you are not allowed to enter here!
      </Alert>
    </Stack>:
      <div className="library-body">
        {playlists?.map((playlist) => (
          <div
            className="playlist-card"
            key={playlist.id}
            onClick={() => playPlaylist(playlist.id)}
          >
            <img
              src={playlist.images}
              className="playlist-image"
              alt="Playlist-Art"
            />
            <p className="playlist-title">{playlist.name}</p>
            {/* <p className="playlist-subtitle">{playlist.total} Songs</p> */}
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>}
    </div>
  );
}