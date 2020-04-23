import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import { Route, withRouter } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { getAuthUserDataTC } from './redux/reducers/auth-reducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { intitializingTC } from './redux/reducers/app-reducer';
import Preloader from './common/preloader/Preloader';
import Dev from './components/Dev/Dev';

class App extends React.Component {
    componentDidMount() {
        this.props.intitializing()
    }
    
    render() {

        {
            if (!this.props.appIsReady) {
                return (
                    <Preloader />
                )
            }
        }

        return (
            <div className='wrapper'>
                <div className='container'>
                    <HeaderContainer />
                    <Navigation />
                    <div className="content-container">
                        <main className='content'>
                            <Route path='/profile/:userID?' render={() => <ProfileContainer />} />
                            <Route path='/users' render={() => <UsersContainer />} />
                            <Route path='/dialogs' render={() => <DialogsContainer />} />
                            <Route path='/newsLenta' component={News} />
                            <Route path='/musicList' component={Music} />
                            <Route path='/settingsApp' component={Settings} />
                            <Route path='/login' component={Login} />
                            <Route path='/dev' component={Dev} />
                        </main>
                    </div>
                    <footer className='foot'>

                    </footer>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    appIsReady: state.app.appIsReady,
})

const mapDispatchToProps = (dispatch) => ({
    getAuthUserData: () => {
        dispatch(getAuthUserDataTC())
    },
    intitializing: () => {
        dispatch(intitializingTC())
    },
})

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps))(App)
