import * as React from 'react';
import APIKit from "../../spotify";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import apiClient from '../../spotify';
import { useNavigate } from "react-router-dom";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


export default function First({
  setAritsts,
  // aritsts,
  
  // setInputAlbum,
  // inputAlbum,
  // setSong
})  {
  const [personName, setPersonName] = React.useState([]);
  const theme = useTheme();
  const navigate = useNavigate();

  const arr/*artistIds*/ =['70287pcNpILjcpoBl0soPs','54HicbsQOHeibnnFCMtLwl','5eVh2c6WuigJCj1WrHfnd5','5GCh3ZazIVWg8eKb5Akv0q','3VTm1513t2LL1mSKzzyQuj','0NLEL3BBW71Oshh5R7wpJl','3Y0YvS2crBLVS9eA5jX8Ux','5H64fYkQmqjX0bS4bplq8F', '0kF5nmRrCc9oZpAkVbWaUt','4aTDB7CQyMNOLQsCpAS9EW'];
  let [artistss, setArtistss] = React.useState([]);
  // const [personName, setPersonName] = React.useState([]);

  let i = 0;

  React.useEffect(()=>{
    
    for(i; i< arr.length; i++){
      listArr(arr[i]);
    }
    
    // else if(index == 1){
    //   list1();
    // }
    // else if(index == 2){
    //   list2();
    // }
    
 

  },[])

  const listArr = async(id)=>{
    let resp = await apiClient.get(`/artists/${id}`)
    console.log(resp.data)
    
    setArtistss(artistss=> [...artistss, resp.data]);
    
    
   
  }
  // const list1 = async()=>{
  //   let resp = await apiClient.get(`artists/${aritsts}/albums?market=IL`)
  //   console.log(resp.data)
    
  //   setArtistss(artistss=> [...artistss, resp.data]);
    
   
  // }
  // const list2 = async()=>{
  //   let resp = await apiClient.get(`albums/${inputAlbum}/tracks`)
  //   console.log(resp.data)
    
  //   setArtistss(artistss=> [...artistss, resp.data]);
    
   
  // }
  

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
      
    );
    setAritsts(typeof value === 'string' ? value.split(',') : value,)
   
    playArtists(value)
    
    // else if(index == 1)setInputAlbum(typeof value === 'string' ? value.split(',') : value,)
    // else if(index == 2)setSong(typeof value === 'string' ? value.split(',') : value,)

  
  };
  const playArtists = (value) => {
    navigate("/album", { state: { id: value}} );
  };
  return (
    <div>
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-multiple-name-label">Name</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        multiple
        value={personName}
        onChange={handleChange}
        input={<OutlinedInput label="Name" />}
        MenuProps={MenuProps}
      >
        {artistss.map((artist) => (
          <MenuItem
            key={artist.name}
            value={artist.id}
            style={getStyles(artist.name, personName, theme)}
          >
            {artist.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </div>
  )
}
