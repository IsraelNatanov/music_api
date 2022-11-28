import React, { useEffect } from 'react'
import { useState } from 'react';
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { doApiGet, API_URL } from '../../components/services/apiService.jsx';
import Loading from '../../components/card/loading';
import { isTokenProvider } from '../../components/services/isToken.jsx';


export default function Album() {
  const location = useLocation();
  console.log("location", location);
  const [loading, setLoading]= useState(false);

  const [album, setAlbum] = useState([]);
  const [imageAlbum, setImageAlbum] = useState();
  const Istoken = isTokenProvider()
  
  useEffect(() => {
    if(!Istoken){
      return navigate('/login');
    }
   
   
    
    doApi()

  }, []);
  const doApi = async() => {
    try{
      setLoading(true)
      let url = API_URL+"/albums/"+ location.state?.id
      let resp = await doApiGet(url);
      console.log(resp)
      setAlbum(resp.data);
      setImageAlbum(resp.data)
      setLoading(false)
      
    }
    catch(err){
      console.log(err.response)
    }
  }

  const navigate = useNavigate();

  const playAlbum = (id, images) => {
    
    if(location.state?.p){
      
      
      console.log(location.state?.p)
      navigate("/create", { state: { id: id ,images: images},});
    }
    else if(location.state?.e){
      navigate("/create", { state: { id: id ,images: images, e:"eiting"},});
    }
    
    else navigate("/player", { state: { id: id ,images: images},});
  };

  return (
    <div className="screen-container">
      {loading && <Loading/>}
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
