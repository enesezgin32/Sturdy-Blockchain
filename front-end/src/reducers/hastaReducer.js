import { 
    SET_GENERAL_INFO, SET_DETAILED_INFO, SET_HASTA_QR, SET_HASTA_TC, SET_HASTA_PASSWORD 
} from "./constants";

export const generalInfoReducer = (state=null,action)=>{
    switch(action.type){
        case SET_GENERAL_INFO:
            return action.payload;
        default:
            return state;
    }
}

export const detailedInfoReducer = (state=null,action)=>{
    switch(action.type){
        case SET_DETAILED_INFO:
            return action.payload;
        default:
            return state;
    }
}

export const hastaQrReducer = (state=null,action)=>{
    switch(action.type){
        case SET_HASTA_QR:
            return action.payload;
        default:
            return state;
    }
}

export const hastaTcReducer = (state=null,action)=>{
    switch(action.type){
        case SET_HASTA_TC:
            return action.payload;
        default:
            return state;
    }
}

export const hastaPasswordReducer = (state=null,action)=>{
    switch(action.type){
        case SET_HASTA_PASSWORD:
            return action.payload;
        default:
            return state;
    }
}
