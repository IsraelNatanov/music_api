import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Queue from '../../components/queue';
import { doApiDelete } from '../../components/services/apiService.jsX';
import { doApiGet, API_URL } from '../../components/services/apiService.jsX';
import AppSearch from '../search/appSearch';
import ButtunEditing from './buttunEditing';
import {useSelector, useDispatch} from 'react-redux';
import {addIdFotEditing} from '../../features/editingPolaylsitUser';
import "./editing.css";

export default function EditingPlaylist() {
    const location = useLocation();
    
    const [tracks, setTracks] = useState([]);
    const [tracksPlaylist, setTracksPlaylist] = useState("");
    const [addTrack, setAddTrack] = useState(false);
    const [deleteTrack, setDeleteTrack] = useState(false);
    const [deletePlaylist, setDeletePlaylist] = useState(false);
    const [updetDelete, setUpdetDelete] = useState(false);
    const dispatch = useDispatch()


    useEffect(() => {
      dispatch(addIdFotEditing(location.state?.id))
        doApi()
        
        
       
      },[])
    
      const doApi = async() => {
      
        try{
          
          setUpdetDelete(true)
          let url = API_URL+"/trackMyPlylist/"+ location.state?.id
          let resp = await doApiGet(url);
          setTracks(resp.data)
          console.log(resp.data[0].id_plylist)
          setTracksPlaylist(resp.data[0].id_plylist)
          
          
          
          
          
          
        }
        catch(err){
        
          
          console.log(err.response)
      

        }
    }
 
    
    
    const doApiDeleteTrack = async(_dataBody) => {
      
      let url = API_URL+"/trackMyPlylist/"+_dataBody;
      try{
        let resp = await doApiDelete(url,"DELETE");
        
        
        
        if(resp.data.deletedCount == 1){
          
          doApi()
        }
      }
      catch(err){
        console.log(err.response);
        alert("There error try again later")
      }
        
    }
  
  return (
    <div className='screen-container'>
      <div className='buttun' ><ButtunEditing setAddTrack={setAddTrack} setDeleteTrack={setDeleteTrack} setDeletePlaylist={setDeletePlaylist}/></div>
      <div className='list'> <Queue tracks={tracks} deleteTrack={deleteTrack} doApiDeleteTrack={doApiDeleteTrack}/> </div>
    {addTrack? <AppSearch/>:<div></div>}
     
    </div>
  )
}
