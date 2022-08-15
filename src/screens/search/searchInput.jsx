import React, { useRef } from 'react'

export default function SearchInput(props) {
  let inputRef = useRef();
  let sortRef = useRef();
  return (
    <div className="screen-container">
      <div className='container bg-warning p-3 color'>
        <div className='container'>
          <div className='row'>

            <div className='col-lg-8 d-flex align-items-center '>
              <input ref={inputRef} placeholder='search...'  type="search" className='form-control w-25' />
              <button onClick={()=>{props.setSearch(inputRef.current.value)}} className='btn btn-dark'>search</button>
              <div className='mx-2'>Sort:</div>
              <select onChange={()=>{
                props.sortList(sortRef.current.value)
              }} ref={sortRef} className='form-select w-25'>
                
                <option value="name">Aritests</option>
                <option value="name">Album</option>
                <option value="name">Track</option>

              </select>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}
//BQDWD_0oNsogUJAJENToMp9djWUU258vk-o9rXyQl1-7F0cKGoc4YH3ushfwNrP7QtAT43G9b59SiUl8AMhX_4g5ACN8w5YkM