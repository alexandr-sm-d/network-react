import apiDAL from "../../apiDAL/apiDAL";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const DELETE_USER_DATA = 'DELETE_USER_DATA';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const reducerAuthUser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.dataFromResponse,
            }
        }
        case DELETE_USER_DATA: {
            return {
                ...state,
                ...action.dataFromResponse,
            }
        }
        default:
            return state
    }
}
export const setAuthUserDataAC = (dataFromResponse) => ({
    type: SET_USER_DATA, dataFromResponse: {
        ...dataFromResponse,
        isAuth: true
    }
});

export const deleteAuthUserData = (dataFromResponse) => ({ type: SET_USER_DATA, dataFromResponse });

export const getAuthUserDataTC = () => {
    return (dispatch) => {
        apiDAL.authAPI.authSuccess()
            .then((response) => {
                // debugger;
                if (response.data.resultCode === 0) {
                    let authData = response.data.data;
                    dispatch(setAuthUserDataAC(authData));
                }
            })
    }
}

export const login = (data) => { // loginTC
    return (dispatch) => {
        apiDAL.authAPI.login(data)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserDataTC())
                } else {
                    // debugger
                    const message = response.data.messages.length
                        ? response.data.messages[0]
                        : 'some error'
                    dispatch(stopSubmit('login', {
                        _error: message,
                    }))
                }
            })
    }
}

export const logout = () => { // loginTC
    return (dispatch) => {
        apiDAL.authAPI.logout()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(deleteAuthUserData(initialState))
                }
            })
    }
}

export default reducerAuthUser;