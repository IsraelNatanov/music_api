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



export default function Signup({handleChange} ) {
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
    doApi(_dataBody);


}

const doApi = async(_dataBody)=>{
    console.log(_dataBody);

    let url = "http://localhost:9000/users"

    let resp = await axios.post(url, _dataBody);
    console.log(resp.data);
    if(resp.data._id){
      alert("users added to the system");
      handleChange("event",0)
    // משגר אותו לכתובת שנכניס
   
      
    }
    console.log(data);
    

}
// const trl={trl:Directions}
  const btnstyle={margin:'12px 0'}
  return (
    <Grid>
    <Paper sx={{'& .MuiTextField-root':{m:1 ,width: '32ch'},} } style={paperStyle}>
        <Grid align='center'>
            <Avatar style={avatarStyle}>
                {/* <AddCircleOutlineOutlinedIco /> */}
            </Avatar>
            <h2 style={headerStyle}>Sign Up</h2>
            <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
        </Grid>
        <form onSubmit={handleSubmit(onSub)}>
        {/* <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}> */}
            <TextField  required id="standard-required"  fullWidth label='Name' placeholder="Enter your name" variant="standard" {...register("name",{required:"Required", minLength:3 })}/>
            {/* </ThemeProvider>
          </CacheProvider> */}
            {/* {errors.name && <small className='d-block text-danger'>Enter valid email, min 3 chars</small>} */}
            <TextField required id="standard-required" fullWidth label='Email' placeholder="Enter your email" variant="standard" {...register("email",{required:"Required",pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}/>
            {/* {errors.email && <small className='d-block text-danger'>Enter valid email, min 3 chars</small>} */}
            {/* <FormControl component="fieldset" style={marginTop}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                    <FormControlLabel value="female" control={<Radio/>} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
            </FormControl>
            <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" /> */}
            <TextField  required id="standard-required" fullWidth label='Password' placeholder="Enter your password" variant="standard" {...register("password",{required:"Required", minLength:3})}/>
            {/* {errors.password && <small className='d-block text-danger'>Enter valid passowrd, min 3 chars</small>} */}
            <TextField required id="standard-required" fullWidth label='Confirm Password' placeholder="Confirm your password" variant="standard"  {...register("password2",{required:"Required", validate: value => value == getValues("password")})}/>
            {/* {errors.password2 && <small className='d-block text-danger'>passowrd not eqoul</small>} */}
            {/* <FormControlLabel
                control={<Checkbox name="checkedA" />}
                label="I accept the terms and conditions."
            /> */}
            <Button style={btnstyle} type='submit' variant='contained' color='primary'>Sign up</Button>
        </form>
    </Paper>
</Grid>
  )
}
