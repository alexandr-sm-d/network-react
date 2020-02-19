import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import { Route, BrowserRouter } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navigation />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile store={props.store} />}/>
          <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
          <Route path='/newsLenta' component={News} />
          <Route path='/musicList' component={Music} />
          <Route path='/settingsApp' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
