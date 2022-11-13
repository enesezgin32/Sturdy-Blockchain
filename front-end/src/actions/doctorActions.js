import { 
    SET_DOCTOR_QR, SET_DOCTOR_PASSWORD, SET_DOCTOR_AUTH
} from "../reducers/constants";
import axios from "axios";

export const doctorQrAction=(arg)=>async(dispatch)=>{
    dispatch({type:SET_DOCTOR_QR ,payload:arg})
}

export const doctorPasswordAction=(arg)=>async(dispatch)=>{
    dispatch({type:SET_DOCTOR_PASSWORD ,payload:arg})
}

export const doctorInfoAction=(arg)=>async(dispatch)=>{
    let configObject = {
        "url": 'http://localhost:5000/api/doctor/login',
        "method": "post",
        "cors":"no-cors",
        "headers": {
            'Content-Type': 'application/json'
            },
        "data": arg
        }

        axios.request(configObject )
            .then((res) => {
                console.log("RES:",res.data)
                if (res.data){
                    dispatch({type:SET_DOCTOR_AUTH ,payload:res.data})
                }
            })
            .catch(e=>console.log("catched:",e))
}
