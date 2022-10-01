import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Queue from '../../components/queue';
import { doApiGet, API_URL } from '../../components/services/apiService.jsX';
import AppSearch from '../search/appSearch';
import ButtunEditing from './buttunEditing';


export default function EditingPlaylist() {
    const location = useLocation();
    console.log("ddd",location);
    const [tracks, setTracks] = useState([]);
    const [addTrack, setAddTrack] = useState(false);
    const [deleteTrack, setDeleteTrack] = useState(false);
    const [deletePlaylist, setDeletePlaylist] = useState(false);

    useEffect(() => {
        doApi()
        console.log(addTrack);
        // getplylistData();
      },[])
    
      const doApi = async() => {
        try{
          let url = API_URL+"/trackMyPlylist/"+ location.state?.id
          let resp = await doApiGet(url);
          setTracks(resp.data)
          console.log(resp.data);
        //   setApiError(false)
          
        }
        catch(err){
        //   localStorage.clear();
        //   window.location.href = '/';
          
          console.log(err.response)
      

        }
    }
  return (
    <div className='screen-container'>
      <div className='buttun'><ButtunEditing setAddTrack={setAddTrack} setDeleteTrack={setDeleteTrack} setDeletePlaylist={setDeletePlaylist}/></div>
      <Queue tracks={tracks}  
    /> 
    {addTrack? <AppSearch/>:<div></div>}

      
     </div>
  )
}
