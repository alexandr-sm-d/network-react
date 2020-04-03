import { createStore, combineReducers, applyMiddleware } from "redux";
import reduserDialogsPage from "./reducers/dialogsPage-reducer";
import reduserProfilePage from "./reducers/profilePage-reducer";
import reducerUsersPage from "./reducers/usersPage-reducer";
import reducerAuthUser from "./reducers/auth-reducer";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from "./reducers/app-reducer";


let redusersLits = combineReducers({
    profilePage: reduserProfilePage,
    dialogsPage: reduserDialogsPage,
    usersPage: reducerUsersPage,
    auth: reducerAuthUser,
    form: formReducer,
    app: appReducer,
})

let store = createStore(redusersLits, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;