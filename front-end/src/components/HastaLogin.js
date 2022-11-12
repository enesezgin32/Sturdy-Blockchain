import React from 'react'
import TextField from '@mui/material/TextField';

function HastaLogin() {
  return (
    <div>
        <TextField id="outlined-basic" label="TC Kimlik No" variant="outlined" />
        <TextField id="outlined-basic" label="Şifre" variant="outlined" />
    </div>
  )
}

export default HastaLogin
