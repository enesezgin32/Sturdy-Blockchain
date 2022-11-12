import React from 'react'
import styled from 'styled-components'

const LoginSelectorContainer = styled.div`
    width: 60%;
    height: fit-content;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px auto;
    font-size: 25px;
    padding-top: 20px;
    border-bottom: 1px solid #525656;
    padding-bottom: 10px;
`

const PointerHasta = styled.div`
    cursor: pointer;
    font-family: Quicksand;
    color: #525656;
    font-weight: 600;
    color: ${props=>props.auth==="Hasta"?"#3a4040":"#888f8f"};
`

const PointerDoktor = styled(PointerHasta)`
   color: ${props=>props.auth==="Doktor"?"#3a4040":"#888f8f"};
`

function LoginSelector(props) {
    const {setterFunction, authType} = props;

  return (
    <LoginSelectorContainer>
      <PointerHasta auth={authType}  onClick={()=>setterFunction("Hasta")} > Hasta Girişi</PointerHasta>
      <PointerDoktor auth={authType} onClick={()=>setterFunction("Doktor")} >Doktor Girişi</PointerDoktor>
    </LoginSelectorContainer>
  )
}

export default LoginSelector
