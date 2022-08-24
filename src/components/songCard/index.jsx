import React from "react";
import AlbumImage from "./albumImage";
import AlbumInfo from "./albumInfo";
import "./songCard.css";

export default function SongCard({ album }) {
  
  return (
    <div className="songCard-body flex">
      <AlbumImage url={album?.images} />
      <AlbumInfo album={album} />
    </div>
  );
}