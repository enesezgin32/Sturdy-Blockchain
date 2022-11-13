import { SET_PATH } from "./constants"

export const pathReducer = (state=null,action)=>{
    switch(action.type){
        case SET_PATH:
            return action.payload;
        default:
            return state
    }
}
