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

const StyledImage = styled.img`
  cursor: pointer;
`

function HastaQR(props) {
    const {isDoctor} = props;

    const handleClick = (e) => {
      e.preventDefault();

      
    }

  return (
    <Container>
        <Header>{!isDoctor ? "QR ile kolay giriş" : "Önce QR okutunuz" }</Header> 
        <StyledImage onClick={handleClick} height='30px' width='auto' alt='camera-img' src='https://cdn-icons-png.flaticon.com/128/1067/1067297.png'/>
    </Container>
  )
}

export default HastaQR
