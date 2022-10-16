import { Alert, Button, Stack } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ErrorNoPay() {
  const nav = useNavigate()
  return (
    
    <Stack sx={{ width: '100%' ,alignItems: "center", paddingTop: "25%"}} spacing={2}>
      
    <Alert severity="warning"
      action={
        <Button color="inherit" size="small" onClick={()=>nav("/account")}>
          click
        </Button>
      }
    >
      You are not a premium customer and therefore you are not allowed to enter here!
    </Alert>
  </Stack>
   
  )
}
