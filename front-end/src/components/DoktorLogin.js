import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { doctorQrAction, doctorPasswordAction, nulifyDoctorAction } from '../actions/doctorActions';
import { doctorInfoAction } from '../actions/doctorActions';
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


function DoktorLogin() {
    const [şifre,setŞifre] = useState("")
    const qrDoctor = "U2FsdGVkX18AT/NtWnjOIx56QIzmXRQuWnx0xBTXt872IKs1v5u7o99hBJXiMEOVSVUJPD/6mBrrRLr6pNpv/2Zo2P7PyfZStk+Hz8DEtN+afMVvNDIRNuGUqMhDuBfy";
    const dispatch = useDispatch();
    const isDoctor = useSelector(state=>state.isDoctor);
    const nav = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        const objSent = {
            qr: qrDoctor,
            password: şifre
        }
        dispatch(doctorQrAction(qrDoctor));
        dispatch(doctorPasswordAction(şifre));
        dispatch(doctorInfoAction(objSent));

        nav('/doktor-ekranı');
    }

    useEffect(()=>{
        return () => {
            dispatch(nulifyDoctorAction());
        }
    },[])


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
