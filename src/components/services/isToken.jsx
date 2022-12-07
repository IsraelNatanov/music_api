import React from 'react'
import { useSelector } from 'react-redux';

export const isTokenProvider = ()=>{

    const token = useSelector(state => 
        state.token.tokenResponse)

    if(token){   
        return true;
    }
    return false;
}


