import * as React from 'react';

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import { Card, colors, TextField } from "@mui/material";



import { useState } from 'react';
import AppSearch from '../search/appSearch';
import { useEffect } from 'react';
import ComboBox from '../search/comboBox';
import { useRef } from 'react';
import { color } from '@mui/system';
// import {} from '.../createContext/TodoContext'


export default function AppCreate() {
  const [img, setImg] = useState("https://i.scdn.co/image/ab67616d0000b273ff77c8143bec4c7801d85219")
  const [open, setOpen] = React.useState(true);
  const [age, setAge] = React.useState('');
  const [ value, setValue] = useState("");
  const [ idNamePlylist, setIdNamePlylist] = useState("");
  const nameRef = useRef();

  useEffect(()=>{
    

  },[])

  const handleChange = (event) => {
    setAge(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };
  const valueNamePlylist = ()=>{
    
    setIdNamePlylist(Date.now())
 

  }
  return (
    <div className="screen-container">
     
      
       <Paper
      sx={{
        p: 3,
        margin: "auto",
        marginTop: 5,
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff"
      }}
    >
      <Grid container spacing={15} >
        <Grid item></Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="row" spacing={2}>
            <Grid item xs>
            
              <TextField
                label="שם הפלייליסט"
                id="filled-size-small"
                defaultValue=""
                variant="filled"
                size="small"
                
                onChange={(v) => setValue(v.target.value) }
              
                
                
              />
              <Button variant="contained" size="large" onClick={valueNamePlylist}>
                 שמירה
              </Button>
              <h1>{value}</h1>
              <h1>{idNamePlylist}</h1>
            </Grid>
            <Grid item xs container direction="row" spacing={1}>
             
            <ComboBox/>
            </Grid>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Grid>
    </Paper>
    </div>
      
      
      
   
  )
}

