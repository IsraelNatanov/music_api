import React from 'react'
import "./albumInfo.css";

export default function ({ album }) {
  const artists = [];
  album?.artists?.forEach((element) => {
    artists.push(element.name);
  });
  return (
    <div className="albumInfo-card">
      <div className="albumName-container">
        <div className="marquee">
          <p>{artists?.join(", ") + " - " + album?.name}</p>
        </div>
      </div>
      <div className="album-info">
        <p>{`${artists?.join(
          " ו"
        )} ${album?.name}  `}</p>
      </div>
      <div className="album-release">
        <p>Release Date: {album?.release_date}</p>
      </div>
    </div>
  )
}
