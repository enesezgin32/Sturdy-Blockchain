import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { generalInfoAction, detailedInfoAction } from '../actions/hastaActions';

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
    justify-content: space-between;
    align-items: center;
    padding-left: 40px;
    padding-right: 40px;
    background: #1976d2;
`

const ExitButton = styled.div`
    cursor: pointer;
    font-size: 25px;
    color: white;
    transition: all 0.2s ease-in-out;

    &:hover{
        color: #242F9B;
    }
`

const LogoText = styled.div`
    font-size: 25px;
    color: white;
    cursor: default;
`

function Navbar(props) {
    //const {isLoggedIn, setGeneralInfoHasta, setDetailedInfo} = props;
    const nav = useNavigate();
    const dispatch = useDispatch();

    const generalInfo = useSelector(state=>state.generalInfo);

    const handleExit = (e) => {
        e.preventDefault();
        dispatch(generalInfoAction(null));
        dispatch(detailedInfoAction(null));
        nav('/');
    }

  return (
        <NavbarWrapper>
        <LogoText>LOGO</LogoText>
        {generalInfo && <ExitButton onClick={handleExit}>Çıkış Yap</ExitButton>}
        </NavbarWrapper>
    )
}

export default Navbar
