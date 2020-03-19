import { createStore, combineReducers, applyMiddleware } from "redux";
import reduserDialogsPage from "./redusers/reduser-dialogsPage";
import reduserProfilePage from "./redusers/reduser-profilePage";
import reducerUsersPage from "./redusers/reduser-usersPage";
import reducerAuthUser from "./redusers/auth-reducer";
import React from "react";
import thunkMiddleware from 'redux-thunk'


let redusersLits = combineReducers({
    profilePage: reduserProfilePage,
    dialogsPage: reduserDialogsPage,
    usersPage: reducerUsersPage,
    auth: reducerAuthUser,
})

let store = createStore(redusersLits, applyMiddleware(thunkMiddleware));

window.react = React;
window.store = store;
export default store;