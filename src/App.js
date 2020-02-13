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
import Settings from './components/Settings/Settings';

function App(props) {
  console.log(props.store.getState())
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navigation />
        <div className='app-wrapper-content'>




          <Route path='/profile' render={() => 
            <Profile

              state={props.store.getState().profilePage}
              update={props.store.updateTextPost.bind(props.store)} />}

          />




          {/* <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}
            messagesData={props.state.messagesData} />} />
          <Route path='/newsLenta' component={News} />
          <Route path='/musicList' component={Music} />
          <Route path='/settingsApp' component={Settings} /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
