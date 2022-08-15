import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import APIKit from "../../spotify";
import FilterSearch from './filterSearch';
import SearchAppBar from './search';
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";

import First from './first';


export default function AppSearch() {

  
  return (
    <div className="screen-container">
     <FilterSearch/>
 
     
    

    </div>

  );
}