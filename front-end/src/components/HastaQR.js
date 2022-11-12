import React from 'react'
import styled from 'styled-components'

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

function HastaQR(props) {
    const {isDoctor} = props;

  return (
    <Container>
        <Header>{!isDoctor ? "QR ile kolay giriş" : "Önce QR okutunuz" }</Header> 
        <button>Kamerayı aç</button>
    </Container>
  )
}

export default HastaQR
