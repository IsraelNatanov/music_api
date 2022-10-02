import axios from 'axios';
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
    const doApiDeleteTrack = async(_dataBody) => {
      console.log("gggigigttgi");
      axios.delete(API_URL+"/trackMyPlylist/"+_dataBody)
        .then(() => this.setState({ status: 'Delete successful' }));
      // let url = API_URL+"/trackMyPlylist/"+_dataBody;
      // try{
      //   let resp = await doApiMethod(url,"DELETE",_dataBody);
      //   console.log(resp);
      // }
      // catch(err){
      //   console.log(err.response);
      //   alert("There error try again later")
      // }
      
      
    }
  
  return (
    <div className='screen-container'>
      <div className='buttun'><ButtunEditing setAddTrack={setAddTrack} setDeleteTrack={setDeleteTrack} setDeletePlaylist={setDeletePlaylist}/></div>
      <Queue tracks={tracks} deleteTrack={deleteTrack} doApiDeleteTrack={doApiDeleteTrack}
    /> 
    {addTrack? <AppSearch/>:<div></div>}
    
   

      
    </div>
  )
}
