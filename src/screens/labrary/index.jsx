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
import ErrorNoPay from '../../components/alert/errorNoPay';
import Card from '../../components/card/card';
import Loading from '../../components/card/loading';


export default function Library() {
  const navigate = useNavigate();
  const [playlists, setPlaylists] = useState(null);
  const [apiError, setApiError] = useState(false)
  const [loading, setLoading]= useState(false);

  useEffect(() => {
    doApi()
   
  },[])

  const doApi = async() => {
    try{
      setLoading(true)
      let url = API_URL+"/plylistSpotify"
      let resp = await doApiGet(url);
      setPlaylists(resp.data)
      console.log(resp.data);
      setApiError(false)
      setLoading(false)
    
    }
    catch(err){
      console.log(err.response)
      if (err.response.status === 401) {
        localStorage.clear();
        window.location.href = '/';
      }
      setApiError(true)
    
    }
  }


  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
  };
 

  return (
   
    <div className="screen-container">
      {loading && <Loading/>}
      {apiError?
      <ErrorNoPay/>:<Card playlists={playlists} playPlaylist={playPlaylist}/>
  
      }
    </div>
  );
}