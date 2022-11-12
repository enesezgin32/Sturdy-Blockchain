import { 
    SET_DOCTOR_QR, SET_DOCTOR_PASSWORD 
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
