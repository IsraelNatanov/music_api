
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

import AppSearch from '../search/appSearch';
import Create from '../create playlist/create';
import ComboBox from '../search/comboBox';

import Account from '../paypal/my account';
import Signout from '../signout/signout';
import NamePlylist from '../create playlist/namePlylist';
import CreatePlaylist from '../create playlist';
import EditingPlaylist from '../editingPlaylist/EditingPlaylist';



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

  return  (
  
    <Router>
     
        <div className='main-body'>
          
          
            <Sidebar/>
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
