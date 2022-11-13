import React, { useState } from 'react'
import styled from 'styled-components';
import Switch from '@mui/material/Switch';
import { useSelector } from 'react-redux';

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
    const isDoctor = useSelector(state=>state.isDoctor);
    const show = index % 3 !== 0;

    const handleChange = (event) => {
        setVisiblity(event.target.checked);
      };


  return (
    (show || isDoctor===null) ?
    <Container>
        <Wrapper>
            <LeftColumn>
                <div>{hospital}</div>
                <div>{date}</div>
                <div>{diagnose}</div>
            </LeftColumn>
            <RightColumn>
            <div>{drug}</div>
            {isDoctor===null && <Switch
                checked={visiblity}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            /> }
            {isDoctor===null ? (visiblity===true?"Gizli":"Erişilebilir"):""}
            </RightColumn>
        </Wrapper>
        <div>{doctor}</div>
    </Container> : <div/>
  )
}

export default SingleDiagnose
