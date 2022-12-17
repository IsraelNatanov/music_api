import React from 'react'
import { Avatar, Button, Checkbox, createTheme, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import axios from 'axios'
import {useForm} from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider } from 'styled-components';
import { Directions } from '@mui/icons-material';
import { doApiMethod } from '../../components/services/apiService.jsx';
import { API_URL } from '../../components/services/apiService.jsx';
import { useState } from 'react';
import SuccessApi from '../../components/alert/successApi';
import "./error.css";


export default function Signup({handleChange, handleButtonClick} ) {
 
    const theme = createTheme({
        direction: "rtl", 
      });
      
      const cacheRtl = createCache({
        key: "muirtl",
        stylisPlugins: [rtlPlugin],
      });
       
  let {register, getValues, handleSubmit , formState: { errors } } = useForm()
  const paperStyle = { padding: 20, width: 300, height: 500, margin: "0 auto" }
  const headerStyle = { margin: 0 }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const marginTop = { marginTop: 5 }
//  

  const onSub = (_dataBody)=>{
      
    delete _dataBody.password2;
    console.log(_dataBody);
    doApiAdd(_dataBody);


}
const doApiAdd = async(_dataBody) => {
  let url = API_URL+"/users";
  try{
    let resp = await doApiMethod(url,"POST",_dataBody);
    // let data = await resp.json();
    console.log(resp);
    if(resp.data._id){
      handleButtonClick()
      // alert("users added to the system");
      handleChange("event",0)
    // משגר אותו לכתובת שנכניס
   
    console.log(data);
    }

  }
  catch(err){
    console.log(err.response);
    
  }
  
  
}

  const btnstyle={margin:'12px 0'}
  return (
    <Grid>
    <Paper sx={{'& .MuiTextField-root':{margin:'12px 0'},} } style={paperStyle}>
        <Grid align='center'>
            <Avatar style={avatarStyle}>
               
            </Avatar>
            <h2 style={headerStyle}>Sign Up</h2>
            <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
        </Grid>
       
        <form onSubmit={handleSubmit(onSub)}>
          <TextField  required id="standard-required"  fullWidth label='Name' placeholder="Enter your name" variant="standard" {...register("name",{required:"Required", minLength:3 })}/>
            {errors.name && <div className='text-error'>Enter valid name, min 3 chars</div>}
           <TextField required id="standard-required" fullWidth label='Email' placeholder="Enter your email" variant="standard" {...register("email",{required:"Required",pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}/>
            {errors.email && <div className='text-error'>Enter valid email, min 3 chars</div>}
               <TextField  required id="standard-required" fullWidth label='Password' placeholder="Enter your password" type='password' variant="standard" {...register("password",{required:"Required", minLength:3})}/>
            {errors.password && <div className='text-error'>Enter valid passowrd, min 3 chars</div>}
           
            <TextField required id="standard-required" fullWidth label='Confirm Password' placeholder="Confirm your password" type='password' variant="standard"  {...register("password2",{required:"Required", validate: value => value == getValues("password")})}/>
            {errors.password2 && <div className='text-error'>Enter valid passowrd, min 3 chars</div>}
         
            <Button style={btnstyle} type='submit' variant='contained' color='primary'>Sign up</Button>
        </form>
    </Paper>
</Grid>
  )
}
