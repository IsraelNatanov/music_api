
import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from '../../components/sidebar';
import { setClientToken } from '../../spotify';
import Artists from '../artists';
import Login from '../auth/login';
import Library from '../labrary';
import MyPlaylists from '../My playlists';
import Player from '../player';
import './Home.css'
import {sortBy} from 'lodash'
import PlayerSingel from '../artists/playerSingel';
import Album from '../artists/album';
import CreatePlaylist from '../create playlist/appcreate';
import AppSearch from '../search/appSearch';
import Create from '../create playlist/create';
import ComboBox from '../search/comboBox';



export default function Home() {
  const [token, setToken] = useState("");
  

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

  return !token ? (
    <Login />
  ) : (
  
    <Router>
     
        <div className='main-body'>
          
          
            <Sidebar/>
            <Routes>

                <Route path='/' element={<Library/>}/>
                <Route path='/artists' element={<Artists/>}/>
                <Route path='/createPlaylist' element={<CreatePlaylist/>}/>
                <Route path='/player' element={<Player/>}/>
                <Route path='/myPlaylists' element={<MyPlaylists/>}/>
                <Route path='/playerSingel' element={<PlayerSingel/>}/>
                <Route path='/album' element={<Album/>}/>
                <Route path='/search' element={<AppSearch/>}/>
                <Route path='/create' element={<Create/>}/>
                <Route path='/comboBox' element={<ComboBox/>}/>
                
                

            </Routes> 
        </div>
        
 
    </Router>
  )
}
