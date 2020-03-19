import apiDAL from "../../apiDAL/apiDAL";

const SET_USER_DATA = 'SET_USER_DATA';

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
                isAuth: true,
            }
        }
        default:
            return state
    }
}
export const setAuthUserDataAC = (dataFromResponse) => ({ type: SET_USER_DATA, dataFromResponse });

export const showAuthTC = () => {
    return (dispatch) => {
        apiDAL.authAPI.authSuccess()
            .then((response) => {
                // debugger;
                if (response.data.resultCode === 0) {
                    alert('авторизован(залгоинин)');
                    let authData = response.data.data;
                    dispatch(setAuthUserDataAC(authData));
                }
            })
    }
}

export default reducerAuthUser;