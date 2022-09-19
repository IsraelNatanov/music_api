import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import APIKit from "../../spotify";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { doApiGet, API_URL } from '../../components/services/apiService.jsX';
import Login from '../auth/login';

export default function Artists() {

  const [apiError, setApiError] = useState(false)
  const [play, setPlay] = useState([]);
  

  let i = 0;
  useEffect(() => {
    doApi()
    // getplylistData();
  },[])

  const doApi = async() => {
    try{
      let url = API_URL+"/artists"
      let resp = await doApiGet(url);
      setPlay(resp.data)
      console.log(resp.data);
      setApiError(false)
      // if(resp.data){
      //   getplylistData();
      // }
    }
    catch(err){
      localStorage.clear();
      window.location.href = '/';
      
      console.log(err.response)
      // setApiError(true)
      
      // alert("Please login to be here or token expired");
      // navigate("/account")
      
    }
  }

    
  
  const navigate = useNavigate();
  // const ifToken = () =>{
  //   if()
  // }
  const playArtists = (id) => {
     navigate("/album", { state: { id: id}} );
  };

  return (
    <div className="screen-container">
      {apiError? <Login />:
   
      <div className="library-body">
        {play?.map((plays) => (
          <div
            className="playlist-card"
            key={plays.id}
            onClick={() => playArtists(plays.id)}
            
          >
            <img
              src={plays.images}
              className="playlist-image"
              alt="Playlist-Art"
            />
            <p className="playlist-title">{plays.name}</p>
            {/* <p className="playlist-subtitle">{plays.popularity} Songs</p> */}
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
