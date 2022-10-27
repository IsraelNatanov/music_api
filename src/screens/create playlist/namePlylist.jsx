import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, SvgIcon, TextField } from '@mui/material'
import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CloseIcon from '@mui/icons-material/Close';

import "./namePlylist.css"

import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from "@emotion/cache";

import { SiApplemusic } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { TodoContext } from '../../context/todoContext';
import { useForm } from 'react-hook-form';


const theme = createTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});


export default function NamePlylist( props) {
  
  let { register, handleSubmit, formState: { errors } } = useForm();
  const {namPlylist, addNamePlylist, doApiAdd,  data, setData} = useContext(TodoContext)
  addNamePlylist
 
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      console.log(reason);
      setOpen(false);
      navigate(-1)
      
    }
  };
  const createName = (e)=>{
    addNamePlylist(e.target.value)
    const newDate = {...data}
    newDate[e.target.id] = e.target.value
    setData(newDate)
  }
  const onSub = () => {
      console.log(data);
      setOpen(false);
      
      doApiAdd(data);
    // }
  }
  

  return (
    <div className='name'>
       
      <Dialog disableEscapeKeyDown open={open}  onClose={handleClose} >
      <form onSubmit={handleSubmit(onSub)}>
        
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
          id="name"
          fullWidth label="שם הפלייליסט"
          defaultValue={namPlylist}
          helperText="Some important text"
          {...register("name",{ required:true, minLength:3})}
          onChange={(e) => createName(e) }
         
          
        />
        
        </div>
        </ThemeProvider>
       </CacheProvider>
      
          
          
          </Box>
        </DialogContent>
        <div className='size-icon'>
          {<SiApplemusic/>}
          

          </div>
       
        
        
        
        
     
        </Grid>
        
        <DialogActions>
          <Button sx={{fontSize: "large"}} type='submit'>שמירה</Button>
          {/* <Button onClick={handleClose}>Ok</Button> */}
        </DialogActions>
        </form>
        </Dialog>
      
    </div>
  )
}
