import { SET_PATH } from '../reducers/constants'

export const pathAction=(arg)=>async(dispatch)=>{
    dispatch({type:SET_PATH ,payload:arg})
}
