import React from 'react'
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function ListPlaylist(props) {
    let plays = props.item;
    console.log(props.item);
    const navigate = useNavigate();
    
    const playMyPlaylist = (id) => {
      navigate("/player", { state: { id: id , type:"myPlaylist"},});
   };
  
  return (
    <div
        className="playlist-card"
        onClick={() => playMyPlaylist(plays.id)}
           
            // onClick={() => playArtists(plays.id)}
            
          >
            <img
              src={plays.image.url}
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
