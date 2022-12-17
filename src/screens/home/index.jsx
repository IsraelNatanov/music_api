import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Sidebar from '../../components/sidebar';
import MenuIcon from "@mui/icons-material/Menu";
import Artists from '../artists';
import Login from '../auth/login';
import Library from '../labrary';
import MyPlaylists from '../My playlists';
import Player from '../player';
import './Home.css'
import Album from '../artists/album';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppSearch from '../search/appSearch';
import Create from '../create playlist/create';
import ComboBox from '../search/comboBox';
import Account from '../account/my account';
import Signout from '../signout/signout';
import NamePlylist from '../create playlist/namePlylist';
import CreatePlaylist from '../create playlist';
import EditingPlaylist from '../editingPlaylist/EditingPlaylist';
import { IconButton } from '@mui/material';
import RouterPhon from './RouterPhon';
import { API_URL, doApiMethod, refrchToken } from '../../components/services/apiService.jsx';
import { useDispatch} from 'react-redux';
import {isToken} from '../../features/tokenData';
import Page404 from './page404';
import { isTokenProvider } from '../../components/services/isToken';



export default function Home() {

  const [switchPhon, setSwitchPhon] = useState(false);
  const ACCESS_TOKEN_EXPIRES_TIME = 1000 * 20; 
  const dispatch = useDispatch();
  const Istoken = isTokenProvider()
  
  
  
 
  useEffect(()=>{
    if(localStorage.getItem('token') != null){
      dispatch(isToken())
    }

    
    const intervalId = setInterval(() => {
      refrchToken();
      
    }, ACCESS_TOKEN_EXPIRES_TIME);
    if(localStorage.getItem('token') != null){
      return () => clearInterval(intervalId);
    }
    

  },[])
  

  


  return (
  
    <Router>
      <div className='burger'><Box sx={{ flexGrow: 1 }}>
        
      <AppBar  sx={{ backgroundColor: "coral"}} position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={()=>setSwitchPhon(!switchPhon)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
           AI Music
          </Typography>
        </Toolbar>
      </AppBar>
    </Box></div>
    <div className='position'>{switchPhon? <RouterPhon setSwitchPhon={setSwitchPhon}/>:""}</div>
        <div className='main-body'>
          
          
            <div className='nav'><Sidebar/></div>
           
            <Routes>

                <Route path='/library' element={<Library/>}/>
                <Route path='/' element={<Artists />}/>
                <Route path='/createPlaylist' element={<CreatePlaylist/>}/>
                <Route path='/player' element={<Player/>}/>
                <Route path='/myPlaylists' element={<MyPlaylists/>}/>
                <Route path='/album' element={<Album/>}/>
                <Route path='/search' element={<AppSearch/>}/>
                <Route path='/create' element={<Create/>}/>
                <Route path='/comboBox' element={<ComboBox/>}/>
                <Route path='/account' element={<Account/>}/>
                <Route path='/signout' element={<Signout/>}/>
                <Route path='/namePlylist' element={<NamePlylist/>}/>
                <Route path='/editingPlaylist' element={<EditingPlaylist/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='*' element={<Page404/>}/>
                
                
                

            </Routes> 
        </div>
        
 
    </Router>
  )
}
