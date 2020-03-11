const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOTAL_COUNT = 'TOTAL_COUNT';

let initialState = {
    users: [],
    pageSize: 10,
    totalCountUsers: 0,
    currentPage: 1,
    isFetching: true,
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
        default:
            return state;
    }
}

export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const totalCountAC = (count) => ({type: TOTAL_COUNT, count})
export const setCurrentPageAC = (numberOfPage) => (
    {
        type: SET_CURRENT_PAGE,
        numberOfPage
    }
)
export default reducerUsersPage;