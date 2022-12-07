import * as React from 'react';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import { IconButton, } from "@mui/material";
import { doApiGet, API_URL } from '../../components/services/apiService.jsx';
import {useNavigate } from "react-router-dom";
import "./appCreate.css";
import { useState } from 'react';
import AppSearch from '../search/appSearch';
import { useEffect } from 'react';
import NamePlylist from './namePlylist';
import { ImSearch } from "react-icons/im";
import ErrorNoPay from '../../components/alert/errorNoPay';
import {useSelector, useDispatch} from 'react-redux';
import { SiApplemusic } from 'react-icons/si';
import { isTokenProvider } from '../../components/services/isToken.jsx';



export default function AppCreate(props) {


  const [openSearch, setOpenSearch] = React.useState(false);
  const [apiError, setApiError] = useState(false)
  const navigate = useNavigate()
  const Istoken = isTokenProvider()
  const name = useSelector(state => 
    state.name.namePlaylist)


  useEffect(() => {
    if(!Istoken){
      return navigate('/login');
    }
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

  const styleColor ={color:"coral"}
  return (

    <div className="screen-container">
      {apiError?
      <ErrorNoPay/>:
      <div className='column-screen'>
      
        <div className='row-screen'>
      
       
          <div className='icon-music'>
              {<SiApplemusic />}
          </div>
          <Button sx={{fontSize:50 ,marginRight:3,}} style={styleColor} >{name}</Button>
            
          
          <NamePlylist  namPlylist/>
          
        
        </div>
        
        <IconButton sx={{color:"coral"}} onClick={()=> setOpenSearch(true) }>
          חפש זמר <ImSearch /> </IconButton>
        
        {openSearch? <div className='search'><AppSearch /></div>:""}
      </div>
      }
    </div>  
  )
}

