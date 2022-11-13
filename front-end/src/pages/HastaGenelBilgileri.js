import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import InfoCard from '../components/InfoCard';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import HastaQR from '../components/HastaQR';
import HastaDetailedInfoQR from '../components/HastaDetailedInfoQR';
import DetailedInfo from '../components/DetailedInfo';
import { useDispatch, useSelector } from 'react-redux';
import { generalInfoAction } from '../actions/hastaActions';

const Container = styled.div`
    width: 45vw;
    height: fit-content;
    margin: auto;
    margin-top: 10%;
    box-shadow: 0 0 10px black;
    padding-top: 40px;
    padding-bottom: 20px;
`

const ContainerContainer = styled.div`
  padding-bottom: 250px;
  height: fit-content;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 30%;
  margin: 20px auto;
  gap: 10px;
`

const InfoText = styled.div`
  font-weight: 500;
  decoration: underline;
  font-size: 22px;
  margin-top: 15px;
`

export default function HastaGenelBilgileri() {
    const [password, setPassword] = useState("")
    const [mount,setMount] = useState(false)
    const path = useSelector(state=>state.path);
    const generalInfo = useSelector(state=>state.generalInfo);
    const detailedInfo = useSelector(state=>state.detailedInfo);
    const dispatch = useDispatch();

    const hastaTc = useSelector(state=>state.hastaTc);
    const hastaPassword = useSelector(state=>state.hastaPassword);

    const handleClick = () => {

    }

    useEffect(()=>{
      if (mount===false){
        setMount(true)
        const obj = {
          tc: hastaTc,
          password: hastaPassword
        }
        dispatch(generalInfoAction(obj));
      }
    },[mount])

  return (
    mount===true ?
    <ContainerContainer>
      <Container>
      <InfoCard/>
        {detailedInfo===null && <InfoText>{ path===2 ? "Detaylı Hasta Bilgileri için lütfen hasta şifresi giriniz" : "Detaylı Hasta Bilgileri için lütfen QR kodunuzu okutunuz"}</InfoText>}
        {detailedInfo===null && path===2 && <InputWrapper>
        <TextField  style={{width:"100%"}} type='password' value={password} onChange={e=>setPassword(e.target.value)} id="outlined-basic" label="Şifre" variant="outlined" />
        <Button style={{marginLeft:"10px"}} variant="contained" onClick={handleClick}>
          Onayla
        </Button>
        </InputWrapper>}
        {detailedInfo===null && path===1 && <HastaDetailedInfoQR/>}
      </Container> 
      {detailedInfo!==null && <DetailedInfo/>}
    </ContainerContainer>
      : <div/>
  )
}
