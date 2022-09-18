
import React, { useContext, useState } from 'react'
import { TodoContext } from '../../context/todoContext';

import FilterSearch from './filterSearch';



export default function AppSearch(props) {
  const {namPlylist} = useContext(TodoContext)
  console.log(namPlylist);
  const id_plylist = props.id_plylist;
  return (
    <div className="screen-container">
     <FilterSearch />
 
     
    

    </div>

  );
}