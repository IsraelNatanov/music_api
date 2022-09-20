import React, { useState } from 'react'
import { doApiMethod } from '../../components/services/apiService.jsX';
import { API_URL } from '../../components/services/apiService.jsX';
import { TodoContext } from '../../context/todoContext'

import AppCreate from './appcreate'
import ListSong from './listSong';
export default function CreatePlaylist() {
  const [ namPlylist, setNamPlylist] = useState("הפלייליסט שלי");
 
  const [data, setData] = useState({
    id: Date.now(),
    name: namPlylist
  })

  const addNamePlylist = (name)=>{
    setNamPlylist(name)

  }
  const doApiAdd = async(_dataBody) => {
    let url = API_URL+"/myPlylist";
    try{
      let resp = await doApiMethod(url,"POST",_dataBody);
      if(resp.data._id){
        
        // nav("/admin/categories");
      }
    }
    catch(err){
      console.log(err.response);
      alert("There error try again later")
    }
    
    
  }
  
  // const onSub = (_dataBody) => {
  //   console.log(_dataBody);
  //   doApiAdd(_dataBody);
  // }
  return (
    <TodoContext.Provider value={{
      namPlylist,
      addNamePlylist,
      doApiAdd,
      data,
      setData,
      
      }}>
      <AppCreate/>
      
    </TodoContext.Provider>
  )
}