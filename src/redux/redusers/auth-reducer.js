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

export default reducerAuthUser;