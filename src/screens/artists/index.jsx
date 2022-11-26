import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { doApiGet, API_URL } from '../../components/services/apiService.jsx';
import Login from '../auth/login';
import Card from '../../components/card/card';
import Loading from '../../components/card/loading';

export default function Artists() {

  const [apiError, setApiError] = useState(false)
  const [loading, setLoading]= useState(false);
  const [playlists, setPlaylists] = useState([]);
  const [res, setRes] = useState(false)
  const navigate = useNavigate();

  
  useEffect(() => {
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
      setLoading(false)

      if(!res) {
        setRes(true)
        return doApi()
      }
      else{
        
        setLoading(false)
       
        navigate("/login")
        setApiError(true)
        console.log(err.response)
      

      }
     
      
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
