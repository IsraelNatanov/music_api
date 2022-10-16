import React, { useEffect, useState } from 'react'
import ErrorNoPay from '../../components/alert/errorNoPay';
import { doApiGet, API_URL } from '../../components/services/apiService.jsX';
import ListPlaylist from './listPlaylist';

export default function ApiPlaylis() {
    const [apiError, setApiError] = useState(false)
  const [play, setPlay] = useState([]);
  const [legth, setLength] = useState(false);
  
  

  let i = 0;
  useEffect(() => {
    doApi()
    // getplylistData();
  },[])

  const doApi = async() => {
    try{
      let url = API_URL+"/myPlylist"
      let resp = await doApiGet(url);
      if(resp.data.length==0){
        setLength(true)

      }
     
      setPlay(resp.data)
      console.log(resp.data);
      setApiError(false)
      // if(resp.data){
      //   getplylistData();
      // }
    }
    catch(err){
      if (err.response.status === 401) {
        localStorage.clear();
        window.location.href = '/';
      }
      setApiError(true)

      
      console.log(err.response)
      // setApiError(true)
      
      // alert("Please login to be here or token expired");
      // navigate("/account")
      
    }
  }

  return (
    <div className="library-body">
     
        {play?.map((item) => {
           return (
            <ListPlaylist key={item.id} item={item}/>
            )
           })}
           
 
    </div>
  )
}
