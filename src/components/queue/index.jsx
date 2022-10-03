import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./queue.css";
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Button, IconButton } from "@mui/material";
import { width } from "@mui/system";
import EditingPlaylist from "../../screens/editingPlaylist/EditingPlaylist";

export default function Queue(props) {
  const location = useLocation();
  const [click, setClick] = useState(false);
  const nav = useNavigate();
  if(location.state?.type){

  }
  const tracks = props.tracks;
  const setCurrentIndex = props.setCurrentIndex;
  const styleButtun = {color: "white"}

  const navEditing = ()=>{
    console.log("sss", location);
    nav('/editingPlaylist',{ state: { id: location.state?.id}})

  }
  const clickIndex =(id,index)=>{
    setCurrentIndex(index)
    props.doApiDeleteTrack(id)
  }
  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <div className="row-editing">
        <p className="upNext">Up Next</p>
          {location.state?.type? <Button style={styleButtun} sx={{ height:35 }} 
          variant="outlined" size="small"  endIcon={<BorderColorIcon />} onClick={navEditing}>
        עריכת פלייליסט
      </Button> : <div></div> }
      
        </div>
      
        
        <div className="queue-list">
          {tracks?.map((track, index) => (
            <div
              key={index + "key"}
              className="queue-item flex"
              onClick={() => setCurrentIndex(index)}
              
            >
              {props.deleteTrack && <IconButton onClick={() => props.doApiDeleteTrack(track?.id)}><DeleteIcon /></IconButton>}
            
              <p>0:30</p>
              {track?.track?
                <p className="track-name" >
                {track?.track?.name}
                </p>:
                
                <p className="track-name" >
                {track?.name}
                </p>
              } 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}