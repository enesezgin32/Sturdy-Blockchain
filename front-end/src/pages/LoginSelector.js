import React from 'react'
import styled from 'styled-components'

const LoginSelectorContainer = styled.div`
    width: 80%;
    height: fit-content;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid red;
    margin: 10px auto;
    font-size: 25px;
    padding-top: 20px;
`

function LoginSelector() {
  return (
    <LoginSelectorContainer>
      <div>Hasta Girişi</div>
      <div>Doktor Girişi</div>
    </LoginSelectorContainer>
  )
}

export default LoginSelector
