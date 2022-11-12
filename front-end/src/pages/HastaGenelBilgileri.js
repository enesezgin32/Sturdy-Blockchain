import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import InfoCard from '../components/InfoCard';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import HastaQR from '../components/HastaQR';
import HastaDetailedInfoQR from '../components/HastaDetailedInfoQR';
import DetailedInfo from '../components/DetailedInfo';

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
    const {
      generalInfoHasta,whichPath,
      detailedInfo,setDetailedInfo,
      setPath
    } = props;
    const [password, setPassword] = useState("")
    const ArrayOfDetailedInfo = [detailedInfo,detailedInfo,detailedInfo,detailedInfo,detailedInfo]


    const handleClick = () => {

    }

  return (
    <Container>
      <InfoCard generalInfoHasta={generalInfoHasta}/>
      {detailedInfo===null && <InfoText>{ whichPath===2 ? "Detaylı Hasta Bilgileri için lütfen hasta şifresi giriniz" : "Detaylı Hasta Bilgileri için lütfen QR kodunuzu okutunuz"}</InfoText>}
      {detailedInfo===null && whichPath===2 && <InputWrapper>
        <TextField  style={{width:"100%"}} type='password' value={password} onChange={e=>setPassword(e.target.value)} id="outlined-basic" label="Şifre" variant="outlined" />
        <Button style={{marginLeft:"10px"}} variant="contained" onClick={handleClick}>
        Onayla
        </Button>
      </InputWrapper>}
      {detailedInfo===null && whichPath===1 && <HastaDetailedInfoQR setPath={setPath} setDetailedInfo={setDetailedInfo}/>}
      {detailedInfo!==null && <DetailedInfo detailedInfo={detailedInfo}/>}
    </Container>
  )
}
