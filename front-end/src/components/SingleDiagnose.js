import React, { useState } from 'react'
import styled from 'styled-components';
import Switch from '@mui/material/Switch';

const Container = styled.div`
    width: 30vw;
    height: fit-content;
    min-width: 200px;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    box-shadow: 0px 0px 6px 0px black;
`

const LeftColumn = styled.div`
    width: 17vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
`

const RightColumn = styled.div`
    width: 7vw;
    text-align: center;
`

function SingleDiagnose(props) {
    const {data, index} = props;
    const {date,diagnose,doctor,drug} = data;
    const [visiblity, setVisiblity] = useState(index%3===0);
    const hospital = "Ankara Liv Hospital";


    const handleChange = (event) => {
        setVisiblity(event.target.checked);
      };


  return (
    <Container>
        <Wrapper>
            <LeftColumn>
                <div>{hospital}</div>
                <div>{date}</div>
                <div>{diagnose}</div>
            </LeftColumn>
            <RightColumn>
            <div>{drug}</div>
            <Switch
                checked={visiblity}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            /> {visiblity===true?"Gizli":"Erişilebilir"}
            </RightColumn>
        </Wrapper>
        <div>{doctor}</div>
    </Container>
  )
}

export default SingleDiagnose
