import React from 'react'
import styled from 'styled-components';

const RightColumn = styled.div`
    display: flex;
    height: 300px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: baseline;
    //border: 1px solid blue;
    font-family: Quicksand:
    font-weight: 600;
    color: black;
    font-size: 25px;
    gap: 10px;
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    //border: 1px solid red;
    gap: 10%;
`

function InfoCard(props) {
    const {
        generalInfoHasta:{bloodGroup,dateOfBirth,gender,name,nationality,surname}
    } = props;
  return (
    <Container>
        <img height="300px" width="auto" src="https://www.nicepng.com/png/detail/73-730154_open-default-profile-picture-png.png" alt="default-pp"/>
        <RightColumn>
            <div style={{fontWeight:"700"}}>{`${name} ${surname}`}</div>
            <div>Doğum tarihi: {dateOfBirth}</div>
            <div>Kan Grubu: {bloodGroup}</div>
            <div>Cinsiyeti: {gender}</div>
            <div>Uyruk: {nationality}</div>
        </RightColumn>
    </Container>
  )
}

export default InfoCard
