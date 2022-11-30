import React, { useEffect } from 'react'
import { useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import { doApiGet, API_URL } from '../../components/services/apiService.jsx';
import Login from '../auth/login';
import Card from '../../components/card/card';
import Loading from '../../components/card/loading';

import { isTokenProvider } from '../../components/services/isToken.jsx';


export default function Artists(props) {
  

  const [apiError, setApiError] = useState(false)
  const [loading, setLoading]= useState(false);
  const [playlists, setPlaylists] = useState([]);
  const navigate = useNavigate();
  
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
      let url = API_URL+"/artists"
      let resp = await doApiGet(url);
      setPlaylists(resp.data)
      console.log(resp.data);
      setApiError(false)
      setLoading(false)
      
    }
    catch(err){
     
      return await doApi();
      
      
      
    }
  }

    
  

  const playPlaylist = (id) => {
     navigate("/album", { state: { id: id}} );
  };

  return (
    <div className="screen-container">
      {loading == true && <Loading/>}
      {apiError? <Login />: <Card playlists={playlists} playPlaylist={playPlaylist}/>
      }
    </div>
  );
}
