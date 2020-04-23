import apiDAL from "../../apiDAL/apiDAL";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST'

let initialState = {
    postsData: [
        { id: 1, message: 'hi everyone!', likeCounts: 12 },
        { id: 2, message: 'its my firsr react project', likeCounts: 10 }
    ],
    profile: null,
    status: 'wait server response...'
}

const reducerProfilePage = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let stateClone = { ...state };
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
            debugger
            let copyPostsData = [...state.postsData]
            copyPostsData.pop()
            return {
                ...state,
                postsData: copyPostsData
            }
        }
        default:
            return state;
    }
}

export const addNewPostAC = (postBody) => ({ type: ADD_POST, postBody});
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const deletePost = () => {
    debugger;
    return {type: DELETE_POST}
}

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

export const updateUserStatus = (status) => {
    return (dispatch) => {
        apiDAL.profileAPI.updateStatus(status)
            .then(resp => {
                if (resp.data.resultCode === 0)
                dispatch(setUserStatus(status))
            })
    }
}

export default reducerProfilePage;