import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { Box } from '@mui/system';
import { doApiGet, API_URL } from '../../components/services/apiService.jsX';

import { useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useContext } from 'react';
import { TodoContext } from '../../context/todoContext';
import { useState } from 'react';

export default function ComboBox({setValue ,value}) {

  let [artistss, setArtistss] = React.useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const {data} = useContext(TodoContext)
  const [againIdPlaylist, setAgainIdPlaylist] = useState("")
  
  


  let i = 0;

  useEffect(() => {
    doApi()
    // getplylistData();
  },[])

  const doApi = async() => {
    try{
      let url = API_URL+"/artists"
      let resp = await doApiGet(url);
      setArtistss(resp.data)
      console.log(resp.data);
      
      // if(resp.data){
      //   getplylistData();
      // }
    }
    catch(err){
      // localStorage.clear();
      // window.location.href = '/';
      
      console.log(err.response)
      if (err.response.status === 401) {
        localStorage.clear();
        window.location.href = '/';
      }
      // setApiError(true)
      
      // alert("Please login to be here or token expired");
      // navigate("/account")
      
    }
  }
  // const listArr = async(id)=>{
  //   let resp = await axios.get("http://localhost:9000/artists");
  //   console.log(resp.data)
  
  //   setArtistss(resp.data);
    
    
   
  // }
 
  const playArtists = (value) => {
    setAgainIdPlaylist(data["id"])
 
    console.log("locationvvvv",location)
    if(location?.pathname == "/createPlaylist" || location?.pathname == "/create" ) navigate("/album", { state: { id: value  ,p: "/createPlaylist", idPlylist: data["id"]? data["id"] : location.state.idPlylist}})  
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