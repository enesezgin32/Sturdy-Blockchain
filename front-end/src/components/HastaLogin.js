import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

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


function HastaLogin(props) {
    const {setGeneralInfoHasta, setPath} = props;
    const nav = useNavigate()
    const [tc,setTc] = useState("")
    const [şifre,setŞifre] = useState("")

    const handleClick = async (e) => {
        e.preventDefault();
        console.log("TC:",tc)
        console.log("şifre:",şifre)

        const sentObject = {
            qr: null,
            tc: tc,
            password: şifre
        }

        const getInfo = async() => {
            let configObject = {
            "url": "http://localhost:5000/api/citizen/getBasicInfo",
            "method": "post",
            "cors":"no-cors",
            "headers": {
                'Content-Type': 'application/json'
                },
            "data":sentObject
            }
    
            axios.request(configObject )
                .then((res) => {
                    console.log("RES:",res.data)
                    if (res.data){
                        nav("/genel-bilgiler")
                        setGeneralInfoHasta(res.data);
                        setPath(1);
                    }
                })
                .catch(e=>console.log("catched:",e))
        }
        getInfo();
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
