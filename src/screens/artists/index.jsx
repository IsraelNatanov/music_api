import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import APIKit from "../../spotify";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { doApiGet, API_URL } from '../../components/services/apiService.jsX';
import Login from '../auth/login';

export default function Artists() {

  const [apiError, setApiError] = useState(false)
  const [play, setPlay] = useState([]);
  

  let i = 0;
  useEffect(() => {
    doApi()
    // getplylistData();
  },[])

  const doApi = async() => {
    try{
      let url = API_URL+"/artists"
      let resp = await doApiGet(url);
      setPlay(resp.data)
      console.log(resp.data);
      setApiError(false)
      // if(resp.data){
      //   getplylistData();
      // }
    }
    catch(err){
      console.log(err.response)
      setApiError(true)
      
      // alert("Please login to be here or token expired");
      // navigate("/account")
      
    }
  }
  // useEffect(() => {
    
   
  //   const getArtistsData = async ()=>{
      
  //     // const response = await APIKit.get('https://api.spotify.com/v1/artists/' + arr[i],
  //     // );
      

      
  //     // console.log(response)
  //     // setPlay(play=> [...play, response.data]);
  //     const res = await axios.get("http://localhost:9000/artists");
  //     setPlay(res.data)

   
  //   } 
      
  //   // }
  //   // for(i;i < arr.length; i++) {
  //    getArtistsData();
      
  //   // }
  //   // console.log(play)
    
  // },[]);
  const navigate = useNavigate();
  // const ifToken = () =>{
  //   if()
  // }
  const playArtists = (id) => {
     navigate("/album", { state: { id: id}} );
  };

  return (
    <div className="screen-container">
      {apiError? <Login />:
   
      <div className="library-body">
        {play?.map((plays) => (
          <div
            className="playlist-card"
            key={plays.id}
            onClick={() => playArtists(plays.id)}
            
          >
            <img
              src={plays.images}
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
        ))}
      </div>}
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
//https://open.spotify.com/artist/5H64fYkQmqjX0bS4bplq8F?si=nXmyTHhfT9eRGs0LztlmdA
