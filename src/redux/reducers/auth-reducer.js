import apiDAL from "../../apiDAL/apiDAL";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const DELETE_USER_DATA = 'DELETE_USER_DATA';
const GET_CAPTCHA_SUCCESS = 'GET_CAPTCHA_SUCCESS'

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null,
}

const reducerAuthUser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.dataFromResponse,
            }
        }
        case GET_CAPTCHA_SUCCESS: {
            debugger
            return {
                ...state,
                captcha: action.dataFromResponse,
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

export const deleteAuthUserData = (dataFromResponse) => ({type: SET_USER_DATA, dataFromResponse});
export const getCaptchaSuccess = (dataFromResponse) => ({type: GET_CAPTCHA_SUCCESS, dataFromResponse});


export const getAuthUserDataTC = () => {
    return (dispatch) => {
        return apiDAL.authAPI.authSuccess()
            .then((response) => {
                // debugger;
                if (response.data.resultCode === 0) {
                    let authData = response.data.data;
                    dispatch(setAuthUserDataAC(authData));
                }
            })
        // return 'alex'
    }
}

export const login = (data) => { // loginTC
    return (dispatch) => {
        apiDAL.authAPI.login(data)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserDataTC())
                } else {
                    if (response.data.resultCode === 10) {
                        dispatch(getCaptcha())
                    }
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

export const getCaptcha = () => {
    return dispatch => {
        apiDAL.authAPI.getCaptcha()
            .then(response => {
                const captchaURL = response.data.url
                debugger
                dispatch(getCaptchaSuccess(captchaURL))
            })
    }
}

export default reducerAuthUser;