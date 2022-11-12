import React, { useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 65vw;
    height: 75vh;
    border: 1px solid red;
    margin: auto;
    margin-top: 10%;
`

export default function HastaGenelBilgileri(props) {
    const {generalInfoHasta} = props;

    useEffect(()=>{
        console.log("YENİ COMPONENT MOUNT ETTİ:",generalInfoHasta)
    },[])

  return (
    <Container>
      
    </Container>
  )
}
