import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    height: fit-content;
    padding: 20px 10px 20px 0px;
    border-left: 1px solid #3a4040; 
    gap: 10px;
`

const Header = styled.div`
    font-size: 22px;
    color: #525656;
    font-weight: 500;
`


function DoktorLogin() {
    const [şifre,setŞifre] = useState("")
    const [qr,setQr] = useState(null)

    const handleClick = (e) => {
        e.preventDefault();
        console.log("şifre:",şifre)
        console.log("qr:",qr)
    }

  return (
    <LoginWrapper>
        <Header> Şifre ve QR ile giriş: </Header>
        <TextField type='password' value={şifre} onChange={e=>setŞifre(e.target.value)} id="outlined-basic" label="Şifre" variant="outlined" />
        <Button variant="contained" onClick={handleClick}>
            Giriş Yap
        </Button>
    </LoginWrapper>
  )
}

export default DoktorLogin
