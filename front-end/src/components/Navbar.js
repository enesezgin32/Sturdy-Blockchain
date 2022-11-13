import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { nulifyDoctorAction } from '../actions/doctorActions';
import { nulifyGeneralInfo, nulifyDetailedInfo } from '../actions/hastaActions';

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
    font-size: 20px;
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

const DoctorText = styled.div`
    font-size: 23px;
    cursor: default;
    color: white;
`

function Navbar(props) {
    const nav = useNavigate();
    const dispatch = useDispatch();

    const generalInfo = useSelector(state=>state.generalInfo);
    const isDoctor = useSelector(state=>state.isDoctor);

    const handleExit = (e) => {
        e.preventDefault();
        nav('/');
        dispatch(nulifyGeneralInfo());
        dispatch(nulifyDetailedInfo());
        dispatch(nulifyDoctorAction());
    }

  return (
        isDoctor===null ?
        <NavbarWrapper>
            <LogoText>E-KALE</LogoText>
            {generalInfo && <ExitButton onClick={handleExit}>Çıkış Yap</ExitButton>}
        </NavbarWrapper>
        : <NavbarWrapper>
            <LogoText>LOGO</LogoText>
                <DoctorText>{`${isDoctor.name} ${isDoctor.surname} | ${isDoctor.hospital}/${isDoctor.speciality}`}</DoctorText>
                <ExitButton onClick={handleExit}>Çıkış Yap</ExitButton>
            </NavbarWrapper>
    )
}

export default Navbar
