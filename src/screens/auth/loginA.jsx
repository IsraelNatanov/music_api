import React from 'react'
import { Avatar, Button, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import { CheckBox } from '@mui/icons-material'
import {useForm} from "react-hook-form"
import { useNavigate } from 'react-router-dom';



// import LockOutlinedIcon from '@mui/icons-material';

export default function LoginA({handleChange}) {
  
 
  let {register , handleSubmit , formState: { errors } } = useForm()

 
  const onSub = (_dataBody)=>{
    console.log(_dataBody);
    doApi(_dataBody);


}

const doApi = async(_dataBody)=>{
    let url = "http://localhost:9000/users/login"

    let resp = await fetch(url, {
      method:"POST",
      body:JSON.stringify(_dataBody),
      headers: { 'content-type': "application/json"
     }
    
    })
    let data = await resp.json();
    console.log(data);
    if(data.token){
      window.localStorage.setItem("token", data.token);
      window.location.reload(false);
    }

}

  
  
  const paperStyle={padding :20,height:500,width:300, margin:"0 auto"}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const btnstyle={margin:'30px 0'}
  return (
    <Grid>
    <Paper sx={{'& .MuiTextField-root':{m:1 ,width: '32ch'},} } style={paperStyle}>
        <Grid align='center'>
             <Avatar style={avatarStyle}></Avatar>
            <h2>Sign In</h2>
        </Grid>
        <form onSubmit={handleSubmit(onSub)}>
        <TextField required id="standard-required" label='Username' placeholder='Enter username' fullWidth variant="standard" {...register("email",{required:true,pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})} />
        <TextField required id="standard-required"  label='Password' placeholder='Enter password' type='password' fullWidth variant="standard" {...register("password",{ required:true, minLength:3})} />
        {/* <FormControlLabel 
            control={
            <CheckBox
                name="checkedB"
                color="primary"
            />
            }
            label="Remember me"
         /> */}
        <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
        </form>
        {/* <Typography >
             <Link href="#" >
                Forgot password ?
        </Link>
        </Typography> */}
        <Typography > Do you have an account ?
             <Link href="#" onClick={()=>handleChange("event",1)} >
                Sign Up 
        </Link>
        </Typography>
    </Paper>
</Grid>
  )
}
