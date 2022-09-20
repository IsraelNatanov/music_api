import { Button, Stack } from '@mui/material'
import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

export default function ButtunApi() {
  return (
    <Stack  spacing={1}    >
        <Button  variant="contained" size="large"  endIcon={<AddIcon />}>
        הוסף שירים
      </Button>
      <Button variant="contained" size="large" al endIcon={<DeleteIcon />}>
         מחק שירים
      </Button>
      <Button variant="contained" size="large"   endIcon={<DeleteForeverIcon  />}>
        מחק פלייליסט
      </Button>
      </Stack>
  )
}
