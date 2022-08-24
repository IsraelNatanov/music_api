import React from 'react'
import "./albumInfo.css";

export default function ({ album }) {
  // const artists = [];
  // album?.artists?.forEach((element) => {
  //   artists.push(element.name);
  // });
  return (
    <div className="albumInfo-card">
      <div className="albumName-container">
        <div className="marquee">
          <p>{album?.name_artist } {album?.name}</p>
        </div>
      </div>
      <div className="album-info">
      <p>{album?.name_artist } {album?.name}</p>
      </div>
      
    </div>
  )
}
