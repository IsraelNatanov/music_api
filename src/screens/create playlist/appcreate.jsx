import * as React from 'react';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import { Alert, Card, colors, Icon, IconButton, Stack, TextField } from "@mui/material";
import { doApiGet, API_URL } from '../../components/services/apiService.jsX';
import { useLocation,useNavigate } from "react-router-dom";
import { SiApplemusic } from "react-icons/si";
import "./appCreate.css";
import { useState } from 'react';
import AppSearch from '../search/appSearch';
import { useEffect } from 'react';
import ComboBox from '../search/comboBox';
import { useRef } from 'react';
import NamePlylist from './namePlylist';
import { ImSearch } from "react-icons/im";
import { useContext } from 'react';
import { TodoContext } from '../../context/todoContext';
// import {} from '.../createContext/TodoContext'


export default function AppCreate(props) {
  const {namPlylist} = useContext(TodoContext)
  const navigate = useNavigate();
  const [img, setImg] = useState("https://i.scdn.co/image/ab67616d0000b273ff77c8143bec4c7801d85219")
  const [open, setOpen] = React.useState(true);
  const [openSearch, setOpenSearch] = React.useState(false);
  const [age, setAge] = React.useState('');
  const [ value, setValue] = useState("");
  const [ idNamePlylist, setIdNamePlylist] = useState("");
  const [apiError, setApiError] = useState(false)
  const nameRef = useRef();
  const [openNamePlylist, setOpenNamePlylist] = useState(false);
  const location = useLocation();

  useEffect(() => {
    doApi();
  },[])

  const doApi = async() => {
    try{
      let url = API_URL+"/payment"
      let resp = await doApiGet(url);
      setApiError(false)
      
      
    }
    catch(err){
      console.log(err.response)
      setApiError(true)
      // alert("Please login to be here or token expired");
      // navigate("/account")
      
    }
  }

  // const handleChange = (event) => {
  //   setAge(Number(event.target.value) || '');
  // };

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = (event, reason) => {
  //   if (reason !== 'backdropClick') {
  //     setOpen(false);
  //   }
  // };
  // const valueNamePlylist = ()=>{
    
  //   setIdNamePlylist(Date.now())
 

  // }
  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
      setOpenNamePlylist(false)
      
    }
  };
  const nameopenplylist = ()=>{
    setOpenNamePlylist(true)
  }
 
  const styleColor ={color:"coral"}
  return (

    <div className="screen-container">
      {apiError?
      <Stack sx={{ width: '100%' ,alignItems: "center", paddingTop: "25%"}} spacing={2}>
      
      <Alert severity="warning"
        action={
          <Button color="inherit" size="small" onClick={()=>navigate("/account")}>
            click
          </Button>
        }
      >
        You are not a premium customer and therefore you are not allowed to enter here!
      </Alert>
    </Stack>:
      <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      paddingTop={10}
      // paddingRight={10}
      
      >
      
        <Grid
        container
        direction="row-reverse"
        justifyContent="center"
        alignItems="center" 
            // paddingRight={15}
            // paddingBottom={15}
            
          
            
            
            
            
        >
          <div className='icon-music'>
              {<SiApplemusic />}
                  

          </div>
          <Button sx={{fontSize:50 ,marginRight:3,}} style={styleColor} >{namPlylist}</Button>
            
          {/* {openNamePlylist?  */}
          <NamePlylist  namPlylist/>
          {/* : */}
          {/* <div></div>
          } */}
        </Grid>
        <Grid
        container
        direction="row"
        // justifyContent="flex-end"
            
        width={600}
        borderBottom={2}
        borderColor="coral"
            
            paddingBottom={13}
            // marginRight={15}
            // paddingt={13}
           
        >

        </Grid>
        <Grid 
        // marginRight={15} 
        paddingTop={25}
        >
          <IconButton sx={{color:"coral"}} onClick={()=> 
          // navigate("/search", { state: { idNamePlylist: "2563" },})
            setOpenSearch(true)
            }>
          חפש זמר<ImSearch />
          </IconButton>
        </Grid>
        {openSearch? 
        <div className='search'><AppSearch /></div>: 
        <div></div> }


      </Grid>
}


      
       {/* <Paper
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
    </Paper> */}

    </div>
      
      
      
   
  )
}

