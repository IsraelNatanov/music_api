import React from 'react'
import { Alert, Stack } from '@mui/material'

export default function SuccessApi() {
  return (
    <Stack sx={{ width: '100%' ,alignItems: "center", paddingTop: "25%"}} spacing={2}>
      
      <Alert severity="success">the transaction completed successfully!</Alert>
  </Stack>
  )
}
