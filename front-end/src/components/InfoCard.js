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
const BoldText = styled.div`
    font-weight: 600;
    display: inline;
`

function InfoCard(props) {
    const {
        generalInfoHasta:{bloodGroup,dateOfBirth,gender,name,nationality,surname,allergies}
    } = props;
  return (
    <Container>
        <img height="400px" width="auto" src="https://www.nicepng.com/png/detail/73-730154_open-default-profile-picture-png.png" alt="default-pp"/>
        <RightColumn>
            <div style={{fontWeight:"800"}}>{`${name} ${surname}`}</div>
            <div><BoldText>Doğum tarihi:</BoldText> {dateOfBirth}</div>
            <div><BoldText>Kan Grubu:</BoldText> {bloodGroup}</div>
            <div><BoldText>Cinsiyeti:</BoldText> {gender}</div>
            <div><BoldText>Uyruk:</BoldText> {nationality}</div>
            <div><BoldText>Alerjiler:</BoldText></div>
            <ul style={{paddingLeft:"40px"}}>
                {allergies && Object.keys(allergies).map((item,index)=>(
                <li key={index}>
                    {`${item}: ${allergies[item]}`}
                </li>
                ))}
            </ul>
        </RightColumn>
    </Container>
  )
}

export default InfoCard
