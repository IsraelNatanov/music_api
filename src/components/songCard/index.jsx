import React from "react";
import AlbumImage from "./albumImage";
import AlbumInfo from "./albumInfo";
import "./songCard.css";

export default function SongCard({ album, img }) {
  const images = img? img : album?.images;
  return (
    <div className="songCard-body flex">
      <AlbumImage url={images} />
      <AlbumInfo album={album} />
    </div>
  );
}