import React from 'react'
import { Avatar, Button, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import {useForm} from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { doApiMethod } from '../../components/services/apiService.jsx';
import { API_URL } from '../../components/services/apiService.jsx';
import axios from 'axios';




export default function SignIn({handleChange}) {
  const nav = useNavigate()
  
 
  let {register , handleSubmit , formState: { errors } } = useForm()

 
  const onSub = (_dataBody)=>{
    console.log(_dataBody);
    doApiAdd(_dataBody);


}
const doApiAdd = async(_dataBody) => {
  let url = API_URL+"/users/login";
  try{
    // let resp = await doApiMethod(url,"POST",_dataBody,{withCredentials: true});

    // console.log(resp);
    // if(resp.data.token){
    //   window.localStorage.setItem("token", resp.data.token);
    //   nav("/")
    const {data} = await axios.post(url, _dataBody, {withCredentials: true});
    if(data.token){
      axios.defaults.headers.common['Authorization'] = `Bearer ${data['token']}`;
      nav("/")

      // window.location.reload(false);
    }
  }
  catch(err){
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
        <TextField required id="standard-required" label='Username' placeholder='Enter username' fullWidth variant="standard" {...register("email",{required:true,pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})} />
        <TextField required id="standard-required"  label='Password' placeholder='Enter password' type='password' fullWidth variant="standard" {...register("password",{ required:true, minLength:3})} />
    
        <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
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
