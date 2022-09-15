
import React, { useContext, useState } from 'react'
import { TodoContext } from '../../context/todoContext';

import FilterSearch from './filterSearch';



export default function AppSearch() {
  const {namPlylist} = useContext(TodoContext)
  console.log(namPlylist);
  
  return (
    <div className="screen-container">
     <FilterSearch/>
 
     
    

    </div>

  );
}