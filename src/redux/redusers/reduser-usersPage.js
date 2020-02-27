const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1,
            photoURL: 'https://ru.baku.ws/uploads/posts/2019-06/1559909852_vcr8zt7l8bg.jpg',
            followed: true,
            fullName: 'Azar J.',
            status: `I log in here`,
            location: {
                cityName: 'London',
                contry: 'England',
            },
        },
        {
            id: 2,
            photoURL: 'https://realworldofsport.files.wordpress.com/2015/08/c5e01-john2bterry.jpg?w=1200',
            followed: false,
            fullName: 'Terry M.',
            status: `I log in here`,
            location: {
                cityName: 'London',
                contry: 'England',
            },
        },
        {
            id: 3,
            photoURL: 'https://img.tsn.ua/cached/1533897632/tsn-d5a3c83b3e2b3f0a9ff57401c8651a3a/thumbs/1200x630/58/7a/47651445fd9362215813fa3c8ff57a58.jpg',
            followed: false,
            fullName: 'Lampard F.',
            status: `I log in here`,
            location: {
                cityName: 'London',
                contry: 'England',
            },
        },
    ]
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
        default:
            return state;
    }
}

export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export default reducerUsersPage;