import * as React from 'react';
import APIKit from "../../spotify";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import apiClient from '../../spotify';


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


export default function Two({
  // setAritsts,
  aritsts,
  

  // inputAlbum,
  // setSong
})  {
  const [personName, setPersonName] = React.useState([]);
  const theme = useTheme();
  let [artistss, setArtistss] = React.useState([]);
  let [inputAlbum, setInputAlbum] = React.useState([]);

  
  let [item, setItem] = React.useState([]);
  // const [personName, setPersonName] = React.useState([]);

  let i = 0;

  React.useEffect(()=>{
    
    
    
    // else if(index == 1){
    list1();
    // }
    // else if(index == 2){
    //   list2();
    // }
    
 

  },[])


  const list1 = async()=>{
    let resp = await apiClient.get(`/artists/${aritsts}/albums?market=IL`);
    console.log(resp.data.items)
    
    setArtistss(resp.data.items);
    
   
  }
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
    setInputAlbum(typeof value === 'string' ? value.split(',') : value,)
    // else if(index == 1)setInputAlbum(typeof value === 'string' ? value.split(',') : value,)
    // else if(index == 2)setSong(typeof value === 'string' ? value.split(',') : value,)

  
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
        {artistss?.map((item) => (
          <MenuItem
            key={item.name}
            value={item.id}
            style={getStyles(item.name, personName, theme)}
          >
            {item.name}
          </MenuItem>
        ))}
      </Select>
      <h1>{inputAlbum}</h1>
    </FormControl>
  </div>
  )
}
