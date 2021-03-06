import apiDAL from "../../apiDAL/apiDAL";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOTAL_COUNT = 'TOTAL_COUNT';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING';

let initialState = {
    users: [],
    pageSize: 10,
    totalCountUsers: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    fake: 10,
}

const reducerUsersPage = (state = initialState, action) => {
    switch (action.type) {
        case 'FAKE': {
            return {
                ...state,
                fake: state.fake + 1,
            }
        }
        case FOLLOW: {
            //нужно вернуть новый state, его копию, чтобы корректно отрабатывала connect()()
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userID) {
                        return {
                            ...u,
                            followed: true,
                        }
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            //нужно вернуть новый state, его копию, чтобы корректно отрабатывала connect()()
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userID) {
                        return {
                            ...u,
                            followed: false,
                        }
                    }
                    return u;
                })
            }
        }
        case TOTAL_COUNT: {
            return {
                ...state,
                totalCountUsers: action.count,
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [
                    // ...state.users,
                    ...action.users,
                ]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.numberOfPage
            }
        }
        case TOGGLE_PRELOADER: {
            return {
                ...state,
                isFetching: action.valueToggle,
                users: [], //hidden users during preloader time.
            }
        }
        case TOGGLE_FOLLOWING: {
            return {
                ...state,
                followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id != action.userID)
            }
        }
        default:
            return state;
    }
}

//action creators:
export const followDone = (userID) => ({ type: FOLLOW, userID });
export const unfollowDone = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const totalCount = (count) => ({ type: TOTAL_COUNT, count });
export const togglePreloader = (valueToggle) => ({ type: TOGGLE_PRELOADER, valueToggle });
export const setCurrentPage = (numberOfPage) => ({ type: SET_CURRENT_PAGE, numberOfPage });
export const toggleFollowing = (isFollowing, userID) => ({ type: TOGGLE_FOLLOWING, isFollowing, userID });

//thunk creators:
export const requestUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage))
        dispatch(togglePreloader(true));
        apiDAL.userAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(togglePreloader(false));
                dispatch(setUsers(data.items));
                dispatch(totalCount(data.totalCount));
            })
    }
}

export const follow = (userID) => {
    return (dispatch) => {
        dispatch(toggleFollowing(true, userID))
        apiDAL.userAPI.followUser(userID).then(data => {
            if (data.resultCode === 0) {
                dispatch(followDone(userID))
            }
            dispatch(toggleFollowing(false, userID))
        })
    }
}

export const unfollow = (userID) => {
    return (dispatch) => {
        dispatch(toggleFollowing(true, userID))
        apiDAL.userAPI.unfollowUser(userID).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowDone(userID))
            }
            dispatch(toggleFollowing(false, userID))
        })
    }
}

export default reducerUsersPage;