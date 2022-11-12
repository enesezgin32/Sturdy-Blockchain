import { 
    SET_GENERAL_INFO, SET_DETAILED_INFO, SET_HASTA_QR, SET_HASTA_TC, SET_HASTA_PASSWORD 
 } from "../reducers/constants";
import axios from "axios";

 export const generalInfoAction=(arg)=>async(dispatch)=>{
    let configObject = {
        "url": "http://localhost:5000/api/citizen/getBasicInfo",
        "method": "post",
        "cors":"no-cors",
        "headers": {
            'Content-Type': 'application/json'
            },
        "data":arg
        }
        
        axios.request(configObject )
        .then((res) => {
            console.log("ABİ SONUÇ BU:",res.data)
            if (res.data){
                dispatch({type:SET_GENERAL_INFO ,payload:res.data})
                console.log("abi ife girdi!")
            }
        })
        .catch(e=>console.log("catched error:",e))
}

export const detailedInfoAction=(arg)=>async(dispatch)=>{
    let configObject = {
        "url": 'http://localhost:5000/api/citizen/getFullInfo',
        "method": "post",
        "cors":"no-cors",
        "headers": {
            'Content-Type': 'application/json'
            },
        "data":arg
        }

        axios.request(configObject )
            .then((res) => {
                console.log("RES:",res.data)
                if (res.data){
                    dispatch({type:SET_DETAILED_INFO ,payload:arg})
                }
            })
            .catch(e=>console.log("catched:",e))
}

export const hastaTcAction=(arg)=>async(dispatch)=>{
    dispatch({type:SET_HASTA_TC ,payload:arg})
}

export const hastaPasswordAction=(arg)=>async(dispatch)=>{
    dispatch({type:SET_HASTA_PASSWORD ,payload:arg})
}

export const hastaQrAction=(arg)=>async(dispatch)=>{
    dispatch({type:SET_HASTA_QR ,payload:arg})
}
