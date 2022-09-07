import React from 'react'
import { Box, Grid, Paper, Typography } from "@mui/material";
import "./account.css";

import Pay from './pay';
import { useEffect } from 'react';
import { doApiGet } from '../../components/services/apiService.jsX';
import { useState } from 'react';
import { API_URL } from '../../components/services/apiService.jsX';


export default function Account() {
 const [user, setUser ]= useState({});
 const [premium, setPremium] = useState({});
 const [premiumScreen, setPremiumScreen] = useState(true);

 useEffect(() => {
  doApi()
  doApiPremium()

  // getplylistData();
},[])

  const doApi = async() => {
    try{
      let url = API_URL+"/users/userInfo"
      let resp = await doApiGet(url);
      setUser(resp.data)
      
   
    }
    catch(err){
      console.log(err)
     
      
    }
  }
  const doApiPremium = async() => {
    try{
      let url = API_URL+"/payment"
      let resp = await doApiGet(url);
      setPremium(resp.data)
      console.log(resp)
      setPremiumScreen(false)
   
    }
    catch(err){
      console.log(err)
     
      
    }
  }


  const paperStyle={width:500,height:200,padding:"0 auto", margin: 15}
  return (
    
    <div className="App-body">
      
      <Grid item xs={2} sm={4} md={4}>
      <Typography variant="h2" gutterBottom color={'GrayText'} >
        פרטי המשתמש שלך
      </Typography>
      </Grid>
      <Grid container
  direction="row-reverse"
  margin={10}
  justifyContent="center"
  alignItems="center">
    <Paper elevation={20} style={paperStyle} >
        
        
        <Typography variant="h5" gutterBottom marginTop={5} textAlign={"right"} paddingRight={5}>
          {user.name} :שם
        </Typography>
        <Typography variant="h5" gutterBottom textAlign={"right"} paddingRight={5}>
          {user.email} :אימייל רשום
        </Typography>
        {premiumScreen?
        <Typography variant="h5" gutterBottom textAlign={"right"} paddingRight={5}>
          
          סוג חשבון: רגיל 
        </Typography>:
        <Typography variant="h5" gutterBottom textAlign={"right"} paddingRight={5}>
          
          premium :סוג חשבון   
      </Typography>}

        
  
        </Paper>
        {premiumScreen?   
      <Paper elevation={20} style={paperStyle}>
      <Typography variant="h5" gutterBottom marginTop={5} >
      Premium רכישת חשבון 
      </Typography>
      <Typography variant="h5" gutterBottom>
        Price:10$
      </Typography>
        
        
        <Pay />
      </Paper>:
      <div></div>
}

      
      
      </Grid>
      
    </div>
  )
}
