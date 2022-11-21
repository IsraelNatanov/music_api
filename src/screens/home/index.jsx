
import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from '../../components/sidebar';
import MenuIcon from "@mui/icons-material/Menu";
import Artists from '../artists';
import Login from '../auth/login';
import Library from '../labrary';
import MyPlaylists from '../My playlists';
import Player from '../player';
import './Home.css'
import PlayerSingel from '../artists/playerSingel';
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



export default function Home() {
  const [token, setToken] = useState("");
  const [switchPhon, setSwitchPhon] = useState(false);
  

  useEffect(() => {
    const _token = window.localStorage.getItem("token");
    setToken(_token)
    
      
      
      // window.localStorage.setItem("token", _token);
      // setToken(_token);
      // console.log(_token)
      // setClientToken(_token);
    // } else {
    //   setToken(token);
      
    //   setClientToken(token);
    // }
  }, []);

  return  (
  
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
                <Route path='/' element={<Artists/>}/>
                <Route path='/createPlaylist' element={<CreatePlaylist/>}/>
                <Route path='/player' element={<Player/>}/>
                <Route path='/myPlaylists' element={<MyPlaylists/>}/>
                <Route path='/playerSingel' element={<PlayerSingel/>}/>
                <Route path='/album' element={<Album/>}/>
                <Route path='/search' element={<AppSearch/>}/>
                <Route path='/create' element={<Create/>}/>
                <Route path='/comboBox' element={<ComboBox/>}/>
                <Route path='/account' element={<Account/>}/>
                <Route path='/account' element={<Account/>}/>
                <Route path='/signout' element={<Signout/>}/>
                <Route path='/namePlylist' element={<NamePlylist/>}/>
                <Route path='/editingPlaylist' element={<EditingPlaylist/>}/>
                <Route path='/login' element={<Login/>}/>
                
                
                

            </Routes> 
        </div>
        
 
    </Router>
  )
}
