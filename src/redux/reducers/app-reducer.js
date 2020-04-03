import apiDAL from "../../apiDAL/apiDAL";
import { getAuthUserDataTC } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

const initialState = {
    appIsReady: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                appIsReady: true
            }
        }
        default:
            return state
    }
}

export const initializedSuccessAC = () => ({ type: INITIALIZED_SUCCESS })

export const intitializingTC = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserDataTC())
        promise.then(() => {
            dispatch(initializedSuccessAC())
        })
    }
}

export default appReducer;