import React from 'react'
import styled from 'styled-components'


const NavbarWrapper = styled.div`
    width: 100vw;
    min-height: 80px;
    max-height: 200px;
    height: 10vh;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 40px;
    background: #9BA3EB;
`
function Navbar() {
  return (
        <NavbarWrapper>LOGO</NavbarWrapper>
    )
}

export default Navbar
