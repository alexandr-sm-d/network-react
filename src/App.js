import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import { Route } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

function App() {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navigation />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile />}/>
          <Route path='/users' render={() => <UsersContainer />}/>
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/newsLenta' component={News} />
          <Route path='/musicList' component={Music} />
          <Route path='/settingsApp' component={Settings} />
        </div>
      </div>
  );
}

export default App;
