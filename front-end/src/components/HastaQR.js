import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { hastaQrAction, generalInfoAction } from '../actions/hastaActions'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 40%;
    margin: auto;
    height: 60%;
`
const Header = styled.div`
    font-size: 22px;
    color: #525656;
    font-weight: 500;
`

const StyledImage = styled.img`
  cursor: pointer;
`

function HastaQR({authType}) {
    const dispatch = useDispatch();

    const handleClick = (e) => {
      e.preventDefault();
      if (authType!=="Hasta"){
        //    eklenecek!!
      } else {
        const tempQR = "U2FsdGVkX19DsnGiOqJfuI0aYRLhN2f5ssmHd07WwFMwdEhzfg9j/qaL+XeqKAVIdzUx7VkeCxsWevp/aIgJrg4M8nq3+3DsWJVGfKch2IVkN09lNcjk57siu2W5Lubw";
        const tempObj = {
          qr: tempQR,
          password: "y"
        }
        dispatch(hastaQrAction(tempQR));
        dispatch(generalInfoAction(tempObj));
      }
    }

    useEffect(()=>{

    },[])

  return (
    <Container>
        <Header>{authType==="Hasta" ? "QR ile kolay giriş" : "Önce QR okutunuz" }</Header> 
        <StyledImage onClick={handleClick} height='30px' width='auto' alt='camera-img' src='https://cdn-icons-png.flaticon.com/128/1067/1067297.png'/>
    </Container>
  )
}

export default HastaQR
