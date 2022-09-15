import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import APIKit from "../../spotify";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";

export default function Album() {
  const location = useLocation();
  console.log("location", location);

  const [album, setAlbum] = useState([]);
  const [imageAlbum, setImageAlbum] = useState();
  let i = 0;
  
  useEffect(() => {
    
   
    const getArtistsData = async ()=>{

      // if(location.state){
        console.log(location.state)
        const response = await axios.get("http://localhost:9000/albums/" + location.state?.id);
        console.log(response)
        setAlbum(response.data);
        setImageAlbum(response.data)
      // }
      
    };
    getArtistsData();
  }, []);

  const navigate = useNavigate();

  const playAlbum = (id, images) => {
    // setImageAlbum(images);
    if(location.state?.p){
      const idPlylist = location.state?.idPlylist
      console.log(location.state?.p)
      navigate("/create", { state: { id: id ,images: images, idPlylist: idPlylist},});
    }
    
    else navigate("/playerSingel", { state: { id: id ,images: images},});
  };

  return (
    <div className="screen-container">
      
      <div className="library-body">
        {album?.map((albums) => (
          
             <div
            className="playlist-card"
            key={albums.id}
            onClick={() => playAlbum(albums.id, albums.images)}
            
          >
            <img
              src={albums.images}
              className="playlist-image"
              alt="Playlist-Art"
            />
            <p className="playlist-title">{albums.name}</p>
            {/* <p className="playlist-subtitle">{plays.popularity} Songs</p> */}
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
//https://open.spotify.com/artist/5H64fYkQmqjX0bS4bplq8F?si=QmsJr-3IR7e46O-Rrkr4Sw
//https://open.spotify.com/artist/70287pcNpILjcpoBl0soPs?si=WM7qrq6iRE-d7CTnsW6aNA
//https://open.spotify.com/artist/54HicbsQOHeibnnFCMtLwl?si=976SALQRStimoZYoXALDpA
//https://open.spotify.com/artist/5eVh2c6WuigJCj1WrHfnd5?si=LxnvTSEWS5K23WskqznSHA
//https://open.spotify.com/artist/5GCh3ZazIVWg8eKb5Akv0q?si=ky5X9uA9RdKLRIf-_HgEeg
//https://open.spotify.com/artist/3VTm1513t2LL1mSKzzyQuj?si=id4GB-esSliCRRS90tm45A
//https://open.spotify.com/artist/0NLEL3BBW71Oshh5R7wpJl?si=FsJRsuqiTNaROoJ_zHE7DQ
//https://open.spotify.com/artist/3Y0YvS2crBLVS9eA5jX8Ux?si=twdC0_WsRH2obeRwTErPVw
//https://open.spotify.com/artist/5H64fYkQmqjX0bS4bplq8F?si=Zwwn1LAdQQeXO8LbOeVWiQ
//https://open.spotify.com/artist/0kF5nmRrCc9oZpAkVbWaUt?si=vGHHtcIuT3mZ9UbUlI70kw
//https://open.spotify.com/artist/4aTDB7CQyMNOLQsCpAS9EW?si=ReNOeoOxSFSPfCnuDeSZ4Q
//https://open.spotify.com/artist/2ixFSrVvKut1Kc9zaOkwaT?si=lEQD-qLMTBW9RCiwcq82uQ
//https://open.spotify.com/artist/4aTDB7CQyMNOLQsCpAS9EW?si=KQ74DtSLTsaqFPQYZZzWuw
//https://open.spotify.com/artist/2ixFSrVvKut1Kc9zaOkwaT?si=bCiWXzQPQd2LkVTVRohI7A
