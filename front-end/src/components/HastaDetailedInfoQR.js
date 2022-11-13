import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { detailedInfoAction } from '../actions/hastaActions'
import { pathAction } from '../actions/pathActions'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 40%;
    margin: auto;
    height: 20%;
`

function HastaDetailedInfoQR() {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();

        const sentObject = {
            qr: "U2FsdGVkX19DsnGiOqJfuI0aYRLhN2f5ssmHd07WwFMwdEhzfg9j/qaL+XeqKAVIdzUx7VkeCxsWevp/aIgJrg4M8nq3+3DsWJVGfKch2IVkN09lNcjk57siu2W5Lubw",
            password: "y"
        }
        dispatch(detailedInfoAction(sentObject));
        dispatch(pathAction(null));
    }

  return (
    <Container>
        <button onClick={handleClick}>Kamerayı aç</button>
    </Container>
  )
}

export default HastaDetailedInfoQR
