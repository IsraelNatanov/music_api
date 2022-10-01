import { Button, colors, Divider, Stack } from '@mui/material'
import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { color, fontStyle } from '@mui/system';

export default function ButtunEditing(props) {
  const setAddTrack = props.setAddTrack;
  const setDeleteTrack = props.setDeleteTrack;
  const setDeletePlaylist = props.setDeletePlaylist;
  
  return (
    <Stack direction="row-reverse" alignItems={'center'} justifyContent={'center'} textAlign={'center'} spacing={2} margin={1} > 
        <Button  variant="text" size="large" sx={{color:'white'}}  endIcon={<AddIcon />} onClick={()=>setAddTrack(true)}>
        הוסף שירים
      </Button>
      <Button variant="text" size="large" sx={{color:'white'}} endIcon={<DeleteIcon />} onClick={()=>setDeleteTrack(true)}>
         מחק שירים
      </Button>
      <Button variant="text" size="large" sx={{color:'white'}}  endIcon={<DeleteForeverIcon  />} onClick={()=>setDeletePlaylist(true)}>
        מחק פלייליסט
      </Button>
      </Stack>
  )
}
