import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import reducerDialogsPage from "./reducers/dialogsPage-reducer";
import reducerProfilePage from "./reducers/profilePage-reducer";
import reducerUsersPage from "./reducers/usersPage-reducer";
import reducerAuthUser from "./reducers/auth-reducer";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from "./reducers/app-reducer";


let reducersLits = combineReducers({
    profilePage: reducerProfilePage,
    dialogsPage: reducerDialogsPage,
    usersPage: reducerUsersPage,
    auth: reducerAuthUser,
    form: formReducer,
    app: appReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducersLits, composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));

// let store = createStore(reducersLits, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;