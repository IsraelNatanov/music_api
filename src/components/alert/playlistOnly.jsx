import React from 'react'
import { Alert, Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function PlaylistOnly() {
    const nav = useNavigate()
  return (
    <Stack sx={{ width: '100%' ,alignItems: "center", paddingTop: "25%"}} spacing={2}>
      
    <Alert severity="warning"
      action={
        <Button color="inherit" size="small" onClick={()=>nav("/createPlaylist")}>
          ליצור
        </Button>
      }
    >
      You have not created playlists!
    </Alert>
  </Stack>
  )
}
