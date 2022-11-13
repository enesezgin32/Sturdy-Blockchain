import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { generalInfoAction, hastaTcAction, hastaPasswordAction } from '../actions/hastaActions';
import { pathAction } from '../actions/pathActions';

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


function HastaLogin() {
    const nav = useNavigate()
    const dispatch = useDispatch()
    const [tc,setTc] = useState("")
    const [şifre,setŞifre] = useState("")

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch(hastaTcAction(tc));
        dispatch(hastaPasswordAction(şifre));
        dispatch(pathAction(1));
        nav("/genel-bilgiler");
    }

  return (
    <LoginWrapper>
        <Header> TC Kimlik ile giriş </Header>
        <TextField value={tc} onChange={e=>setTc(e.target.value)} id="outlined-basic" label="TC Kimlik No" variant="outlined" />
        <TextField type='password' value={şifre} onChange={e=>setŞifre(e.target.value)} id="outlined-basic" label="Şifre" variant="outlined" />
        <Button variant="contained" onClick={handleClick}>
            Giriş Yap
        </Button>
    </LoginWrapper>
  )
}

export default HastaLogin
