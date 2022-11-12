import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import InfoCard from '../components/InfoCard';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Container = styled.div`
    width: 65vw;
    height: 75vh;
    margin: auto;
    margin-top: 10%;
    box-shadow: 0 0 10px black;
    padding-top: 40px;
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

export default function HastaGenelBilgileri(props) {
    const {generalInfoHasta} = props;
    const [password, setPassword] = useState("")

    const handleClick = () => {

    }

  return (
    <Container>
      <InfoCard generalInfoHasta={generalInfoHasta}/>
      <InfoText>Detaylı Hasta Bilgileri için lütfen hasta şifresi giriniz</InfoText>
      <InputWrapper>
        <TextField  style={{width:"100%"}} type='password' value={password} onChange={e=>setPassword(e.target.value)} id="outlined-basic" label="Şifre" variant="outlined" />
        <Button style={{marginLeft:"10px"}} variant="contained" onClick={handleClick}>
        Onayla
        </Button>
      </InputWrapper>
    </Container>
  )
}
