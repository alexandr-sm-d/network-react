import { createStore, combineReducers, applyMiddleware } from "redux";
import reduserDialogsPage from "./redusers/reduser-dialogsPage";
import reduserProfilePage from "./redusers/reduser-profilePage";
import reducerUsersPage from "./redusers/reduser-usersPage";
import reducerAuthUser from "./redusers/auth-reducer";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'


let redusersLits = combineReducers({
    profilePage: reduserProfilePage,
    dialogsPage: reduserDialogsPage,
    usersPage: reducerUsersPage,
    auth: reducerAuthUser,
    form: formReducer,
})

let store = createStore(redusersLits, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;