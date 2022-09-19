import React from 'react'
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from 'react-icons/ai';

export default function ListPlaylist(props) {
    let plays = props.item;;
  
  return (
    <div
        className="playlist-card"
           
            // onClick={() => playArtists(plays.id)}
            
          >
            <img
              src='https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&w=600'
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
    
  )
}
