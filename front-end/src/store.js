import {createStore,combineReducers,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { doctorPasswordReducer, doctorQrReducer } from './reducers/doctorReducer'
import { detailedInfoReducer, generalInfoReducer, hastaPasswordReducer, hastaQrReducer, hastaTcReducer } from './reducers/hastaReducer'
import { pathReducer } from './reducers/pathReducer'

const reducer = combineReducers({
    generalInfo: generalInfoReducer,
    detailedInfo: detailedInfoReducer,
    hastaQr: hastaQrReducer,
    hastaTc: hastaTcReducer,
    hastaPassword: hastaPasswordReducer,
    doctorQr: doctorQrReducer,
    doctorPassword: doctorPasswordReducer,
    path: pathReducer
})

const initialState = {
    path: null,
    generalInfo: null,
    detailedInfo: null,
    doctorQr: null,
    hastaQr:null,
    hastaTc: null,
    hastaPassword: null,
    doctorPassword: null
}

const middleware = [thunk]

const store = createStore(reducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)))


export default store