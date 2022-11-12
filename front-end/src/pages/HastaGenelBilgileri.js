import React, { useEffect } from 'react'
import styled from 'styled-components'
import InfoCard from '../components/InfoCard';

const Container = styled.div`
    width: 65vw;
    height: 75vh;
    margin: auto;
    margin-top: 10%;
    box-shadow: 0 0 10px black;
    padding-top: 40px;
`

export default function HastaGenelBilgileri(props) {
    const {generalInfoHasta} = props;

    useEffect(()=>{
        console.log("YENİ COMPONENT MOUNT ETTİ:",generalInfoHasta)
    },[])

  return (
    <Container>
      <InfoCard generalInfoHasta={generalInfoHasta}/>
    </Container>
  )
}
