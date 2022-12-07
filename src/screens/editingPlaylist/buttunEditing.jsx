import { Button, colors, Divider, Stack } from '@mui/material'
import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { color, fontStyle } from '@mui/system';
import "./buttunEditing.css"
import { doApiMethod } from '../../components/services/apiService.jsx';
import { API_URL } from '../../components/services/apiService.jsx';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { doApiDelete } from '../../components/services/apiService.jsx';


export default function ButtunEditing(props) {
  const nav = useNavigate();
  const setAddTrack = props.setAddTrack;
  const setDeleteTrack = props.setDeleteTrack;
  const setDeletePlaylist = props.setDeletePlaylist;
  const [ isAlertVisible, setIsAlertVisible ] = React.useState(false);
  const location = useLocation();

  const clickDeleteTrack = () => {
    setDeleteTrack(true)
    setIsAlertVisible(true);

    // setTimeout(() => {
    // setIsAlertVisible(false);
    // }, 3000);
  }
  const clickAddTrack = ()=>{
    setAddTrack(true)
    setDeleteTrack(false)
    setIsAlertVisible(false);
    
  }
  // const clickDeletePlaylist=()=>{
  //   setDeletePlaylist(true)
  //   setDeleteTrack(false)
  //   setIsAlertVisible(false);
    

  // }
  console.log(location.state);

  const doApiDeletePlaylist = async() => {
    setDeletePlaylist(true)
    setDeleteTrack(false)
    setIsAlertVisible(false);
    let url = API_URL+"/myPlylist/"+location.state.id
    try{
      let resp = await doApiDelete(url,"DELETE");
      if(resp.data.deletedCount == 1){
        
        nav('/myPlaylists');
      }
    }
    catch(err){
      console.log(err.response);
      alert("There error try again later")
    }
    
    
  }

  return (
    <div>
    <Stack direction="row-reverse" alignItems={'center'} justifyContent={'center'} textAlign={'center'} spacing={2} margin={1} > 
        <Button  variant="text" size="large" sx={{color:'white'}}  endIcon={<AddIcon />} onClick={()=>clickAddTrack()}>
        הוסף שירים
      </Button>
      <Button variant="text" size="large" sx={{color:'white'}} endIcon={<DeleteIcon />} onClick={()=>clickDeleteTrack()}>
         מחק שירים
      </Button>
      <Button variant="text" size="large" sx={{color:'white'}}  endIcon={<DeleteForeverIcon  />} onClick={()=>doApiDeletePlaylist()}>
        מחק פלייליסט
      </Button>
      </Stack>
       <div className='color-delete'>{isAlertVisible? <p>בחר שירים למחיקה</p>: <p></p>}</div>
  </div>
  )
}
