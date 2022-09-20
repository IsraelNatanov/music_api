import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./queue.css";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Button } from "@mui/material";
import { width } from "@mui/system";

export default function Queue({ tracks, setCurrentIndex }) {
  const location = useLocation();
  if(location.state?.type){

  }
  const styleButtun = {color: "white"}

  
  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <div className="row-editing">
        <p className="upNext">Up Next</p>
          {location.state?.type? <Button style={styleButtun} sx={{marginRight:11, height:35 }} variant="outlined" size="small"  endIcon={<BorderColorIcon />}>
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