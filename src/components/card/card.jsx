import React from 'react'
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";

export default function Card(props) {
  return (
    <div className="library-body">
        {props.playlists?.map((playlist) => (
          <div
            className="playlist-card"
            key={playlist.id}
            onClick={() => props.playPlaylist(playlist.id)}
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
      </div>
  )
}
