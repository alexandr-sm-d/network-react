import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import { Route, BrowserRouter } from 'react-router-dom';
import { updateTextPost } from './redux/state';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navigation />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}
            messagesData={props.state.messagesData} />} />
          <Route path='/profile' render={() => <Profile
            state={props.state.profilePage}
            update={updateTextPost} />} />
          <Route path='/newsLenta' component={News} />
          <Route path='/musicList' component={Music} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
