import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import SingleDiagnose from './SingleDiagnose';

const Container = styled.div`
    width: 200px;
    height: 200px;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    justify-conten: center;
    align-items: center;
    gap: 25px;
    margin-bottom: 90px;
`

function DetailedInfo() {
    const detailedInfo = useSelector(state=>state.detailedInfo);

  return (
    <Container>
      { detailedInfo &&
        detailedInfo.map((item,index)=>{
          return (
            <SingleDiagnose index={index} key={index} data={item}/>
          )
        })
      }
    </Container>
  )
}

export default DetailedInfo
/**
 * { detailedInfo &&
        detailedInfo.map((item,index)=>{
          return (
            <SingleDiagnose key={index} data={item}/>
          )
        })
      }
 */