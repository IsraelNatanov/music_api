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
      
      
    }
  }

 
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
    
      
      >
      
        <Grid
        container
        direction="row-reverse"
        justifyContent="center"
        alignItems="center" 
        
        >
          <div className='icon-music'>
              {<SiApplemusic />}
                  

          </div>
          <Button sx={{fontSize:50 ,marginRight:3,}} style={styleColor} >{namPlylist}</Button>
            
          
          <NamePlylist  namPlylist/>
          
        </Grid>
        <Grid
        container
        direction="row"
      
            
        width={600}
        borderBottom={2}
        borderColor="coral"
            
            paddingBottom={13}
            
           
        >

        </Grid>
        <Grid 
         
        paddingTop={25}
        >
          <IconButton sx={{color:"coral"}} onClick={()=> 
         
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


    </div>
      
      
      
   
  )
}

