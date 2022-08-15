import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import apiClient from '../../spotify';
import { Box } from '@mui/system';
import { ImSearch } from "react-icons/im";
import IconButton from "@mui/material/IconButton";

import { useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';

export default function ComboBox({setValue ,value}) {
  const arr/*artistIds*/ =['70287pcNpILjcpoBl0soPs','54HicbsQOHeibnnFCMtLwl','5eVh2c6WuigJCj1WrHfnd5','5GCh3ZazIVWg8eKb5Akv0q','3VTm1513t2LL1mSKzzyQuj','0NLEL3BBW71Oshh5R7wpJl','3Y0YvS2crBLVS9eA5jX8Ux','5H64fYkQmqjX0bS4bplq8F', '0kF5nmRrCc9oZpAkVbWaUt','4aTDB7CQyMNOLQsCpAS9EW'];
  let [artistss, setArtistss] = React.useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  


  let i = 0;

  React.useEffect(()=>{
    
    for(i; i< arr.length; i++){
      listArr(arr[i]);
    }
 

  },[])

  const listArr = async(id)=>{
    let resp = await apiClient.get(`/artists/${id}`)
    console.log(resp.data)
  
    setArtistss(artistss=> [...artistss, resp.data]);
    
    
   
  }
 
  const playArtists = (value) => {
    console.log("locationvvvv",location)
    if(location?.pathname == "/createPlaylist" || location?.pathname == "/create" ) navigate("/album", { state: { id: value  ,p: "/createPlaylist"}})  
    else navigate("/album", { state: { id: value}})  };
  return (
    <Autocomplete
      
      id="nba_player_demo"
      getOptionLabel={(artistss) =>`${artistss.name}`}
      options={artistss}
      
      onChange={(event, value) => playArtists(value.id)}
      sx={{ m: 1, width: 300 }}
      isOptionEqualToValue={(option, value)=>
        option.name === value.name
      }
      noOptionsText={"לא נמצא"}
      renderOption={(props, artistss)=>(
        <Box component="li" {...props} key={artistss.id}>
          {artistss.name}
        </Box>
        
      )}
      renderInput={(params) => 
        
      <TextField {...params} 
        label="חפש זמר" 
        
       
        />
        
      }
        

    />
 
    
  );
}