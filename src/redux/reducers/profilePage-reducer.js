import apiDAL from "../../apiDAL/apiDAL";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';
const MAIN_PHOTO_DONE = 'MAIN_PHOTO_DONE'

let initialState = {
    postsData: [
        {id: 1, message: 'hi everyone!', likeCounts: 12},
        {id: 2, message: 'its my first react project', likeCounts: 10}
    ],
    profile: null,
    status: 'wait server response...',
}

const reducerProfilePage = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let stateClone = {...state};
            stateClone.postsData = [...state.postsData];

            if (stateClone.newPostText == '') {
                return stateClone;
            }

            function detectorID() {
                let num = stateClone.postsData.length - 1;
                return stateClone.postsData[num].id + 1;
            };

            function randomCountLikes() {
                return Math.round(100 * Math.random())
            }

            stateClone.postsData.push(
                {
                    id: detectorID(),
                    message: action.postBody,
                    likeCounts: randomCountLikes(),
                }
            );

            return stateClone;
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            let copyPostsData = [...state.postsData]
            return {
                ...state,
                postsData: copyPostsData.filter((post) => post.id !== action.postID)
            }
        }
        case MAIN_PHOTO_DONE: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photo}
            }
        }
        default:
            return state;
    }
}

export const addNewPostAC = (postBody) => ({type: ADD_POST, postBody});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const deletePost = (postID) => {
    return {type: DELETE_POST, postID}
}

// export const setMainPhotoDone = (photo) => ({type: MAIN_PHOTO_DONE, photo})

export const getProfile = (uID) => {
    return (dispatch) => {
        apiDAL.profileAPI.getProfile(uID)
            .then(resp => {
                dispatch(setUserProfile(resp.data));
            })
    }
}

export const getUserStatus = (userID) => {
    return (dispatch) => {
        apiDAL.profileAPI.getUserStatus(userID)
            .then(resp => {
                dispatch(setUserStatus(resp.data))
            })
    }
}

export const updateUserStatus = (status) => async (dispatch) => {
    try {
        const response = await apiDAL.profileAPI.updateStatus(status)
        if (response.data.resultCode === 0)
            dispatch(setUserStatus(status))
    } catch (error) {
        console.error(error)
    }
}


export const setMainPhoto = (file) => {
    return (dispatch) => {
        apiDAL.profileAPI.setMainPhoto(file)
            .then(resp => {
                console.log(resp)
                if (resp.data.resultCode === 0)
                    dispatch(setUserStatus(resp.data.photos))
            })
    }
}

export const saveProfileInfo = (formData) => {
    return async (dispatch, getState) => {
        const userID = getState().auth.id
        const response = await apiDAL.profileAPI.saveProfileInfo(formData)
        debugger
        if (response.resultCode === 0) {
            dispatch(getProfile(userID))
        } else {
            dispatch(stopSubmit('profile-info', {
                _error: response.messages[0],
            }))
            return Promise.reject(response.messages[0])
        }
    }
}

export default reducerProfilePage;