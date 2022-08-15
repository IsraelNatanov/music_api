import React from "react";
import AlbumImage from "./albumImage";
import AlbumInfo from "./albumInfo";
import "./songCard.css";

export default function SongCardAritest({album, img }) {
  return (
    <div className="songCard-body flex">
      <AlbumImage url={img} />
      <AlbumInfo album={album} />
    </div>
  );
}