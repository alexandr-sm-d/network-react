import state, { subscribe } from './redux/state.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function rerenderApp(state) {
    ReactDOM.render(<App state={state} />, document.getElementById('root'));
}

rerenderApp(state);


subscribe(rerenderApp);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();