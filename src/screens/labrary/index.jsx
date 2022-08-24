import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import "./library.css";
import APIKit from "../../spotify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Library() {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    getplylistData()
    // axios.get("http://localhost:9000/plylistSpotify").then(function (response) {
    //   console.log(response)
    //   setPlaylists(response.data.items);
    // });
  }, []);
  const getplylistData = async ()=>{
      
    // const response = await APIKit.get('https://api.spotify.com/v1/artists/' + arr[i],
    // );
    

    
    // console.log(response)
    // setPlay(play=> [...play, response.data]);
    const res = await axios.get("http://localhost:9000/plylistSpotify");
    console.log(res)
      setPlaylists(res.data);

 
  } 

  const navigate = useNavigate();

  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <div className="screen-container">
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
            <p className="playlist-subtitle">{playlist.total} Songs</p>
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}