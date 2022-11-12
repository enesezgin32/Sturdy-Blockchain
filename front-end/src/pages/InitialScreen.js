import React from 'react'
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
`
function InitialScreen() {
  return (
    <div>
        <LoginWrapper>
            <LoginSelector/>
        </LoginWrapper>
    </div>
  )
}

export default InitialScreen
