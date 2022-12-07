import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { useNavigate } from 'react-router-dom';
import { MdFavorite } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { BsPlusSquareFill } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { IoMdContact } from "react-icons/io";

export default function RouterPhon(props) {
 
  const nav = useNavigate();

  const arrUrl =['/', '/search', '/createPlaylist', '/myPlaylists', '/library', '/account', '/signout'];
  const navUrl = (id)=>{
    nav(arrUrl[id]);
    props.setSwitchPhon(false);

  }
  return (
    // props.switchPhon
    <div className='position'>
    <Box sx={{ width: '150%',  bgcolor: 'background.paper' }} >
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>navUrl(0)}>
              <ListItemIcon>
                <MdSpaceDashboard />
              </ListItemIcon>
              <ListItemText primary="Artists" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton onClick={()=>navUrl(1)}>
              <ListItemIcon>
                <ImSearch />
              </ListItemIcon>
              <ListItemText primary="Search" />
            </ListItemButton>
            </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>navUrl(2)}>
            <ListItemIcon>
                <BsPlusSquareFill />
              </ListItemIcon>
              <ListItemText primary="New playlist" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>navUrl(3)} >
              <ListItemIcon>
                <MdFavorite />
              </ListItemIcon>
              <ListItemText primary="My playlists" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>navUrl(4)}>
              <ListItemIcon>
                <IoLibrary />
              </ListItemIcon>
              <ListItemText primary="Library" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>navUrl(5)}>
              <ListItemIcon>
                <IoMdContact />
              </ListItemIcon>
              <ListItemText primary="Account" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>navUrl(6)}>
              <ListItemIcon>
                <FaSignOutAlt />
              </ListItemIcon>
              <ListItemText primary="sign out" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      
    </Box>
    </div>
   
  );
}