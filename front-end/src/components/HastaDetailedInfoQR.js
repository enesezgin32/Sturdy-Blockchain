import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 40%;
    margin: auto;
    height: 20%;
`
/*
const Header = styled.div`
    font-size: 22px;
    color: #525656;
    font-weight: 500;
`*/

function HastaDetailedInfoQR(props) {
    //const {isDoctor} = props;
    const {setDetailedInfo,setPath} = props;

    const handleClick = (e) => {
        e.preventDefault();

        const sentObject = {
            qr: "Y",
            password: "y"
        }


        const getDetailedInfo = async() => {
            let configObject = {
            "url": 'http://localhost:5000/api/citizen/getFullInfo',
            "method": "post",
            "cors":"no-cors",
            "headers": {
                'Content-Type': 'application/json'
                },
            "data":sentObject
            }
    
            axios.request(configObject )
                .then((res) => {
                    console.log("RES:",res.data)
                    if (res.data){
                        setDetailedInfo(res.data);
                        setPath(null);
                    }
                })
                .catch(e=>console.log("catched:",e))
        }

        getDetailedInfo();
    }


  return (
    <Container>
        <button onClick={handleClick}>Kamerayı aç</button>
    </Container>
  )
}

export default HastaDetailedInfoQR
