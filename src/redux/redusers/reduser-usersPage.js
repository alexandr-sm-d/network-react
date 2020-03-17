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
}

const reducerUsersPage = (state = initialState, action) => {
    switch (action.type) {
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
export const follow = (userID) => ({ type: FOLLOW, userID });
export const unfollow = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const totalCount = (count) => ({ type: TOTAL_COUNT, count });
export const togglePreloader = (valueToggle) => ({ type: TOGGLE_PRELOADER, valueToggle });
export const setCurrentPage = (numberOfPage) => ({ type: SET_CURRENT_PAGE, numberOfPage });
export const toggleFollowing = (isFollowing, userID) => ({ type: TOGGLE_FOLLOWING, isFollowing, userID });

export default reducerUsersPage;