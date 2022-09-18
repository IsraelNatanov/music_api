import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { doApiGet } from '../../components/services/apiService.jsX';
import { API_URL } from '../../components/services/apiService.jsX';



export default function CheckP() {
  const nav = useNavigate();

  useEffect(() => {
    doApi();
  },[])

  const doApi = async() => {
    try{
      let url = API_URL+"/payment"
      let resp = await doApiGet(url);
      
      if(resp.data){
        logOutAdmin("You must be admin to be here" );
      }
    }
    catch(err){
      if (err.response.status === 401) {
        localStorage.clear();
        window.location.href = '/';
      }
      console.log(err.response)
      logOutAdmin("Please login to be here or token expired");
      
    }
  }

  const logOutAdmin = (_msg, navigate ) => {
    alert(_msg);
    
  }

  return (
    <React.Fragment></React.Fragment>
  )
}
