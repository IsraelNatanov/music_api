import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { API_URL } from '../../components/services/apiService';
import {Navigate} from "react-router-dom";


export default function Signout() {

  const [navigate, setNavigate] = useState(false);

  
  useEffect(()=>{
    logout()

  },[])

  const logout = async () => {
    localStorage.clear()
 

    let url = API_URL+"/users/logout";
    
    await axios.post(url, {}, {withCredentials: true});
    setNavigate(true);
    if (navigate) {
    return <Navigate to="/login"/>;
}
  
    
    
  }


if (navigate) {
    return <Navigate to="/login"/>;
}
 

  return (
    <div></div>
  )
}
