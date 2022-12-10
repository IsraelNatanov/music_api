import React from 'react'
import { useSelector } from 'react-redux';

export const isTokenProvider = ()=>{

    if(localStorage.getItem('token') != null){
        return true;
    }
    return false;
}


