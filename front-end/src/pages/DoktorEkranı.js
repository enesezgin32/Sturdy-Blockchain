import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux'
import { generalInfoAction } from '../actions/hastaActions';
import HastaGenelBilgileri from './HastaGenelBilgileri';

const Container = styled.div`
    height: fit-size;
    padding: 30px 10px 30px 10px;
    box-shadow: ${props=>props.generalInfo===null?"0 0 10px black":""};
    margin: auto;
    margin-top: 150px;
    width: 45vw;
`

const StyledImage = styled.img`
  cursor: pointer;
  margin-top: 20px;
`

function DoktorEkranı() {
    const generalInfo = useSelector(state=>state.generalInfo);
    const dispatch = useDispatch();

    const handleClick = () => {
        const tempQR = "U2FsdGVkX1/kFEPp9uliH7ACt6tnaisdHQaA52yC2nuRqCvdjAo/XKVynH/eLMA6KMuE2+koCEL3Gngmvf2wg9lk7R0xCh21ZYUrlMogjAeb49JEo+oPZUNfcQ2dqimZ";
        const objSent = {
            qr: tempQR,
            tc: null,
            password: 'y'
        }
        dispatch(generalInfoAction(objSent));
    }

  return (
    <Container generalInfo={generalInfo}>
        {generalInfo===null && <div>Hasta QR'ını okutunuz.</div>}
        {generalInfo===null && <StyledImage onClick={handleClick} height='30px' width='auto' alt='camera-img' src='https://cdn-icons-png.flaticon.com/128/1067/1067297.png'/>}
        {generalInfo!==null && <HastaGenelBilgileri/>}
    </Container>
  )
}

export default DoktorEkranı
