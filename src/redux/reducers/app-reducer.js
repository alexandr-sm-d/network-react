import apiDAL from "../../apiDAL/apiDAL";

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

export default appReducer;