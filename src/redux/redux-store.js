import { createStore, combineReducers } from "redux";
import reduserDialogsPage from "./redusers/reduser-dialogsPage";
import reduserProfilePage from "./redusers/reduser-profilePage";

let redusersLits = combineReducers({
    profilePage: reduserProfilePage,
    dialogsPage: reduserDialogsPage,
})

let store = createStore(redusersLits);

window.store = store;
export default store;