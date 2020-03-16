import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import { Route } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';

function App() {
  return (
    <div className='wrapper'>
      <div className='container'>
        <HeaderContainer />
        <Navigation />
        <div class="content-container">
          <main className='content'>
            <Route path='/profile/:userID?' render={() => <ProfileContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/newsLenta' component={News} />
            <Route path='/musicList' component={Music} />
            <Route path='/settingsApp' component={Settings} />
          </main>
        </div>
        <footer className='foot'>

        </footer>
      </div>
    </div>
  );
}

export default App;
