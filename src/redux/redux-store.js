import { createStore, combineReducers } from "redux";
import reduserDialogsPage from "./redusers/reduser-dialogsPage";
import reduserProfilePage from "./redusers/reduser-profilePage";
import reducerUsersPage from "./redusers/reduser-usersPage";
import React from "react";

let redusersLits = combineReducers({
    profilePage: reduserProfilePage,
    dialogsPage: reduserDialogsPage,
    usersPage: reducerUsersPage,
})

let store = createStore(redusersLits);

window.react = React;
window.store = store;
export default store;