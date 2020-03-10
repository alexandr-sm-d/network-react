const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
    users: [],
    pageSize: 6,
    totalCountUsers: 21,
    currentPage: 1,
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
        case SET_USERS: {
            return {
                ...state,
                users: [
                    ...state.users,
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
export const setCurrentPageAC = (numberOfPage) => (
    {
        type: SET_CURRENT_PAGE,
        numberOfPage
    }
)
export default reducerUsersPage;