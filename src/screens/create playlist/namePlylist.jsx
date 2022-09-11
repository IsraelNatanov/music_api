import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, SvgIcon, TextField } from '@mui/material'
import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ComboBox from '../search/comboBox'
import CloseIcon from '@mui/icons-material/Close';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import { loadCSS } from "fg-loadcss";
import "./namePlylist.css"
import { green } from "@mui/material/colors";
import Icon from "@mui/material/Icon"
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from "@emotion/cache";

import { SiApplemusic } from "react-icons/si";
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});


export default function NamePlylist({setNamePlylist, namePlylist}) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
      
    }
  };
  
  

  return (
    <div className='name'>
      <Dialog disableEscapeKeyDown open={open}  onClose={handleClose} >
      <DialogTitle >
        <Button onClick={handleClose}><CloseIcon /></Button>
        </DialogTitle>
        <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' ,}}>
         
          <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div dir="rtl">
        <TextField
          id="outlined-helperText"
          label="שם הפלייליסט"
          defaultValue={namePlylist}
          helperText="Some important text"
          onChange={(v) => setNamePlylist(v.target.value) }
        />
        </div>
        </ThemeProvider>
    </CacheProvider>
      
        
          {/* <First setAritsts={setAritsts} /> */}
          {/* {aritsts.name}<Two aritsts = {aritsts}/> */}
          
          {/* <First index={2} setSong = {setSong} inputAlbum={inputAlbum}/> */}
          
          
          </Box>
        </DialogContent>
        <div className='size-icon'>
          {<SiApplemusic/>}
          

          </div>
       
        
        
        
        
     
        </Grid>
        
        <DialogActions>
          <Button sx={{fontSize: "large"}} onClick={handleClose}>שמירה</Button>
          {/* <Button onClick={handleClose}>Ok</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  )
}
