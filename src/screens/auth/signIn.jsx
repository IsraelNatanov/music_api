import React from 'react'
import { Avatar, Button, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import {useForm} from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { doApiMethod } from '../../components/services/apiService.jsx';
import { API_URL } from '../../components/services/apiService.jsx';
import axios from 'axios';
import { useDispatch} from 'react-redux';
import {isToken} from '../../features/tokenData';
import { useState } from 'react';
import "./error.css";



export default function SignIn({handleChange}) {

  const nav = useNavigate()
  const dispatch = useDispatch()
  const [errorLogin ,setErrorLogin] = useState(false);
  
 
  let {register , handleSubmit , formState: { errors } } = useForm()

 
  const onSub = (_dataBody)=>{
    console.log(_dataBody);
    doApiAdd(_dataBody);


}
const doApiAdd = async(_dataBody) => {
  let url = API_URL+"/users/login";
  try{
    
    const {data} = await axios.post(url, _dataBody, {withCredentials: true});
    if(data.token){
      window.localStorage.setItem("token", data.token);
      // dispatch(isToken())
      nav("/")

      // window.location.reload(false);
    }
  }
  catch(err){
    setErrorLogin(true)
    console.log(err.response);
    
  }
  
  
}

  
  const paperStyle={padding :20,height:500,width:300, margin:"0 auto"}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const btnstyle={margin:'30px 0'}
  return (
    <Grid>
    <Paper sx={{'& .MuiTextField-root':{margin:'12px 0'},} } style={paperStyle}>
        <Grid align='center'>
             <Avatar style={avatarStyle}></Avatar>
            <h2>Sign In</h2>
        </Grid>
        <form onSubmit={handleSubmit(onSub)}>
        <TextField required id="standard-required" label='Username' placeholder='Enter username' fullWidth variant="standard" 
        {...register("email",{required:true,pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}/>
        {errors.email && <div className='text-error'>Enter valid email, min 3 chars</div>}
        <TextField required id="standard-required"  label='Password' placeholder='Enter password' type='password' fullWidth variant="standard" {...register("password",{ required:true, minLength:3})} />
        {errors.password && <div className='text-error'>Enter valid passowrd, min 3 chars</div>}
        <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
        {errorLogin && <div className='text-error'>Username or password is incorrect, please try again</div>}
        </form>
   
        <Typography > Do you have an account ?
             <Link href="#" onClick={()=>handleChange("event",1)} >
                Sign Up 
        </Link>
        </Typography>
    </Paper>
</Grid>
  )
}
