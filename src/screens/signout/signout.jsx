import React from 'react'
import { useEffect } from 'react'


export default function Signout() {
  useEffect(()=>{
    sign()

  },[])
  const sign= ()=>{
    localStorage.clear();
    window.location.href = '/';

  }

  return (
    <div></div>
  )
}
