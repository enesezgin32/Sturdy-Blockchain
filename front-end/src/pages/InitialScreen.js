import React, { useState } from 'react'
import LoginSelector from './LoginSelector'
import styled from 'styled-components';

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
    height: 100%;
    transform: ${props=>props.authType==="Hasta"?"":"translateX(-100%)"};
    transition: all 0.5s ease-in-out;
    cursor: pointer;
`

const TempWrapperDoktor = styled.div`
    width: 100%;
    height: 100%;
    transform: ${props=>props.authType==="Doktor"?"translateX(-100%)":""};
    transition: all 0.5s ease-in-out;
`

const LoginFormContainer = styled.div`
    width: 200%;
    height: 90%;
    display: flex;
    flex-direction: row;
`

function InitialScreen() {
    const [authType,setAuthType] = useState("Hasta")

    const setterFunction = (arg)=>{
        setAuthType(arg);
    }

  return (
        <LoginWrapper>
            <LoginSelector authType={authType} setterFunction={setterFunction}/>
            
            <LoginFormContainer>
                <TempWrapperHasta authType={authType}>
                hasta giriş ekranı
                </TempWrapperHasta>
                <TempWrapperDoktor authType={authType}>
                doktor giriş ekranı
                </TempWrapperDoktor>
            </LoginFormContainer>
        </LoginWrapper>
  )
}

export default InitialScreen
