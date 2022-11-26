import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/system';
import { doApiGet, API_URL } from '../../components/services/apiService.jsx';
import { useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';

export default function ComboBox() {

  let [artistss, setArtistss] = React.useState([]);
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    doApi()
    
  },[])

  const doApi = async() => {
    try{
      
      let url = API_URL+"/artists"
      let resp = await doApiGet(url);
      setArtistss(resp.data)
      console.log(resp.data);
      
   
    }
    catch(err){

      
      console.log(err.response)
      if (err.response.status === 401) {
        localStorage.clear();
        window.location.href = '/';
      }
     
      
    }
  }

  const playArtists = (value) => {
   
    
 
    console.log("locationvvvv",location)
    
    if(location?.pathname == "/createPlaylist" || location?.pathname == "/create" ){

     navigate("/album", { state: { id: value  ,p: "/createPlaylist",}})  
    }
    else if(location?.pathname =="/editingPlaylist") {
      navigate("/album", {state: { id: value  ,e: "/editingPlaylist"}})
    }
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