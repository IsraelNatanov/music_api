import * as React from 'react';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import { IconButton, } from "@mui/material";
import { doApiGet, API_URL } from '../../components/services/apiService.jsX';
import {useNavigate } from "react-router-dom";
import "./appCreate.css";
import { useState } from 'react';
import AppSearch from '../search/appSearch';
import { useEffect } from 'react';
import NamePlylist from './namePlylist';
import { ImSearch } from "react-icons/im";
import { useContext } from 'react';
import { TodoContext } from '../../context/todoContext';
import ErrorNoPay from '../../components/alert/errorNoPay';
import {useSelector, useDispatch} from 'react-redux';
import { SiApplemusic } from 'react-icons/si';



export default function AppCreate(props) {

  const [open, setOpen] = React.useState(true);
  const [openSearch, setOpenSearch] = React.useState(false);
  const [apiError, setApiError] = useState(false)
  const [openNamePlylist, setOpenNamePlylist] = useState(false);


  const name = useSelector(state => 
    state.name.namePlaylist)
  const dispatch = useDispatch();

  useEffect(() => {
    doApi();
  },[])

  const doApi = async() => {
    try{
      let url = API_URL+"/payment"
      let resp = await doApiGet(url);
      setApiError(false)
      
      
    }
    catch(err){
      console.log(err.response)
      setApiError(true)
      
      
    }
  }

 
  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
      setOpenNamePlylist(false)
      
    }
  };
  const nameopenplylist = ()=>{
    setOpenNamePlylist(true)
  }
 
  const styleColor ={color:"coral"}
  return (

    <div className="screen-container">
      {apiError?
      <ErrorNoPay/>:
      <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      paddingTop={10}
    
      
      >
      
        <Grid
        container
        direction="row-reverse"
        justifyContent="center"
        alignItems="center" 
        
        >
          <div className='icon-music'>
              {<SiApplemusic />}
                  

          </div>
          <Button sx={{fontSize:50 ,marginRight:3,}} style={styleColor} >{name}</Button>
            
          
          <NamePlylist  namPlylist/>
          
        </Grid>
        <Grid
        container
        direction="row"
      
            
        width={600}
        borderBottom={2}
        borderColor="coral"
            
            paddingBottom={13}
            
           
        >

        </Grid>
        <Grid 
         
        paddingTop={25}
        >
          <IconButton sx={{color:"coral"}} onClick={()=> 
         
            setOpenSearch(true)
            }>
          חפש זמר<ImSearch />
          </IconButton>
        </Grid>
        {openSearch? 
        <div className='search'><AppSearch /></div>: 
        <div></div> }


      </Grid>
}


    </div>
      
      
      
   
  )
}

