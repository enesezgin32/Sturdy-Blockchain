import { 
    SET_DOCTOR_QR, SET_DOCTOR_PASSWORD, SET_DOCTOR_AUTH
} from "./constants";

export const doctorQrReducer = (state=null,action)=>{
    switch(action.type){
        case SET_DOCTOR_QR:
            return action.payload;
        default:
            return state;
    }
}

export const doctorPasswordReducer = (state=null,action)=>{
    switch(action.type){
        case SET_DOCTOR_PASSWORD:
            return action.payload;
        default:
            return state;
    }
}

export const isDoctorReducer = (state=null,action)=>{
    switch(action.type){
        case SET_DOCTOR_AUTH:
            return action.payload;
        default:
            return state;
    }
}
