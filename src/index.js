import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
    { id: 1, message: 'hi everyone!', likeCounts: 12 },
    { id: 1, message: 'its my firsr react project', likeCounts: 10 }
];

let dialogsData = [
    { id: 1, name: 'Alex' },
    { id: 2, name: 'Vlad' },
    { id: 3, name: 'Mike' },
    { id: 4, name: 'Andrey' },
];

let messagesData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you' },
    { id: 3, message: 'How old are you' },
];

ReactDOM.render(<App postsData={postsData}
    dialogsData={dialogsData}
    messagesData={messagesData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
