import React, { useState } from 'react'
import LoginSelector from './LoginSelector'
import styled from 'styled-components';
import HastaLogin from '../components/HastaLogin';
import HastaQR from '../components/HastaQR';
import DoktorLogin from '../components/DoktorLogin';

const LoginWrapper = styled.div`
  width: 50%;
  height: 50vh;
  border: none;
  color: black;
  box-shadow: 0 0 10px black;
  margin: auto;
  margin-top: 300px;
  overflow: hidden;
`

const TempWrapperHasta = styled.div`
    width: 100%;
    height: 80%;
    transform: ${props=>props.authType==="Hasta"?"":"translateX(-100%)"};
    transition: all 0.5s ease-in-out;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

const TempWrapperDoktor = styled.div`
    width: 100%;
    height: 100%;
    transform: ${props=>props.authType==="Doktor"?"translateX(-100%)":""};
    transition: all 0.5s ease-in-out;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

const LoginFormContainer = styled.div`
    width: 200%;
    height: 90%;
    display: flex;
    flex-direction: row;
`

function InitialScreen(props) {
    //const {setGeneralInfoHasta, setPath} = props;
    const [authType,setAuthType] = useState("Hasta")

    const setterFunction = (arg)=>{
        setAuthType(arg);
    }

  return (
        <LoginWrapper>
            <LoginSelector authType={authType} setterFunction={setterFunction}/>
            
            <LoginFormContainer>
                <TempWrapperHasta authType={authType}>
                    <HastaQR authType={authType}/>
                    <HastaLogin/>
                </TempWrapperHasta>
                <TempWrapperDoktor authType={authType}>
                    <HastaQR authType={authType}/>
                    <DoktorLogin/>
                </TempWrapperDoktor>
            </LoginFormContainer>
        </LoginWrapper>
  )
}

export default InitialScreen
