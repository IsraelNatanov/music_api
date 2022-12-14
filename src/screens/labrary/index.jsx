import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import "./library.css";
import { useNavigate } from "react-router-dom";
import { doApiGet, API_URL } from '../../components/services/apiService.jsx';
import ErrorNoPay from '../../components/alert/errorNoPay';
import Card from '../../components/card/card';
import Loading from '../../components/card/loading';
import { isTokenProvider } from '../../components/services/isToken';


export default function Library() {
  const navigate = useNavigate();
  const [playlists, setPlaylists] = useState(null);
  const [apiError, setApiError] = useState(false)
  const [loading, setLoading]= useState(false);
  const Istoken = isTokenProvider()

  useEffect(() => {
    if(!Istoken){
      return navigate('/login');
    }
    doApi()
   
  },[])

  const doApi = async() => {
    try{
      setLoading(true)
      let url = API_URL+"/plylistSpotify"
      let resp = await doApiGet(url);
      setPlaylists(resp.data)
      console.log(resp);
      setApiError(false)
      
      setApiError(false)
      setLoading(false)
      // if(response.status == 500){
      //   setApiError(true)
      // }
    
    }
    catch(err){
      console.log(err.response)
      // if (err.response.status === 401) {
        
      //   window.location.href = '/';
      // }
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