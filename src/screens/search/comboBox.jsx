import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { Box } from '@mui/system';


import { useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';
import axios from 'axios';

export default function ComboBox({setValue ,value}) {

  let [artistss, setArtistss] = React.useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  


  let i = 0;

  React.useEffect(()=>{
    listArr();
 

  },[])

  const listArr = async(id)=>{
    let resp = await axios.get("http://localhost:9000/artists");
    console.log(resp.data)
  
    setArtistss(resp.data);
    
    
   
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