import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ErrorNoPay from '../../components/alert/errorNoPay';
import PlaylistOnly from '../../components/alert/playlistOnly';
import { doApiGet, API_URL } from '../../components/services/apiService.jsx';
import { isTokenProvider } from '../../components/services/isToken';
import ListPlaylist from './listPlaylist';

export default function ApiPlaylis() {
    const [apiError, setApiError] = useState(false)
  const [play, setPlay] = useState([]);
  const [legth, setLength] = useState(false);
  const navigate = useNavigate();
  
  

  const Istoken = isTokenProvider()
  useEffect(() => {
    if(!Istoken){
      return navigate('/login');
    }
    
    doApi()
    
  },[])

  const doApi = async() => {
    try{
      let url = API_URL+"/myPlylist"
      let resp = await doApiGet(url);
      if(resp.data.length==0){
        setLength(true)

      }
     
      setPlay(resp.data)
      console.log(resp.data);
      setApiError(false)
   
    }
    catch(err){
      if (err.response.status === 401) {
        localStorage.clear();
        window.location.href = '/';
      }
      setApiError(true)

      
      console.log(err.response)

      
    }
  }

  return play.length>0?(
    <div className="library-body">
     
        {play?.map((item) => {
           return (
            <ListPlaylist key={item.id} item={item}/>
            )
           })}
           
 
    </div>
  ):
  (<div className="library-body"><PlaylistOnly/></div>)
}
