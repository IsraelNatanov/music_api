import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, SvgIcon, TextField } from '@mui/material'
import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useSelector, useDispatch} from 'react-redux';
import {addNmae, addId} from '../../features/createPlaylistUser';
import CloseIcon from '@mui/icons-material/Close';
import { doApiMethod } from '../../components/services/apiService.jsx';
import { API_URL } from '../../components/services/apiService.jsx';
import "./namePlylist.css"
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from "@emotion/cache";
import { SiApplemusic } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { BsPencil } from "react-icons/bs";
import { useState } from 'react';


const theme = createTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});


export default function NamePlylist( props) {
  const id_playlist = useSelector((state) => 
    state.name.idPlaylist)
  const name_playlist = useSelector((state) => 
  state.name.namePlaylist)  
  const dispatch = useDispatch();
  
  let { register, handleSubmit, formState: { errors } } = useForm();

 
 
  const [open, setOpen] = React.useState(true);
  let [img,setImg] = useState("https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&w=600")
  let [img1,setImg1] = useState("")

  const navigate = useNavigate();
  React.useEffect(()=>{
    dispatch(addNmae({nameFromUser:"הפלייליסט שלי"}))


  },[])

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      console.log(reason);
      setOpen(false);
      navigate(-1)
      
    }
  };
  const doApiAdd = async(_dataBody) => {
    let url = API_URL+"/myPlylist";
    try{
      let resp = await doApiMethod(url,"POST",_dataBody);
      if(resp.data._id){
        console.log("ppp");
        
       
      }
    }
    catch(err){
      console.log(err.response);
      alert("There error try again later")
    }
    
    
  }
  const createName = (e)=>{
    dispatch(addNmae({nameFromUser:e.target.value}))
    dispatch(addId({idFromUser:Date.now().toString()}))
    
    
  }
  const onSub = () => {
    console.log("dfsd");
    const dataName = {
      id: id_playlist,
      name: name_playlist,
    }
    console.log(dataName);
    setOpen(false);
    doApiAdd(dataName);
    
  }
  const addImg = (e)=>{
    setImg1(e.target.files[0])
    const fromData = new FormData()
    fromData.append('myFile', img1)
    setImg(fromData['myFile'])

  }
  const inputImgUser=()=>{
    // <div>
    //   <input type="file"  name='file' onChange={addImg}/>
    // </div>
    document.getElementById('select-file').click()

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
          defaultValue={name}
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
          {/* {<SiApplemusic/>} */}
          <img
              src={img}
              className="playlist-image"
              alt="Playlist-Art"
              
            />
            <div className='add-img' onClick={inputImgUser} >
            <input id='select-file' type="file" style={{display:'none'}} name='file' onChange={addImg}/>
              <div className='icon-add-img'>{<BsPencil/>}</div>
              <div className='text-add-img'>הוסף תמונה</div>
            </div>

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
